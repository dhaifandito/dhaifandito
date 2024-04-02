"use client"

import { Button } from "@/components/ui/button";
import { useTheme } from "../hooks/useTheme";
import Image from "next/image";

function Navbar() {
    const {isDark, setIsDark} = useTheme();
    const handleTheme = () => {
        setIsDark(!isDark)
    }
    const lightTheme = "bg-light-primary text-light-body"
    const darkTheme = "bg-dark-primary text-dark-body"

    
        const handleDownload = () => {
          const pdfUrl = '/ditocv.pdf';
      
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.download = 'dito-cv.pdf'; 
      
          link.click();
        };

    return ( 
        <div className={`fixed z-10 h-12 w-full font-bold flex items-center justify-between font-roboto px-4 ${!isDark ? darkTheme : lightTheme}`}>
            <h1>Dito.</h1>
            <div className="flex items-center">
            <Button className="mx-4" variant={isDark ? "dark" : "light"} onClick={()=>handleDownload()}>Get Dito CV</Button>
            <div onClick={()=>{handleTheme()}}>
            <Image
                        src={isDark ? "/sun-dark.svg" : "/sun-light.svg"}
                        alt={"theme"}
                        width={35}
                        height={10}
                      />
                      </div>
            </div>
        </div>
     );
}

export default Navbar;