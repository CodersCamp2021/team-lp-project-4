import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Shell from './components/shell/Shell';
import background from './assets/rose-petals_1.svg';
import { Global, MantineProvider, MantineThemeOverride } from '@mantine/core';
import '@fontsource/poppins';
import { NotificationsProvider } from '@mantine/notifications';
import { AuthContext } from './AuthContext';
import { useAuth } from './hooks/use-auth';

const queryClient = new QueryClient();

const theme: MantineThemeOverride = {
  fontFamily: 'Poppins, sans-serif',
  headings: { fontFamily: 'Poppins, sans-serif' },
  colorScheme: 'dark',
};

function App() {
  const [userInfo, setUserInfo] = useAuth();

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
          <NotificationsProvider position="bottom-center">
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
    </AuthContext.Provider>
  );
}

export default App;
