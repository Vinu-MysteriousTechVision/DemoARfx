import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { RootState } from '../../reducer'
import { FeedContainer as FeedScreenContainer } from '../feed.container'
import { HomeContainer as HomeScreenContainer } from '../home.container'
import { RootContainer as RootScreenContainer } from '../root'

import { screenName } from './screen-name'

export const register = (store: Store<RootState>, provider: typeof Provider) => {
  Navigation.registerComponentWithRedux(
    screenName.HOME,
    () => HomeScreenContainer,
    provider,
    store
  )
  Navigation.registerComponentWithRedux(
    screenName.FEED,
    () => FeedScreenContainer,
    provider,
    store
  )
  Navigation.registerComponentWithRedux(
    screenName.ROOT,
    () => RootScreenContainer,
    provider,
    store
  )
}
