// src/proxy.ts (또는 프로젝트 루트)
import { NextRequest, NextResponse } from 'next/server';
export function proxy(request: NextRequest) {
  const authCookie = request.cookies.get('page_auth');
  const { pathname } = request.nextUrl;

  // 1. 새 글 작성 페이지 보호
  if (pathname.startsWith('/articles/new') && !authCookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // 2. 수정 페이지 보호
  if (pathname.endsWith('/edit') && !authCookie) {
    // URL에서 ID 추출 (예: /1/edit -> "1")
    const noteIdString = pathname.split('/')[1];
    
    // 무한 루프 방지: 목적지를 /login으로 변경
    // 만약 로그인 후 원래 페이지로 돌려보내고 싶다면 쿼리 스트링을 활용하세요.
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname); 
    
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// 특정 경로에만 이 프록시가 작동하도록 설정
export const config = {
  // :path*는 /1/edit, /category/1/edit 등을 모두 포함합니다.
  matcher: ['/articles/new/:path*', '/:path*/edit'],
};