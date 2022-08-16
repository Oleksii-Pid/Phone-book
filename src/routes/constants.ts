const ROUTES = {
  main: '/',
  login: '/login',
  dynamic: {
    edit: (id = ':id') => `/edit/${id}`
  }
}

export default ROUTES;