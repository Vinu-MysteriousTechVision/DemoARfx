import { Navigation } from 'react-native-navigation'
import { screenName } from './screen-name'

export const startNavigation = (isAuthenticated: boolean) => {
  /*
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: screenName.DRAWER,
          },
        },
        center: {
          stack: {
            children: [{
              component: {
                name: screenName.HOME,
              },
            }],
            options: {
              topBar: {
                title: {
                  text: 'Discover',
                },
              },
            },
          },
        },
      },
    },
  })
  */
 Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: screenName.SIGN_IN
          }
        }
      ]
    }
  }
})
}
