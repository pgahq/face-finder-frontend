import gql from 'graphql-tag'

export const MY_EVENTS = gql`
  query {
    myEvents {
      id
      name
      gcsBucket
      startTime
      endTime
  }
}
`
