
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
    path: '/ricardo-fernandes',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Person.vue') }
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
    path: '/post/:postId',
    component: () => import('layouts/MyLayout.vue'),
    props: true,
    children: [
      { path: '', component: () => import('pages/Post.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
