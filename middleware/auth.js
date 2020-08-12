export default async function({ app, redirect }) {
  const hasToken = await !!app.$apolloHelpers.getToken();
  if (!hasToken) {
    return redirect('/');
  }
}
