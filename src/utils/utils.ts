import { Platform, StatusBar } from 'react-native'


function getStatusBarHeight() {
  let statusBarHeight: number = 0
  if (Platform.OS === 'android') {
    if (Platform.Version >= 21) {
      statusBarHeight = StatusBar.currentHeight || 0
    } else {
      statusBarHeight = 0
    }
  } else {
    statusBarHeight = 20
  }
  return statusBarHeight
}

function getNavBarHeight() {
  const navBarHeight = getStatusBarHeight() + 50
  return navBarHeight
}

export const Utils = {
  getStatusBarHeight,
  getNavBarHeight,
}
