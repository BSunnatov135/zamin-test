import { ThemeProvider } from '@emotion/react'
import React from 'react'
import Layout from 'components/Layout'
import 'styles/globals.scss'
import theme from 'mui-theme'
import { persistor, store } from '../store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { useEffect } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>

      {typeof window !== 'undefined' ? (
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      ) : (
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      )}
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp
