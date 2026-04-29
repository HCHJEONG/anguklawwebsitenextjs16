import { handleKakaoSignIn } from "@/lib/kakaosignin"
import Image from 'next/image';
 
export default function SignIn() {
  return (
    <form action={handleKakaoSignIn}>
      <button type="submit">
        <Image
          src="/assets/img/kakao_login_medium_narrow.png"
          width={120}
          height={100}
          alt="Signin with Kakao"
        /> 
      </button>
    </form>
  )
}