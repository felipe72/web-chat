import Home from '~components/Home'
import Chat from '~components/Chat'

export default [
  { path: '/', name: 'root', component: Home },
  { path: '/chat/:chat', name: 'chat', component: Chat },
]