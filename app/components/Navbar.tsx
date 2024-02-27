"use client"

import { ForwardIcon } from "@heroicons/react/24/solid"
import { Button, Link } from "react-aria-components"
import { ThemeSwitcher } from "./ThemeSwitcher"


const Navbar = () => {
  return (
    <div className="sticky top-0 p-4 border-b border-light-primary dark:border-dark-primary/80 flex flex-row justify-between items-center shadow-sm">
        <Link href="/" className="flex gap-1 bg-light-accent dark:bg-dark-accent rounded-md p-2">
            <ForwardIcon className="h-6 w-6" />
            <span className="font-bold">NextKanban</span>
        </Link>
        <div className="flex items-center flex-row gap-8">
            <div className="flex items-center gap-20">
            <div className="flex gap-8 dark:text-light-secondary text-dark-secondary font-medium text-sm">
                <Link href="#">Home</Link>
                <Link href="#">Our Story</Link>
                <Link href="#">Sponsors</Link>
            </div>
            <Button className="bg-light-accent dark:bg-dark-accent text-dark-primary dark:text-light-primary px-4 py-2 rounded-md font-medium text-sm">Get Started</Button>
            </div>
            
        <ThemeSwitcher />
        </div>
    </div>
  )
}

export default Navbar