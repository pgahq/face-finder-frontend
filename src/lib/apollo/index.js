import React from 'react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'

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
    const uploadLink = createUploadLink({
      uri: process.env.REACT_APP_API_ROOT
    })

    const authLink = setContext((_, { headers }) => {
      const token = window.localStorage.getItem('accessToken')

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ''
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
        <App {...props} />
      </ApolloProvider>
    )
  }

  WithApolloClient.displayName = `withApolloClient(${App.displayName ||
    App.name ||
    'App'})`

  return WithApolloClient
}

export default withApolloClient
