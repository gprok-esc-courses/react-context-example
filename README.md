# React Context example

**About**: Chuck Norris jokes application using React Context to keep current joke, save jokes, or remove saved.
Fetches jokes from the https://api.chucknorris.io/ API. 

**Reference**: I used this tutorial as a guide: 
https://www.toptal.com/react/react-context-api

## Files

- ```context/ChuckContext.js```: Initializes the context
- ```context/ChuckProvider.js```: Handles the state and provides methods to manipulate state
- ```App.js```: Includes the key components, Joke and Saved Jokes (Context provider)
- ```components/Joke.js```: Displays the current joke (Context consumer)
- ```components/SavedJoke.js```: Displays one saved joke as a list item
- ```components/SavedJokes.js```: Displays a list of the saved joks. For each joke it provides as attributes the joke and the callback function to delete the joke on click (Context consumer)
