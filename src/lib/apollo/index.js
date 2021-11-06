import React from 'react'
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'

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
    const httpLink = createHttpLink({
      uri: process.env.REACT_APP_API_ROOT
    })

    const client = new ApolloClient({
      link: httpLink,
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