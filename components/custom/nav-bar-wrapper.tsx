'use client'
import { ReactNode } from 'react'

import { useIsLargeScreen } from '@/helpers/useMediaQuery'
import { Nav } from './nav'
import { NavDropDown } from './nav-dropdown'
type NavProps = {
  children?: ReactNode
}
export const NavBarWrapper = ({ children }: NavProps) => {
  const { isLargeScreen } = useIsLargeScreen()

  return <div>{!isLargeScreen ? <NavDropDown /> : <Nav />}</div>
}
