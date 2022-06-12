/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getS3Object = /* GraphQL */ `
  query GetS3Object($id: ID!) {
    getS3Object(id: $id) {
      id
      name
      bucket
      key
      contentType
      createdAt
      updatedAt
    }
  }
`;
export const listS3Objects = /* GraphQL */ `
  query ListS3Objects(
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listS3Objects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        bucket
        key
        contentType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
