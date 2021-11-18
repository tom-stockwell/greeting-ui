import type {FC, PropsWithChildren} from 'react';
import {QueryClient, QueryClientProvider} from "react-query";

const client = new QueryClient();

const Providers: FC<PropsWithChildren<unknown>> = ({children}) => (
	<QueryClientProvider client={client}>{children}</QueryClientProvider>
);

export default Providers;
