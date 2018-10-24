import { screenName as signInScreenName } from '../auth/navigation'
import { screenName as drawerScreenName } from '../drawer/navigation'
import { screenName as homeScreenName } from '../home/navigation'

export const screenName = {
  ...homeScreenName,
  ...drawerScreenName,
  ...signInScreenName,
}
