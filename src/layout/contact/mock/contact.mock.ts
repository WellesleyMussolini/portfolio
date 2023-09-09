import { IconType } from 'react-icons';
import { ImWhatsapp, ImGithub, ImLinkedin2 } from "react-icons/im"

export interface ContactIcon {
    icon: IconType;
    link: string;
};

export const contactIcons: ContactIcon[] = [
    {
        icon: ImWhatsapp,
        link: "https://api.whatsapp.com/send/?phone=5531984140779&text&type=phone_number&app_absent=0"
    },
    {
        icon: ImGithub,
        link: "https://github.com/wellesleymussolini/"
    },
    {
        icon: ImLinkedin2,
        link: "https://www.linkedin.com/in/wellesleymussolini/"
    }
];

export const email: string = "iei.muss@gmail.com";