// // app/routes/index.tsx
// import type { LoaderArgs } from '@vercel/remix'
// import { useLoaderData } from '@remix-run/react'

// import { client } from '~/lib/sanity'
// import type { UsersResponse } from '~/UsersList'
// import { UsersList, usersQuery } from '~/UsersList'
// import { Layout } from '~/ui'

// export async function loader({ request }: LoaderArgs) {
//   const url = new URL(request.url)
//   const lastId = url.searchParams.get('lastId') || ''

//   const users = await client.fetch<UsersResponse>(usersQuery, { lastId })

//   return { users, lastId }
// }

// export default function Index() {
//   const { users, lastId } = useLoaderData<typeof loader>()

//   return (
//     <Layout>
//       <UsersList data={users} lastId={lastId} />
//     </Layout>
//   )
// }