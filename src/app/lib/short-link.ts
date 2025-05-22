import {v4 as uuidv4} from "uuid"

export default function shortLink(link: string, alias?: string) {
    if (alias == null) alias = uuidv4()
    return `${process.env.NEXT_PUBLIC_SHORTENER_API_URL}/redirect`
}