"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";

function Header() {
    const pathname = usePathname();

    const navigation = [
        {name: 'Contact', path: '/contact'},
    ];

    return (
        <header className="sticky top-0 px-8 z-10 lg:px-36 header-h bg-color-0 ">
            <div className="flex items-center w-full h-full">
                <p className="flex-1 text-headline-3">
                    <Link href="/">UJON</Link>
                </p>
                <nav className="flex gap-8">
                    {navigation.map((it, idx) => {
                        const isActive = it.path === "/" ? pathname === it.path : pathname.startsWith(it.path);

                        return (
                            <a
                                key={`${it.name}-${idx}`}
                                href={it.path}
                                className={`text-caption ${isActive ? "font-bold" : ""}`}
                            >
                                {it.name}
                            </a>
                        )
                    })}
                </nav>
            </div>
        </header>
    )
}

export default Header;