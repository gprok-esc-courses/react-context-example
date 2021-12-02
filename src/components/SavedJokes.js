import ChuckContext from "../context/ChuckContext";
import SavedJoke from './SavedJoke';

const SavedJokes = () => (
    <ChuckContext.Consumer>
        {context => (
            <div>
                <h2>Saved Jokes</h2>
                <ul>
                {context.saved.map(joke => (
                    <SavedJoke 
                        joke={joke} 
                        deleteJoke={() => context.deleteJoke(joke)}
                    />
                ))}
                </ul>
            </div>
        )}
    </ChuckContext.Consumer>
);

export default SavedJokes;