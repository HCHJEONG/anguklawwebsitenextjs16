import Image from 'next/image';
import styles from './page.module.css';

export default function Areas () {
  return (
    <div className={styles.fullView}>
      <div className={styles.areas_content_wrapper}>
        <div className={styles.areas_content_column}>
          
          <div className={styles.image_wrapper}>
            <Image
              src="/assets/img/justicehammer.png"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={300}
              height={200}
              priority
            />
          </div>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {
              "International Trade Litigation and Family Law"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Legal disputes involving foreign corporations and individuals involve unique considerations. They require the analysis of extensive foreign-language documentation and direct negotiation with foreign parties. This is why having an advocate with expertise and experience in international trade litigation is essential. "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "International Trade Litigation and Advisory"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Business Setting and Exit Strategies"
            }
          </p>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {
              "Civil and Family Law"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Family law litigation also presents distinct complexities in both substantive law and procedure. Above all, it requires a partner who listens patiently to the client's voice and translates those personal concerns into a solid legal framework. Anguk Law Offices stands by the values our clients seek, providing dedicated representation in general civil matters as well as these specialized fields."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Divorce "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Medical Malpractice Lawsuit "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "IT Startup Litigation and Legal Counseling"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Condominium and Multi-Unit Building Litigation and Advisory"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Civil Litigation "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Criminal Complaint, Criminal Defense and Prosecution Support"
            }
          </p>
          
          {/* <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {t("당신을 안국법률사무소로 초대합니다. ")}
          </p> */}
          
        </div>
        <div className={styles.areas_content_column}>    
          <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/kyungbokgungview.jpg"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={300}
              height={200}
              priority
            />
          </div>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {
              "Constitutional Petition and Immigration Disputes "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Positive law is primarily drafted by administrative bodies and enacted by legislative assemblies, involving only a relatively small number of people in the process. Most law-abiding citizens patiently comply with and observe these laws and administrative regulations. However, because positive law is a human creation, it can at times be irrational. In such cases, it is possible to rectify these errors, seek redress for personal damages, and ultimately improve society. Our constitutional order provides an excellent system known as the Constitutional Complaint, which serves as a remedy for the infringement of fundamental rights caused by unjust suspensions of indictment, legislation, or other exercises of public power. Furthermore, foreign nationals are entitled to fair treatment under constitutional human rights, the Immigration Control Act, and the Refugee Act. No government has the right to treat an individual unfairly simply because of their status as a foreign national."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Cancellation of the Decision to Suspend Indictment"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Disputes over Violations of the Immigration Act"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Infringement of Fundamental Rights caused by the Unjust Exercise of Public Power"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Infringement of Property Rights caused by Unjust Administrative Actions "
            }
          </p>
          {/* <p className={styles.para_wrapper}>
            {t(
              "변호사시험 출제 및 채점위원 "
            )}
          </p>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {t("당신을 안국법률사무소로 초대합니다. ")}
          </p> */}
        </div>
        <div className={styles.areas_content_column}> 
          <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/myofficestairs.jpg"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={300}
              height={550}
              priority
            />
          </div>
          <p className={styles.para_wrapper}>
            {"In addition, Anguk Law Offices provides legal services trademarked \""} 
            <a 
              href='https://penvot.com'              
              target="_blank"
              rel="noopener noreferrer"
            >
              penvot.com
            </a> 
            {"\" that integrate IT technology with legal expertise."}
          </p>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {"Welcome to the world of Anguk Law Offices. "}
          </p>
          {/* <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/myofficelobby.jpg"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={275}
              height={150}
              priority
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}
