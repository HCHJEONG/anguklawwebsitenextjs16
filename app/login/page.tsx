// app/login/page.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface Props {
  searchParams: Promise<{ callbackUrl?: string }>;
}

export default async function LoginPage({ searchParams }: Props) {
  // URL에서 callbackUrl 값을 가져옵니다. (없으면 기본값 '/articles/new')
  const { callbackUrl } = await searchParams;
  const targetUrl = callbackUrl || '/articles/new';

  async function handleLogin(formData: FormData) {
    'use server';
    const password = formData.get('password');

    if (password === process.env.PAGE_PASSWORD) {
      const cookieStore = await cookies();
      cookieStore.set('page_auth', 'true', { 
        httpOnly: true, 
        secure: true, 
        maxAge: 60 * 60 * 24 // 1일 유지
      });

      // 동적으로 결정된 타겟 URL로 리다이렉트
      redirect(targetUrl);
    }
  }

  return (
    <form action={handleLogin}>
      <input type="password" name="password" placeholder="input password" required />
      <button className='ml-4' type="submit">Next Step</button>
    </form>
  );
}
