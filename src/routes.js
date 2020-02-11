import Home from './routes/Home'
import Programas from './routes/Programas'
import FinanceiroResumo from './routes/FinanceiroResumo'
import ContasPagar from './routes/ContasPagar'
import ContaPagar from './routes/ContaPagar'
import ContasReceber from './routes/ContasReceber'

export default [
  { name: 'home', path: '/', component: Home },
  { name: 'programas', path: '/programas', component: Programas },
  { name: 'financeiroresumo', path: '/financeiroresumo', component: FinanceiroResumo },
  { name: 'contaspagar', path: '/contaspagar', component: ContasPagar },
  { name: 'contaspagar/123', path: '/contaspagar/123', component: ContaPagar },
  { name: 'contasreceber', path: '/contasreceber', component: ContasReceber },
]