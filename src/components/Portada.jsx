import { useEffect, useState } from "react";

export const Portada = () => {

    const [imageSrc, setImageSrc] = useState('');
    const [animation, setAnimation] = useState('')
    
    useEffect(() => {

      const updateImageSrc = () => {
        const theme = localStorage.getItem('theme')
        const src = theme === 'dark' ? '../../public/logoArtJErick.png' : '../../public/logoArtJErickLight.png'
        setImageSrc(src)
        setAnimation('');
        setTimeout(() => {
          setAnimation('animate__animated animate__fadeIn');
        }, 10); 
      }

      updateImageSrc();
      window.addEventListener('themeChanged', updateImageSrc);

      return () => {
        window.removeEventListener('themeChanged', updateImageSrc)
        setAnimation('')
      }
    }, [])

  return (
    <div className={animation}>
      <img src={imageSrc} width="960" alt="Portada"/>
    </div>
  )
}
