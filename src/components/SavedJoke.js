

const SavedJoke = props => (
    <li onClick={props.deleteJoke}>
        {props.joke}
    </li>
);

export default SavedJoke;