import type { FindPostQuery, FindPostQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from 'src/components/Article'

export const QUERY = gql`
  query FindPostQuery($id: Int!) {
    post: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...!</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPostQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  post,
}: CellSuccessProps<FindPostQuery, FindPostQueryVariables>) => {
  return <Article key={post.id} article={post} />
}
