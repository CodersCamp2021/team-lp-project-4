import { QueryClient, QueryClientProvider } from 'react-query';
import Shell from './components/shell/Shell';
import background from './assets/rose-petals_1.svg';
import { Global, MantineProvider, MantineThemeOverride } from '@mantine/core';
import '@fontsource/poppins';

const queryClient = new QueryClient();

const theme: MantineThemeOverride = {
  fontFamily: 'Poppins, sans-serif',
  headings: { fontFamily: 'Poppins, sans-serif' },
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Global
          styles={{
            body: {
              margin: 0,
              backgroundImage: `url("${background}")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            },
          }}
        />
        <Shell />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
