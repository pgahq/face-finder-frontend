import React, { useState } from 'react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'
import { AppProvider } from '../../contexts/AppContext'

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
}

const withApolloClient = App => {
  const WithApolloClient = props => {
    const [accessToken, setAccessToken] = useState(null)

    const uploadLink = createUploadLink({
      uri: process.env.REACT_APP_API_ROOT
    })

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : ''
        }
      }
    })

    const client = new ApolloClient({
      link: authLink.concat(uploadLink),
      cache: new InMemoryCache({ resultCaching: false }),
      defaultOptions
    })

    return (
      <ApolloProvider client={client}>
        <AppProvider value={{ accessToken, setAccessToken }}>
          <App {...props} />
        </AppProvider>
      </ApolloProvider>
    )
  }

  WithApolloClient.displayName = `withApolloClient(${App.displayName ||
    App.name ||
    'App'})`

  return WithApolloClient
}

export default withApolloClient
