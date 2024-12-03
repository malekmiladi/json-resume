'use client';
import { useMemo, useState } from "react";
import { header } from '@/definitions/resume.json';
import Icon from '@/components/icon'

function Header() {
    const [headerContent, setHeaderContent] = useState(header);
    const parsedSocials = useMemo(() => headerContent.socials.map(social => {
        switch (social.type) {
            case "link":
                return (
                    <li key={"social-" + social.id} className="flex items-center w-fit">
                        <Icon name={social.name!} />
                        <a className="font-normal m-2" href={social.link} target="_blank" rel="noopener noreferrer">{social.text}</a>
                    </li>
                );
            case "mail":
                return (
                    <li key={"social-" + social.id} className="flex items-center w-fit">
                        <Icon name={social.type!} />
                        <a className="font-normal m-2" href={"mailto:" + social.mail} target="_blank" rel="noopener noreferrer">{social.mail}</a>
                    </li>
                );
            case "phone":
                const tel = "tel:+" + social.countryCode + social.phoneNumber!.replace(/ /g, '');
                const text = `(+${social.countryCode}) ${social.phoneNumber}`;
                return (
                    <li key={"social-" + social.id} className="flex items-center w-fit">
                        <Icon name={social.type!} />
                        <a className="font-normal m-2" href={tel}>{text}</a>
                    </li>
                );
            case "location":
                return (
                    <li key={"social-" + social.id} className="flex items-center w-fit">
                        <Icon name={social.type!} />
                        <p className="font-normal m-2">{social.location}</p>
                    </li>
                );
        }
    }), [headerContent]);

    return (
        <header className="text-center font-extrabold">
            <h1 className="text-xl">
                {headerContent.fullName}
            </h1>
            <ul className="ml-[0.4cm] mr-[0.4cm] flex justify-center gap-4">
                {parsedSocials}
            </ul>
        </header>
    )
}

export default Header;