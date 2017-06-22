import { h, Component } from 'preact';
import User from './User';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            loading: true
        }
    }
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.user}`)
        .then(data => data.json())
        .then(user => this.setState({
            user,
            loading: false
        }))
        .catch(err => console.log(err))
    }
    render({}, { user, loading }) {
        return (
                loading 
                ? <p>Fetching...</p>
                : <User image={user.avatar_url} name={user.name}/>
                
        )
    }

}
