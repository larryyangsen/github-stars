import 'tailwindcss/tailwind.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppProps } from 'next/app';
import { useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};

export default App;
