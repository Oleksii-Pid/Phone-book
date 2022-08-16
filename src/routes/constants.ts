const ROUTES = {
  main: '/',
  login: '/login',
  add: '/add',
  another: '/*',
  dynamic: {
    edit: (id = ':id') => `/edit/${id}`,
    id: (id = ':id') => `/${id}`
  },
    
}

export default ROUTES;