const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },

  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('pages/Dashboard.vue')
      }
    ]
  },

  {
    path: '/medicamentos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'medicamentos',
        component: () => import('pages/Medicament.vue')
      }
    ]
  },

  {
    path: '/entrar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('pages/Login.vue')
      }
    ]
  },

  {
    path: '/criar-conta',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'logon',
        component: () => import('pages/Logon.vue')
      }
    ]
  },

  {
    path: '/vendas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'sells',
        component: () => import('pages/Sells.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
