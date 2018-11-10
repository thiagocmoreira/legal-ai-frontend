
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/posts',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Posts.vue') }
    ]
  },
  {
    path: '/people',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/People.vue') }
    ]
  },
  {
    path: '/person',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'ricardo-fernandes', component: () => import('pages/person/Ricardo.vue') },
      { path: 'roland-vogl', component: () => import('pages/person/Roland.vue') },
      { path: 'danilo-barros', component: () => import('pages/person/Danilo.vue') },
      { path: 'nilton-silva', component: () => import('pages/person/Nilton.vue') }
    ]
  },
  {
    path: '/projects',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Projects.vue') }
    ]
  },
  {
    path: '/projeto-victor',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Project.vue') }
    ]
  },
  {
    path: '/preconceitos',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Post.vue') }
    ]
  },
  {
    path: '/classificacoes-victor',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Post1.vue') }
    ]
  },
  {
    path: '/dra-luzia',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Post2.vue') }
    ]
  }
  // {
  //   path: '/post/:postId',
  //   component: () => import('layouts/MyLayout.vue'),
  //   props: true,
  //   children: [
  //     { path: '', component: () => import('pages/Post.vue') }
  //   ]
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
