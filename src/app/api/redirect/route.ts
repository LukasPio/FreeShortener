import { NextRequest, NextResponse } from "next/server";

type ShortenedLink = {
    shortenedLink: string
}

export default async function redirect(request: NextRequest) {
    const body: ShortenedLink = await request.json()
    const shortenedLink = body

    return NextResponse.json({
        status: "success",
        shortenedLink
    })
}