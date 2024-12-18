'use client'

import * as React from 'react'
import { Moon, Sun, Menu } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

const Nav = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className={`sticky top-0 z-10 w-full border-b ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Logo on the left */}
        <a href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Mahak</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#projects" className={`transition-colors ${theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-gray-700'} text-lg`}>Projects</a>
          <a href="#talk" className={`transition-colors ${theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-gray-700'} text-lg`}>Contact</a>
          <a href="#about" className={`transition-colors ${theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-gray-700'} text-lg`}>About</a>
        </div>

        {/* Mobile Menu and Theme Toggle Icons */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle Button */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
              <nav className="flex flex-col space-y-4 p-4">
                <a href="#projects" className={`transition-colors ${theme === 'dark' ? 'text-white hover:text-gray-400' : 'text-gray-700 hover:text-gray-900'} text-lg`}>Projects</a>
                <a href="#talk" className={`transition-colors ${theme === 'dark' ? 'text-white hover:text-gray-400' : 'text-gray-700 hover:text-gray-900'} text-lg`}>Contact</a>
                <a href="#about" className={`transition-colors ${theme === 'dark' ? 'text-white hover:text-gray-400' : 'text-gray-700 hover:text-gray-900'} text-lg`}>About</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Nav
