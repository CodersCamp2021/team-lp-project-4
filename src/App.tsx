import { QueryClient, QueryClientProvider } from 'react-query';
import Shell from './components/shell/Shell';
import { Global } from '@mantine/core';
import background from './assets/rose-petals_1.svg';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global
        styles={() => ({
          body: {
            margin: 0,
            backgroundImage: `url("${background}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          },
        })}
      />
      <Shell />
    </QueryClientProvider>
  );
}

export default App;
