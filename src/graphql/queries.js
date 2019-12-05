/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncPosts = `query SyncPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPosts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      title
      rating
      status
      _version
      _deleted
      _lastChangedAt
    }
    nextToken
    startedAt
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    rating
    status
    _version
    _deleted
    _lastChangedAt
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      rating
      status
      _version
      _deleted
      _lastChangedAt
    }
    nextToken
    startedAt
  }
}
`;
