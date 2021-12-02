import ChuckContext from "./ChuckContext";
import { Component } from 'react';

class ChuckProvider extends Component {
    state = {
        joke: '',
        saved: [],
    };

    render() {
        return(
            <ChuckContext.Provider
                value  = {{
                    joke: this.state.joke,
                    saved: this.state.saved,
                    getJoke: () => { 
                        fetch('https://api.chucknorris.io/jokes/random')
                            .then(response => response.json())
                            .then(data => {
                                this.setState(state => ({joke: data.value}))
                            }) 
                    },
                    saveJoke: () => {
                        let saved = this.state.saved;
                        let joke = this.state.joke;
                        if(joke.length > 0 && !saved.includes(joke)) {
                            saved.push(joke);
                            this.setState(state => ({saved: saved}));
                        }
                    },
                    deleteJoke: joke => {
                        let saved = [...this.state.saved];
                        let index = saved.indexOf(joke);
                        if(index > -1) {
                            saved.splice(index, 1);
                            this.setState(state => ({saved: saved}));
                        }
                    },
                }}
            >
                {this.props.children}
            </ChuckContext.Provider>
        );
    }
}

export default ChuckProvider;