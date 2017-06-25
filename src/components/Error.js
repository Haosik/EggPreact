import { h } from 'preact';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <p>Sorry! 404</p>
            <p><Link to="/">Go to home page</Link></p>
        </div>
    )
}