import gql from 'graphql-tag'

export const MY_PHOTOS_IN_EVENT = gql`
  query myPhotosInEvent($eventId: Int!){
    myPhotosInEvent(eventId: $eventId) {
      id
      photo {
        id
        filename
        url
      }
  }
}
`
