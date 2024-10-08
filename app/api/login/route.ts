import {NextRequest, NextResponse} from 'next/server';
import {UserApi} from "@/lib/openapi/generated-client";
import {cookies} from "next/headers";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const res: any = await new UserApi().apiUsersAuthPost(body)
        if (res.status != 200) {
            return NextResponse.json({message: 'Login failed'}, {status: 500});
        }
        const setCookieHeader = res.headers.get('set-cookie');

        const nextRes = NextResponse.json(res.data, {status: 200});
        nextRes.headers.set('Set-Cookie', setCookieHeader)
        const serverCookies = cookies();
        serverCookies.set("isAdmin", res.data.isAdmin)

        return nextRes
    } catch (e) {
        return NextResponse.json({message: e.response.data.message}, {status: 400});

    }
}
