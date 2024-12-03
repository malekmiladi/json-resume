'use client';

import IconGithub from "./icons/icon-github";
import IconLinkedin from "./icons/icon-linkedin";
import IconLocation from "./icons/icon-location";
import IconMail from "./icons/icon-mail";
import IconPhone from "./icons/icon-phone";

function Icon({ name }: { name: string }) {
    switch (name) {
        case "github":
            return <IconGithub />;
        case "linkedin":
            return <IconLinkedin />;
        case "mail":
            return <IconMail />;
        case "phone":
            return <IconPhone />
        case "location":
            return <IconLocation />
    }
}

export default Icon;