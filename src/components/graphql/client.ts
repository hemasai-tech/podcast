import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache: cache,
  uri: 'https://youtube-golang-podcast.onrender.com/query'
})