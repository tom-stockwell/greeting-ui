import {useQuery} from "react-query";
import {API_URL} from "../util/env";

export default function useGreeting(name: string) {
	return useQuery(['greeting', name], () =>
		fetch(`${API_URL}/hello/${name}`).then((res) => res.json())
	);
}
