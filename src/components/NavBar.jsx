import { useState, useEffect } from 'react'
import {
  Navbar, 
  NavbarBrand, 
  NavbarMenuToggle, 
  NavbarMenuItem, 
  NavbarMenu, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button,
  Image,
} from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"


export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDay, setIsDay] = useState(true)
    const [theme, setTheme] = useState("dark");
    
    const handleDarkMode = () => {
      setIsDay(!isDay)
      setTheme(theme === 'light' ? 'dark' : 'light')
    }

     useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }, [theme]);
    
    const menuItems = [
        "Proyectos",
        "Blog",
        "GitHub",
    ]
  return (
    <>
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="./logoJErickDev.png"
            alt="JErickDev"
            width={40}
            height={40}
          />
          <p className="font-bold dark:text-jblue px-1">JErick<span className='dark:text-jpurple'>Dev</span></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarBrand>
          <Image
            src="./logoJErickDev.png"
            alt="JErickDev"
            width={40}
            height={40}
          />
          <p className="font-bold text-jblue px-1">JErick<span className='text-jpurple'>Dev</span></p>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link className="text-foreground dark:text-jblue" href="#">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='jblue'className="text-foreground dark:text-jblue" href="#">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="jblue"className="text-foreground dark:text-jblue" href="https://github.com/jerickgm89">
            GitHub
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            isIconOnly
            aria-label={isDay ? 'light': 'dark'} 
            className="bg-jpurple dark:bg-jyellow"
            radius="large"
            onClick={handleDarkMode}
          >
            {
              isDay ? (
                <SunIcon className='text-background' width={30}/>
              ) : (
                <MoonIcon className='dark:text-background' width={30}/>
              )
            }
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </>
  )
}
