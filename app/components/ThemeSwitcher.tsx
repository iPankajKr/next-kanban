"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";


export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }


    return (
        <button
            className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-light-accent dark:bg-[#212933]`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? <MoonIcon className="h-6 w-6"/> : <SunIcon className="h-6 w-6" />}
        </button>
    );
};