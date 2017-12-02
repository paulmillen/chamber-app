import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserList from './UserList';

import {
	addUser,
} from '../actions/actionCreators'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { submission: undefined };
	}

	handleSubmit(e) {
		e.preventDefault()
		const id = new Date();
		const name = this.refs.name.value;
		const instrument = this.refs.instrument.value;
		const location = this.refs.location.value;
		this.props.addUser(id, name, instrument, location);
		this.refs.userForm.reset();
		
		this.setState(() => ({
			submission: true
		}))
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				{this.state.submission && <p> submission successful </p>}
				{this.props.users.map((user) => user.name)}
				<form ref='userForm' onSubmit={this.handleSubmit}>
					<input type='text' ref='name' placeholder='name'/>
					<input type='text' ref='instrument' placeholder='instrument'/>
					<input type='text' ref='location' placeholder='location'/>
					<button type='submit'>Submit</button>
				</form>
				<UserList users={this.state.users} />
			</div>
		);
	};
};

const mapStateToProps = state => ({
	users: state.addUser.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	addUser,
}, dispatch);

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home);