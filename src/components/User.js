import { h } from 'preact';
import { Link } from 'react-router-dom';

export function User(props) {
    return(
        <div>
            <img src={this.props.image} alt=""/>
            <p>{this.props.name}</p>
            <p><Link to="/">Go home</Link></p>
        </div>
    );
}

export default User;