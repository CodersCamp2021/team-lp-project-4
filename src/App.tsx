import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Shell from './components/shell/Shell';
import background from './assets/rose-petals_1.svg';
import { Global, MantineProvider, MantineThemeOverride } from '@mantine/core';
import '@fontsource/poppins';
import { NotificationsProvider } from '@mantine/notifications';

const queryClient = new QueryClient();

const theme: MantineThemeOverride = {
  fontFamily: 'Poppins, sans-serif',
  headings: { fontFamily: 'Poppins, sans-serif' },
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
        <NotificationsProvider>
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
        </NotificationsProvider>
      </MantineProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
