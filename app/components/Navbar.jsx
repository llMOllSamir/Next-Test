'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const links = [
        { title: "home", ref: "/" },
        { title: "products", ref: "/products" },
        { title: "categories", ref: "/categories" },
    ]
    return (
        <header className="fixed inset-0 flex justify-center items-center bg-red-600 text-white h-14">
            <nav className="flex gap-5 capitalize justify-center items-center">
                {links.map((link, index) =>
                    <Link
                        key={index}
                        href={link.ref}
                        className={`${pathname === link.ref && "bg-white text-red-600 px-5 rounded-lg py-2"}`}
                    >{link.title}</Link>)}
            </nav>
        </header>
    )
}
