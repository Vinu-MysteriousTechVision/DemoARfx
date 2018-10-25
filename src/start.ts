import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { register as registerScreen } from './navigation'
import { startNavigation } from './navigation'
import { store } from './store'

registerScreen(store, Provider)

export default class Start  {
  constructor() {
    this.startApp()
  }

  startApp() {
    Navigation.events().registerAppLaunchedListener(() => {
      startNavigation(true)
    })
  }
}
