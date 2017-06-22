import { h } from 'preact';

export function User(props) {
    return(
        <div>
            <img src={this.props.image} alt=""/>
            <p>{this.props.name}</p>
        </div>
    );
}

export default User;