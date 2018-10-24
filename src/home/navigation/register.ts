import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { RootState } from '../../reducer'
import { HomeContainer as HomeScreenContainer } from '../home.container'
import { screenName } from './screen-name'

export const register = (store: Store<RootState>, provider: typeof Provider) => {
  Navigation.registerComponentWithRedux(
    screenName.HOME,
    () => HomeScreenContainer,
    provider,
    store,
  )
}
