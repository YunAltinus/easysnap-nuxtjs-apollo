export default function({ app, store, req }) {
  if (process.client) {
    store.dispatch('initAuth');
  } else {
    store.dispatch('initAuth', req);
  }
}
