import { useState, useEffect } from "react";
import { navigate } from "astro:transitions/client";
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
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import logoNav from "../image/logoJErickDev.png";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDay, setIsDay] = useState(true);
  const [theme, setTheme] = useState("dark");
  // const isActive = (href) => {
  //   if (typeof window !== "undefined") {
  //     return window.location.pathname === href;
  //   }
  //   return false;
  // };
  //
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDay(storedTheme !== "dark");
    setTheme(storedTheme || "dark");
  }, []);

  const handleDarkMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setIsDay(!isDay);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    window.dispatchEvent(new Event("themeChanged"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const menuItems = [
    { text: "Proyectos", href: "/proyects" },
    { text: "Blog", href: "/blog" },
  ];
  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <Link href="/">
            <NavbarBrand>
              <Image
                src={logoNav.src}
                alt="JErickDev"
                width={40}
                height={40}
                className="animate__animated animate__shakeX"
              />
              <p className="font-bold dark:text-jblue px-1 text-lg ">
                JErick
                <span className="text-foreground dark:text-jpurple">Dev</span>
              </p>
            </NavbarBrand>
          </Link>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          <Link href="/">
            <NavbarBrand className="animate__animated animate__pulse">
              <Image
                src={logoNav.src}
                alt="JErickDev"
                width={40}
                height={40}
                className="animate__animated animate__swing"
              />
              <p className="font-bold text-jblue px-1 text-lg">
                JErick<span className="text-jpurple font-bold">Dev</span>
              </p>
            </NavbarBrand>
          </Link>
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link
                className="text-lg text-foreground font-medium dark:text-jblue hover:underline underline-offset-4 "
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.href);
                }}
                href={item.href}
              >
                {item.text}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            <Link href="https://github.com/jerickgm89/porfolio">
              <Button
                disableRipple
                className="text-foreground text-lg font-medium dark:text-jblue hover:underline underline-offset-4 p-0 bg-transparent data-[hover=true]:bg-transparent"
                variant="light"
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
              aria-label={isDay ? "dark" : "light"}
              className="bg-jpurple dark:bg-jyellow"
              radius="large"
              onClick={handleDarkMode}
            >
              {isDay ? (
                <MoonIcon
                  width={30}
                  className="text-jsubtext animate__animated animate__fadeInDown"
                />
              ) : (
                <SunIcon
                  width={30}
                  className="text-background animate__animated animate__fadeInUp"
                />
              )}
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.text}-${index}`}>
              <Link
                className="text-jblue font-bold w-full"
                href={item.href}
                size="lg"
              >
                {item.text}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Link
              className="text-jblue font-bold w-full"
              href="https://github.com/jerickgm89/porfolio"
              size="lg"
            >
              Codigo
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
