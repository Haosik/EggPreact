import { h } from 'preact';
import { route } from 'preact-router';

function search(query) {
    route(`/profile/${query}`);
}

export default function Home() {
    return (
        <section>
            <p>Enter a GitHub username:</p>
            <input type="search"
            placeholder="e.g. Nick"
            onSearch={e => search(e.target.value)}
            />
        </section>
    )
}