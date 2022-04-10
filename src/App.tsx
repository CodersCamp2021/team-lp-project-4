import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Shell from './components/shell/Shell';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Shell />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
