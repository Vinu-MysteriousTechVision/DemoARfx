import { Provider } from 'react-redux'
import { Store } from 'redux'
import { register as registerSignIn } from '../auth/navigation'
import { register as registerDrawer } from '../drawer/navigation'
import { register as registerHome } from '../home/navigation'
import { RootState } from '../reducer'

// NOTE: registering each component process should be delegated to each domain
// (e.g. home/navigation/register has responsibility to register home related components)
export const register = (store: Store<RootState>, provider: typeof Provider) => {
  registerSignIn(store, provider)
  registerHome(store, provider)
  registerDrawer(store, provider)
}
