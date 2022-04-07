import { QueryClient, QueryClientProvider } from 'react-query';
import Games from './components/Games';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Games />
    </QueryClientProvider>
  );
}

export default App;
