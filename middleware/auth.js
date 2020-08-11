export default async function(context) {
  const hasToken = await !!context.app.$apolloHelpers.getToken();
  if (!hasToken) {
    return context.redirect('/');
  }
}
