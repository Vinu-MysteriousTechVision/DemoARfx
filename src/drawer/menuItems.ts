import { DrawerMenuEnum, DrawerMenuSectionEnum } from '../constants'
import { IDrawerMenuItem, IDrawerMenuSectoionItem } from './drawer.menuList'

export const home: IDrawerMenuItem = {
  id: DrawerMenuEnum.Home,
  name: 'Discover',
  iconSource: require('../res/images/drawer/menuItemIcon.png'),
}

export const Profile: IDrawerMenuItem = {
  id: DrawerMenuEnum.Profile,
  name: 'Profile',
  iconSource: require('../res/images/drawer/menuItemIcon.png'),
}
export const Rankings: IDrawerMenuItem = {
  id: DrawerMenuEnum.Rankings,
  name: 'Rankings',
  iconSource: require('../res/images/drawer/menuItemIcon.png'),
}
export const MyObjects: IDrawerMenuItem = {
  id: DrawerMenuEnum.MyObjects,
  name: 'My Objects',
  iconSource: require('../res/images/drawer/menuItemIcon.png'),
}
export const help: IDrawerMenuItem = {
  id: DrawerMenuEnum.Help,
  name: 'Help',
  iconSource: require('../res/images/drawer/menuItemIcon.png'),
}

export const logout: IDrawerMenuItem = {
  id: DrawerMenuEnum.Logout,
  name: 'Logout',
  iconSource: require('../res/images/drawer/menuItemIcon.png'),
}

export const MENU_SECTIONS: IDrawerMenuSectoionItem[] = [
  {
    title: DrawerMenuSectionEnum.Section_1,
    data: [home, Profile, Rankings, MyObjects],
  },
  { 
    title: DrawerMenuSectionEnum.Section_2, 
    data: [ help, logout] 
  },
]
