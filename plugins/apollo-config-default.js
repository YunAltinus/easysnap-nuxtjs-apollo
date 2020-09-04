export default function() {
  return {
    httpEndpoint: 'https://easysnap-nuxt.herokuapp.com/graphql',
    wsEndpoint: 'wss://easysnap-nuxt.herokuapp.com/graphql',
    httpLinkOptions: {
      credentials: 'same-origin'
    }
  };
}
