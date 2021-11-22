import gql from 'graphql-tag'

export const MY_EVENTS = gql`
  query {
    myEvents {
      status
      events {
        id
        name
        gcsBucket
        startTime
        endTime
      }
  }
}
`
