import { h, Component } from 'preact';
import User from './User';
import { Router } from 'preact-router';

export class App extends Component {

    render() {
        return (
            <div class="app">
                <User name="Haosik" image="https://shechive.files.wordpress.com/2012/02/a-kitty-cat-7.jpg" />
            </div>
        );
    }

}


// Form App
// export class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.submit = this.submit.bind(this)
// 	}
// 	submit(e) {
// 		console.log(this.state.inputValue);
// 	}


// 	render(props, {inputValue = '', }) {
// 		return (
// 			<div >
// 				<form onSubmit={this.onSubmit} action="javascript:">
// 					<input type="text" value={inputValue} onInput={linkState(this, 'inputValue')} />
// 					<input type="submit" />
// 					<pre><code>The state is: {JSON.stringify(this.state, null, 2)}</code></pre>
// 				</form>
// 			</div>
// 		)
// 	}
// }

export default App;