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
import { Icon } from '@iconify/react'


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
        {text: "Proyectos", href: "#"},
        {text:"Blog", href: "#"},
        {text: "GitHub", href: "https://github.com/jerickgm89"},
    ]
  return (
    <>
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      className='transition-all ease-in-out'
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
          <p className="font-bold dark:text-jblue px-1">JErick<span className='text-foreground dark:text-jpurple'>Dev</span></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 transition-all ease-in-out" justify="center">
        <NavbarBrand>
          <Image
            src="./logoJErickDev.png"
            alt="JErickDev"
            width={40}
            height={40}
          />
          <p className="font-bold text-jblue px-1">JErick<span className='text-foreground dark:text-jpurple'>Dev</span></p>
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-lg text-foreground font-bold dark:text-jblue hover:underline underline-offset-4" href="#">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='jblue'className="text-lg text-foreground font-bold dark:text-jblue hover:underline underline-offset-4" href="#">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="https://github.com/jerickgm89/porfolio">
            <Button
              disableRipple
              className="text-foreground text-lg font-bold dark:text-jblue hover:underline underline-offset-4 p-0 bg-transparent data-[hover=true]:bg-transparent"
              variant='light'
              startContent={<Icon icon="akar-icons:github-fill" width={20} />}
            >
              C&oacute;digo
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            isIconOnly
            aria-label={isDay ? 'light': 'dark'} 
            className='bg-jpurple dark:bg-jyellow'
            radius="large"
            onClick={handleDarkMode}
          >
            {
              isDay ? (
                <SunIcon 
                  width={30}
                  className="text-background animate__animated animate__fadeInUp"
                />
              ) : (
                <MoonIcon 
                  width={30}
                  className="text-jsubtext animate__animated animate__fadeInDown"
                />
              )
            }
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.text}-${index}`}>
            <Link
              className="text-foreground font-bold w-full"
              href={item.href}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </>
  )
}


