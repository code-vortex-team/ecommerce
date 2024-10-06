import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

export function middleware(req: NextRequest) {


    const cookiesName: any = "jwt"
    const token = req.cookies.get(cookiesName)?.value


    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }


    return NextResponse.next();
}

// تنظیم میدلور برای اجرا فقط در مسیرهای admin و user
export const config = {
    matcher: ['/admin/:path*', '/user/:path*'],
};
