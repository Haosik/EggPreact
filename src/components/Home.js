import { h } from 'preact';
import { withRouter } from 'react-router-dom';

function search(router, query) {
    router.history.push(`/profile/${encodeURIComponent(query)}`);
}

const Home = withRouter((router) => {
    return (
        <section>
            <p>Enter a GitHub username:</p>
            <input type="search"
            placeholder="e.g. Nick"
            onSearch={e => search(router, e.target.value)}
            />
        </section>
    )
});

export default Home;