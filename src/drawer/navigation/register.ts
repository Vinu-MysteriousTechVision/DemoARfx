import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { RootState } from '../../reducer'
import { DrawerContainer as DrawerScreenContainer } from '../drawer.container'
import { screenName } from './screen-name'

export const register = (store: Store<RootState>, provider: typeof Provider) => {
  Navigation.registerComponentWithRedux(
    screenName.DRAWER,
    () => DrawerScreenContainer,
    provider,
    store,
  )
}
