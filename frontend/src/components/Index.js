import React, { Component } from 'react';
import { connect } from 'react-redux';

class Index extends Component {
	componentDidMount(){
	}
	render() {
		return (
			<h1>
				Hello World!
			</h1>
		);
	}
}
const mapStateToProps = ({
	// x: state.x
});
export default connect(mapStateToProps)(Index);