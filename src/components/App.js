import { h, Component } from 'preact';
import linkState from 'linkstate';

// export class App extends Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             user: null,
//             loading: true
//         }
//     }
//     componentDidMount() {
//         fetch(this.props.config.urls.user)
//         .then(resp => resp.json())
//         .then(user => {
//             this.setState({
//                 user,
//                 loading: false
//             })
//         })
//         .catch(err => {
//             console.error(err);
//         })
//     }
//     render({config}, {loading, user}) {
//         return (
//         <div class="app">
//             {loading 
//             ? <div> Fetching: {config.urls.user} </div> 
//             : <div class="user">
//                 <figure class="user__image">
//                     <img src={user.avatar_url} />
//                 </figure>
//                 <p class="user__name">{user.name}</p>
//              </div>
//             }

//         </div>
//     );
//     }

// }

export class App extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this)
	}
	submit(e) {
		console.log(this.state.inputValue);
	}


	render(props, {inputValue = '', }) {
		return (
			<div >
				<form onSubmit={this.onSubmit} action="javascript:">
					<input type="text" value={inputValue} onInput={linkState(this, 'inputValue')} />
					<input type="submit" />
					<pre><code>The state is: {JSON.stringify(this.state, null, 2)}</code></pre>
				</form>
			</div>
		)
	}
}

export default App;