export enum EnumMessageSenderType {
    BOT = "bot",
    ANSWER = "answer",
    USER = "user"
};

export enum EnumAnswerIdType {
    HIRE = "hire",
    TEXT_ME = "text-me",
    EMAIL = "email",
    OTHER_OPTIONS = "other-options"
};

export interface IChatMessage {
    id?: string,
    sender: EnumMessageSenderType,
    text: string,
    isHidden?: boolean,
};

export enum EnumTextMe {
    WHATSAPP="https://api.whatsapp.com/send?phone=31984140779",
    EMAIL="mailto:iei.muss@gmail.com"
};