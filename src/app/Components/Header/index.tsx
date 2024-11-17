"use client";
import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useParams, usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Header() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    const styles = {
        logoLinkStyle: `self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white`,
        blogStyle: `px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white`,
    };

    return (
        <>
            <Navbar className={`border-b-[1.5px] bg-gray-100`}>
                <Link href={"/"} className={styles.logoLinkStyle}>
                    <span className={styles.blogStyle}>Blog&apos;s</span>
                </Link>

                <form accessKey="">
                    <TextInput
                        type="text"
                        placeholder="search"
                        rightIcon={AiOutlineSearch}
                        className="hidden lg:inline"
                    />
                </form>
                <Button className="w-10 h-10 lg:hidden" color="gray" pill>
                    <AiOutlineSearch />
                </Button>

                <div className={`flex gap-2 md:order-2`}>
                    <Button
                        className={`w-12 h-10 hidden sm:inline`}
                        color="gray"
                        pill
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        {theme === "light" ? <FaMoon /> : <FaSun />}
                    </Button>
                    <Link href={"/sign-in"}>
                        <Button gradientDuoTone="purpleToBlue">Sign In</Button>
                    </Link>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>
                    <Link href={"/"}>
                        <Navbar.Link active={pathname === "/"} as={"div"}>
                            Home
                        </Navbar.Link>
                    </Link>
                    <Link href={"/about"}>
                        <Navbar.Link active={pathname === "/about"} as={"div"}>
                            About
                        </Navbar.Link>
                    </Link>
                    <Link href={"/project"}>
                        <Navbar.Link active={pathname === "/project"} as={"div"}>
                            Project
                        </Navbar.Link>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
