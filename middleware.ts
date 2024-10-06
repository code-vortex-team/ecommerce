import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import {cookies} from "next/headers";

export function middleware(req: NextRequest) {


    // const cookiesName: any = "jwt"
    // const token = req.cookies.get(cookiesName)?.value
    const serverCookies = cookies();
    const pathname = req.nextUrl.pathname;

    if (!serverCookies.has("jwt")) {

        return NextResponse.redirect(new URL('/login', req.url));
    }
    if (pathname.startsWith('/admin') && serverCookies.get("isAdmin")?.value == "false") {


        return NextResponse.redirect(new URL('/login', req.url));
    }
    if (pathname.startsWith('/user') && !serverCookies.has("jwt")) {


        return NextResponse.redirect(new URL('/login', req.url));
    }


    return NextResponse.next();
}

// تنظیم میدلور برای اجرا فقط در مسیرهای admin و user
export const config = {
    matcher: ['/admin/:path*', '/user/:path*'],
};
