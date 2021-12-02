import ChuckProvider from './context/ChuckProvider'
import Joke from './components/Joke'
import SavedJokes from './components/SavedJokes'

function App() {
  return (
    <ChuckProvider>
      <div>
        <header>
          <h1>
            Chuck Norris Jokes App
          </h1>
        </header>
        <Joke />
        <SavedJokes />
      </div>
    </ChuckProvider>
  );
}

export default App;
