
export enum ButtonIdEnum {
  Menu = 1,
  Back,
  Close,
}

const getNavLeftSideButton = (id: ButtonIdEnum) => {
  switch (id) {
    case ButtonIdEnum.Menu:
      return {
        id: 'buttonMenu',
        icon: require('../res/images/menuIcon.png'), // for icon button, provide the local image asset name
      }
    default:
      return {
        id: 'buttonMenu',
        icon: require('../res/images/menuIcon.png'), // for icon button, provide the local image asset name
      }
  }
}

export const setCustomTopBar = (id: ButtonIdEnum, title?: string) => {
  return {
    topBar: {
      title: {
        text: title,
      },
      leftButtons: [getNavLeftSideButton(id)],
    },
  }
}
