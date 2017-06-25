import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';

import reducer from './reducer';

import App from './components/App';

const store = createStore(reducer, {
	loading: true,
	user: null
}, applyMiddleware(thunk));

const config = {
	urls: {
		user: 'https://api.github.com/users/haosik'
	}
}

render((
	<Provider store={store}>
		<App config={config} />
	</Provider>
), document.querySelector('main'))