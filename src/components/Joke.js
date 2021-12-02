import ChuckContext from "../context/ChuckContext";

const Joke = () => (
    <ChuckContext.Consumer>
        {context => (
            <div>
                <button onClick={context.getJoke}>Get Joke</button>
                <button onClick={context.saveJoke}>Save</button>
                <h2>{context.joke}</h2>
            </div>
        )}
    </ChuckContext.Consumer>
);

export default Joke;