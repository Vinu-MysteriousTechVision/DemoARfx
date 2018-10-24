import { Navigation } from 'react-native-navigation'
import { screenName } from './screen-name'

export const startNavigation = (isAuthenticated: boolean) => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: screenName.DRAWER
          }
        },
        center: {
          bottomTabs: {
            children: [{
              stack: {
                children: [{
                  component: {
                    name: screenName.FEED
                  }
                }],
                options: {
                  bottomTab: {
                    text: 'Feed'
                  }
                }
              }
            }, {
              stack: {
                children: [{
                  component: {
                    name: screenName.HOME
                  }
                }],
                options: {
                  bottomTab: {
                    text: 'Home',
                    selectedTextColor: 'red'
                  }
                }
              }
            }],
            options: {
              bottomTabs: {
                currentTabIndex: 1
              }
            }
          }
        }
      }
    }
  })
}
