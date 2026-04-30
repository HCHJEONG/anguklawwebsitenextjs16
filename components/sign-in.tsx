import { handleKakaoSignIn } from "@/lib/kakaosignin"
import Image from 'next/image';
 
export default function SignIn () {
  
  return (
    <div className="m-1">
      <form
        action={async () => {
          "use server"
          await signIn("kakao", { callbackUrl: "/" })
        }}
      >
        <button type="submit">
          <Image
            // src="/hero-desktop.png"
            src="/assets/img/kakao_login_medium_narrow.png"
            width={120}
            height={100}
            // className="hidden md:block"
            alt="Signin with Kakao"
          /> 
        </button>
      </form>
    </div>
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