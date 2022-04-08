import { QueryClient, QueryClientProvider } from 'react-query';
import Shell from './components/shell/Shell';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Shell />
    </QueryClientProvider>
  );
}

export default App;
