import Image from 'next/image';
import { signIn } from "@/auth.mjs"
 
export default function SignIn () {
  
  return (
    <div className="m-1">
      <form
        action={async () => {
          "use server"
          await signIn("kakao")
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
  )
}