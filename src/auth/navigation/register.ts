import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { RootState } from '../../reducer'
import { SignInContainer as SignInScreenContainer } from '../signIn.container'
import { SignInActionResponseContainer as SignInActionResponseContainerScreenContainer } from '../signInActionResponse.container'
import { screenName } from './screen-name'

export const register = (store: Store<RootState>, provider: typeof Provider) => {
  Navigation.registerComponentWithRedux(
    screenName.SIGN_IN,
    () => SignInScreenContainer,
    provider,
    store
  )
  Navigation.registerComponentWithRedux(
    screenName.SIGN_IN_ACTION_RESPONSE,
    () => SignInActionResponseContainerScreenContainer,
    provider,
    store
  )
}
