import { QueryClient, QueryClientProvider } from 'react-query';
import Nav from './Nav';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>Hello, World!</div>
      <Nav />
    </QueryClientProvider>
  );
}

export default App;
