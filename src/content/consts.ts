// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Code Ragnarok";
export const SITE_DESCRIPTION = `Creación de aplicaciones y sistemas escalables, desde el frontend hasta el backend. 
Convierte conceptos e ideas en código funcional y eficiente.`;

import type { IconType } from "@/assets/Icon.astro";
import icons from '@/assets/icons'

interface pagesType{
     name:string,
     link:string,
     icon: IconType
}

export const pages:pagesType[] = [
    { name: "home", icon: "nav.home", link: "/#home" },
    { name: "services", icon: "nav.services", link: "/#services" },
    { name: "portfolio", icon: "nav.portfolio", link: "/#portfolio" },
    { name: "contact", icon: "nav.contact", link: "/#contact" },
    // { name: "about", icon: "about.svg", link: "/#about" },
    // { name: "blog", icon: "blog.svg", link: "/blog" },
]


export const socialLinks:pagesType[] = [
    {
        name: "twitter",
        link: "https://twitter.com/AngelFelipeRCH",
        icon: "social.twitter"
    },
    {
        name: "git",
        link: "https://github.com/CodeRagnarok07",
        icon: "social.youtube"

    },
    {
        name: "ig",
        link: "https://www.instagram.com/angelfeliperch/",
        icon: "social.instagram"
    },
    // {
    //     name: "discord",
    //     link: "#",
    //     icon: "discord.svg"
    // },
    // {
    //     name: "facebook",
    //     link: "#",
    //     icon: "facebook.svg"
    // },
  
    // {
    //     name: "tiktok",
    //     link: "#",
    //     icon: "tiktok.svg"
    // },
    // {
    //     name: "twicht",
    //     link: "#",
    //     icon: "twicht.svg"
    // },
  
    // {
    //     name: "youtube",
    //     link: "#",
    //     icon: "youtube.svg"
    // },
]