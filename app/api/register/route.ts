import {NextRequest, NextResponse} from 'next/server';
import {UserApi} from "@/lib/openapi/generated-client";
import {cookies} from "next/headers";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const res: any = await new UserApi().apiUsersPost(body)
        if (!(res.status == 200 || res.status == 201)) {
            return NextResponse.json({message: 'Register failed'}, {status: 500});
        }
        const setCookieHeader = res.headers.get('set-cookie');

        const nextRes = NextResponse.json(res.data, {status: 200});
        nextRes.headers.set('Set-Cookie', setCookieHeader)
        const serverCookies = cookies();
        serverCookies.set("isAdmin", res.data.isAdmin)


        return nextRes
    } catch (e) {
        console.log(e.response.data)
        return NextResponse.json({message: e.response.data}, {status: 400});

    }
}
