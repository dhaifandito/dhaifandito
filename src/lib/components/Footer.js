"use client"

import { Button } from "@/components/ui/button";
import { useTheme } from "../hooks/useTheme";
import Link from "next/link";
import Image from "next/image";

function Footer() {
    const {isDark, setIsDark} = useTheme();
    const lightTheme = "bg-light-primary text-light-body"
    const darkTheme = "bg-dark-primary text-dark-body"
    return ( 
        <footer className="py-6 bg-dark-primary mt-24 flex justify-center items-center flex-col">
        <div className="flex justify-between items-center w-3/4">
          <div className="lg:grid grid-cols-3 lg:grid-cols-4 w-full">

            <div className="lg:flex justify-center items-center">
                <p>Reach Me on</p>
            </div>
            <div className="flex lg:justify-center items-center">
            <Image
                        src={isDark ? "/email-black.svg" : "/email-white.svg"}
                        alt={"email"}
                        width={25}
                        height={100}
                      />
                <p className="mx-2">dhaifan.da@gmail.com</p>
            </div>  
            <div className="flex lg:justify-center items-center">
            <Image
                        src={isDark ? "/ig-black.svg" : "/ig-white.svg"}
                        alt={"instagram"}
                        width={25}
                        height={100}
                      />
                 <a href="https://www.instagram.com/dhaifandito12" target="_blank" rel="noopener noreferrer" className="mx-2 text-green-200 hover:text-dark-accenttext">dhaifandito12</a>
            </div> 
            <div className="flex lg:justify-center items-center">
            <Image
                        src={isDark ? "/linkedin-black.svg" : "/linkedin-white.svg"}
                        alt={"linkedin"}
                        width={25}
                        height={100}
                      />
                 <a href="https://www.linkedin.com/in/dhaifan-dito-adrian-202a5b1b7/" target="_blank" rel="noopener noreferrer" className="mx-2 text-green-200 hover:text-dark-accenttext">dhaifan dito adrian</a>
            </div> 
          </div>
        </div>
        <p className="p-12">&copy; 2024 Dhaifan Dito Adrian. All rights reserved.</p>
        </footer>
     );
}

export default Footer;