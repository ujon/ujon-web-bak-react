import {Linkedin} from "@/common/icons/Linkedin";
import {Github} from "@/common/icons/Github";
import {Email} from "@/common/icons/Email";
import Link from "next/link";

interface ContactLinksProps {
    size?: string;
    className?: string;
}

function ContactLinks({size = "32", className}: ContactLinksProps) {
    const linkedin = "https://www.linkedin.com/in/ujon"
    const github = "https://github.com/ujon"
    const email = "ujon94@gmail.com"

    return (
        <div className={`flex gap-6 ${className}`}>
            <Link href={linkedin}>
                <Linkedin size={size} className="icon-color-0"/>
            </Link>
            <Link href={github}>
                <Github size={size} className="icon-color-0"/>
            </Link>
            <Link href={`mailto:${email}`}>
                <Email size={size} className="icon-color-0"/>
            </Link>
        </div>
    )
}

export default ContactLinks;