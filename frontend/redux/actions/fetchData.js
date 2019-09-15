import Cookies from 'js-cookie';
import fetch from 'isomorphic-fetch';
import {fetchBegin, fetchFailure, fetchSuccess} from './getDataActions';
export function fetchData(URL) {
	return dispatch => {
		dispatch(fetchBegin());
		return fetch(process.env.BASE_API_URL+URL, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRFToken': Cookies.get('csrftoken')
			}
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(data => {
				dispatch(fetchSuccess(data));
				return data;
			})
			.catch(error => dispatch(fetchFailure(error)));
	};
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}