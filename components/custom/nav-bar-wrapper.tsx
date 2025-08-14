'use client'
import { useIsLargeScreen } from '@/helpers/useMediaQuery'
import { Nav } from './nav'
import { NavDropDown } from './nav-dropdown'

export const NavBarWrapper = () => {
  const { isLargeScreen } = useIsLargeScreen()

  return <div>{!isLargeScreen ? <NavDropDown /> : <Nav />}</div>
}
