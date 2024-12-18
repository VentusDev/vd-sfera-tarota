import { useEffect } from "react";

export const useHashFragment = (offset = 0, trigger = true) => {
  useEffect(() => {
      // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
      const timeoutId = setTimeout(() => {
        const scrollToHashElement = () => {
          const { hash } = window.location;
          const elementToScroll = document.getElementById(hash?.replace("#", ""));
    
          if (!elementToScroll) return;
       
            window.scrollTo({
              top: elementToScroll.offsetTop - offset -65,
              behavior: "smooth"
            });
         
    
        };
    
        if (!trigger) return;
    
        scrollToHashElement();
        window.addEventListener("hashchange", scrollToHashElement);
        return () => window.removeEventListener("hashchange", scrollToHashElement);
      }, 1000);
  
      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);

  }, [trigger]);
}
