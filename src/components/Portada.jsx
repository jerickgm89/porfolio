import { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";

export const Portada = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [animation, setAnimation] = useState("");
  const updateImageSrc = () => {
    const theme = localStorage.getItem("theme");
    const src =
      theme === "dark"
        ? "/src/image/logoArtJErick.png"
        : "/src/image/logoArtJErickLight.png";
    setImageSrc(src);
    setAnimation("");
    setTimeout(() => {
      setAnimation("animate__animated animate__fadeIn");
    }, 10);
  };
  useEffect(() => {
    updateImageSrc();
    window.addEventListener("themeChanged", updateImageSrc);

    return () => {
      window.removeEventListener("themeChanged", updateImageSrc);
      setAnimation("");
    };
  }, []);

  return (
    <div className={animation}>
      <Image src={imageSrc} width="960" alt="Portada" />
    </div>
  );
};
