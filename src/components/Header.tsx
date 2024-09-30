"use client"

import {usePathname} from "next/navigation";

function Header() {
    const pathname = usePathname();

    const navigation = [
        {name: 'About', path: '/about'},
        {name: 'Contact', path: '/contact'},
    ];

    return (
        <header className="sticky h-16 px-8 lg:px-36 lg:h-20">
            <div className="flex items-center w-full h-full">
                <p className="flex-1 text-headline-3">Jongho</p>
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