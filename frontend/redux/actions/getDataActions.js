
export const FETCH_BEGIN   = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchBegin = () => ({
	type: FETCH_BEGIN
});

export const fetchSuccess = data => ({
	type: FETCH_SUCCESS,
	payload: { data }
});

export const fetchFailure = error => ({
	type: FETCH_FAILURE,
	payload: { error }
});
