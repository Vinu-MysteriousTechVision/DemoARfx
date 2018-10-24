import { Platform, StatusBar } from 'react-native'

function getStatusBarHeight() {
  let statusBarHeight: number = 0
  if (Platform.OS === 'android') {
    statusBarHeight = (Platform.Version >= 21) ? StatusBar.currentHeight || 0 : 0
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
