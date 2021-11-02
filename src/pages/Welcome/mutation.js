import gql from 'graphql-tag'

export const CreateUser = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    createdAt
    id
  }
}
`
