import { h } from 'preact';
import User from './User';

const users = [
    {
        image: "http://www.minionnation.co.uk/images/fan/kevins-faves.png",
        name: "Ozzy Osbourne"
    },
    {
        image: "http://www.minionnation.co.uk/images/fan/stuarts-faves.png",
        name: "Max Reality"
    },
    {
        image: "http://www.minionnation.co.uk/images/fan/bobs-faves.png",
        name: "Scarlett Johanson"
    }
];

export function App () {
    return (
        <div class="app">
            {users.map(user => <User {...user} key={user.name}/>)}
        </div>
    );
}

export default App;