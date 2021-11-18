import React, {useState} from 'react';
import useGreeting from "../../hooks/useGreeting";

const App = () => {
	const [name, setName] = useState("");
	const [submittedName, setSubmittedName] = useState("")

	const {isLoading, data} = useGreeting(submittedName);

	return (
		<div>
			<h1>Greeting Service</h1>
			<form onSubmit={(e) => {
				setSubmittedName(name);
				e.preventDefault();
			}}>
				<input type="text" placeholder="Name" value={name??''} onChange={(e) => {
					setName(e.target.value)
				}}/>
				<button type="submit">Greet</button>
			</form>
			<h2>{isLoading ? 'Loading...' : data.greeting}</h2>
		</div>
	);
}

export default App;
