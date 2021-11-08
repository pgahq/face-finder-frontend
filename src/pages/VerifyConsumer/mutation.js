import gql from 'graphql-tag'

export const VERIFY_CONSUMER = gql`
  mutation verifyConsumer($selfie: Upload!, $email: String!) {
    verifyConsumer(selfie: $selfie, email: $email) {
      email
      accessToken
      expiresIn
  }
}
`
