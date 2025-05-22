import { NextRequest, NextResponse } from "next/server";

type ShortenedLinkRequest = {
    shortenedLink: string
}

export async function POST(request: NextRequest) {
    const body: ShortenedLinkRequest = await request.json()
    const shortenedLink = body

    return NextResponse.json({
        status: "success",
        requested: shortenedLink
    })
}