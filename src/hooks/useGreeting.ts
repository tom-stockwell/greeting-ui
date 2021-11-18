import {useQuery} from "react-query";

export default function useGreeting(name: string) {
	return useQuery(['greeting', name], () =>
		fetch(`http://localhost:8080/hello/${name}`).then((res) => res.json())
	);
}
