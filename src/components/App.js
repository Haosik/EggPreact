import { h, Component } from 'preact';

export class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            user: null,
            loading: true
        }
    }
    componentDidMount() {
        fetch(this.props.config.urls.user)
        .then(resp => resp.json())
        .then(user => {
            this.setState({
                user,
                loading: false
            })
        })
        .catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
        <div class="app">
            {this.state.loading 
            ? <div> Loading... </div> 
            : <div class="user">
                <figure class="user__image">
                    <img src={this.state.user.avatar_url} />
                </figure>
                <p class="user__name">{this.state.user.name}</p>
             </div>
            }
            
        </div>
    );
    }
    
}

export default App;