import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const ButtonTheme = () => {
  const [isDay, setIsDay] = useState(true);
  const [theme, setTheme] = useState("dark");

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

  return (
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
  );
};
