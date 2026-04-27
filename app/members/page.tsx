import Image from 'next/image';
import styles from './page.module.css';

export default function About () {
  return (
    <div className={styles.fullView}>
      <div className={styles.about_content_wrapper}>
        <div className={styles.about_content_column}>
          
          <div className={styles.image_wrapper}>
            <Image
              src="/assets/img/mypleading01.png"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={200}
              height={250}
              priority
            />
          </div>
          <p className={styles.para_wrapper}>
            {
              'Anguk Law Offices treats every single case with the utmost care. This is because each case holds our clients\' concerns and values, and we truly cherish what matters most to them.'   }
          </p>
          
          <p className={styles.para_wrapper}>
            {
              "When facing significant tasks, a reliable partner becomes a necessity. No one can do it all alone. Thus, choosing your partner is as important as the mission itself."
            }
          </p>
          
          <p className={styles.para_wrapper}>
            {
              "Since its establishment on March 9, 2001, Anguk Law Offices has consistently upheld the trust of numerous clients. Over the past two decades, we have remained a steady presence in the same location, growing alongside our clients and supporting them through every challenge in an ever-changing world."            }
          </p>
          
        </div>
        <div className={styles.about_content_column}>    
          <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/mydeskmonitor.jpg"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={275}
              height={145}
              priority
            />
          </div>
          <p className={styles.para_wrapper}>
            {
              "We delve deep into the details of every case. Because every legal matter carries its own history, clear organization is essential to uncovering the truth and ensuring the right outcome."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Anguk Law Offices acts with speed, yet without rushing. We prioritize consulting with our clients on the order of business, starting first with a deep understanding of your voice and intended message. Our foundation is built on our clients' goals and understanding rather than mere legal expertise. Handling a case without the client's comprehension is, in our view, akin to conducting a surgical procedure without consent—regardless of the intended benefit."  
            }
          </p>
        </div>
        <div className={styles.about_content_column}> 
          <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/myofficebldgsunset.jpg"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={275}
              height={150}
              priority
            />
          </div>
          <p className={styles.para_wrapper}>
            {"Are you suffering from an unfair disadvantage because a state institution failed to act justly?"}
          </p>
          <p className={styles.para_wrapper}>
            { "We cordially invite you to Anguk Law Offices."}
          </p>
          <p className={styles.para_wrapper}>
            {"Have you been victimized by the bad faith and deceptive conduct of another party?"}
          </p>
          <p className={styles.para_wrapper}>
            { "We cordially invite you to Anguk Law Offices."}
          </p>
          <p className={styles.para_wrapper}>
            {"Are tedious procedures becoming a barrier to achieving your goals?"}
          </p>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            { "We cordially invite you to Anguk Law Offices."}
          </p>
          <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/myofficelobby.jpg"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={275}
              height={150}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// "use client";

// import { Canvas } from "@react-three/fiber";
// import {
//   CameraControls,
//   Environment,
//   PerspectiveCamera,
// } from "@react-three/drei";
// import { Box, Cactus, Camera, Level, Sudo } from "../../components/Scene";
// import styles from "./page.module.css";

// export default function About () {
//   return (
//     <div
//       className={styles.fullView}
//       // style={{
//       //   width: '100%',
//       //   height: '100%',
//       //   minHeight: '100dvh',
//       //   backgroundColor: 'aquablue',
//       // }}
//     >
//       <Canvas 
//         flat 
//       >
//         <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
//         <ambientLight intensity={Math.PI / 2} />
//         <group scale={20} position={[0, -10, 0]}>
//           <Level />
//           <Sudo />
//           <Camera />
//           <Cactus />
//           <Box position={[-0.8, 1.4, 0.4]} scale={0.15} />
//         </group>
//         <Environment preset="city" background blur={1} />
//         <PerspectiveCamera makeDefault position={[80, 20, 80]} />
//       </Canvas>
//     </div>
//   )
// }