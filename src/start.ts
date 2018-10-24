import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { register as registerScreen } from './navigation'
import { startNavigation } from './navigation'
import { store } from './store'

registerScreen(store, Provider)

export default class Start  {
  constructor() {
    this.startApp()

    Navigation.events().registerBottomTabSelectedListener(({ selectedTabIndex, unselectedTabIndex }) => {
      Navigation.showModal({
        stack: {
          children: [{
            component: {
              name: 'SIGN_IN',
              passProps: {
                text: 'stack with one child',
              },
              options: {
                layout: {
                  backgroundColor: 'transparent'
                },
                modalPresentationStyle: 'overCurrentContext',
                topBar: {
                  title: {
                    text: 'Modal'
                  }
                }
              }
            }
          }]
        }
      })
    })
  }

  startApp() {
    Navigation.events().registerAppLaunchedListener(() => {
      startNavigation(true)
    })
  }
}
