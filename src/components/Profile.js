import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { fetchUser } from '../actions';

import User from './User';

export class Profile extends Component {
    componentDidMount() {
        //Getting the :user from react-router
        const username = this.props.match.params.user;
        this.props.fetchUser(username);
    }
    render({ loading, user }) {
        return (
            loading
                ? <p>Fetching...</p>
                : <User image={user.avatar_url} name={user.name} />

        )
    }

}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (username) => dispatch(fetchUser(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);