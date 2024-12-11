'use client';

import IconGithub from "./icons/icon-github";
import IconLinkedin from "./icons/icon-linkedin";
import IconLocation from "./icons/icon-location";
import IconMail from "./icons/icon-mail";
import IconPhone from "./icons/icon-phone";

function Icon({ name, classes }: { name: string, classes: string }) {
    switch (name) {
        case "github":
            return <IconGithub classes={classes} />;
        case "linkedin":
            return <IconLinkedin classes={classes} />;
        case "mail":
            return <IconMail classes={classes} />;
        case "phone":
            return <IconPhone classes={classes} />
        case "location":
            return <IconLocation classes={classes} />
    }
}

export default Icon;