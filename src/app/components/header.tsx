'use client';

import Icon from '@/components/icon'

type SocialEntry = {
    id: number;
    type: string;
    name?: string;
    link?: string;
    text?: string;
    countryCode?: string;
    phoneNumber?: string;
    location?: string;
    mail?: string
}

type HeaderContent = {
    fullName: string;
    function: string;
    socials: SocialEntry[]
}

function Header({ content }: { content: HeaderContent }) {

    const processSocials = (socials: SocialEntry[]): React.ReactNode => {
        return socials.map((social: SocialEntry) => {
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
                default:
                    return (
                        <></>
                    )
            }
        })
    }

    return (
        content ?
            <header className="text-center font-extrabold mb-3">
                <h1 className="text-xl">
                    {content.fullName}
                </h1>
                <h2>
                    {content.function}
                </h2>
                <ul className="flex justify-center gap-4">
                    {processSocials(content.socials)}
                </ul>
            </header> : <></>
    )
}

export default Header;