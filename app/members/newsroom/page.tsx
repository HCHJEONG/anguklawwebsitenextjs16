import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsroom | Anguk Law Offices',
  description: 'Anguk Law Offices is a leading Korean law firm for foreign investors.',
  metadataBase: new URL('https://anguklaw.com/members/newsroom'),
};

export default function Newsroom () {
  return (
    <div className={styles.fullView}>
      <div className={styles.areas_content_wrapper}>

        <div className={styles.areas_content_column}>        
          <div className={styles.image_wrapper}>
            <Image
              src="/assets/img/bizchosun.jpg"
              alt="Anguk Law Offices & Chosun Biz"
              className={styles.angukLogo}
              width={300}
              height={200}
              priority
            />
          </div>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {
              "Korea weighs retroactive end to landlord tax breaks, eyes Constitutional Court"
            }
          </p>
          <p className={styles.para_wrapper}>
            {"Anguk Law Offices provides professional legal advisory for \""} 
            <a 
              href='https://biz.chosun.com/en/en-realestate/2026/02/11/TDWWBNPS35EMRAUQNA7F2CGTDM/'              
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'blue'}}
            >
              Chosun Newspaper
            </a> 
            {"\" that is one of the mainstream news media in Korea."}
          </p>
          <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/koreatimes.jpg"
              alt="Anguk Law Offices & Korea Times"
              className={styles.angukLogo}
              width={300}
              height={200}
              priority
            />
          </div>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {
              "Gov't under fire for 'socialistic' real estate policies"
            }
          </p>
          <p className={styles.para_wrapper}>
            {"Anguk Law Offices provides professional legal advisory for \""} 
            <a 
              href='https://www.koreatimes.co.kr/economy/20191219/govt-under-fire-for-socialistic-real-estate-policies'              
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'blue'}}
            >
              Korea Times
            </a> 
            {"\" that is a leading news media in Korea for foreigners."}
          </p>
        </div>

        <div className={styles.areas_content_column}> 
          <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/justice.png"
              alt="Anguk Law Offices and Justice Magazine"
              className={styles.angukLogo}
              width={300}
              height={550}
              priority
            />
          </div>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {
              "An Overview on the Business Law System in India"
            }
          </p>
          <p className={styles.para_wrapper}>
            {"Anguk Law Offices is actively involved in academic activities by publishing papers in a journal like \""} 
            <a 
              href='https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE02041163'              
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'blue'}}
            >
              JUSTICE
            </a> 
            {"\" that is a top-tier one in Korean legal fields."}
          </p>
        </div>
        <div className={styles.areas_content_column}> 
          <div className={styles.image_wrapper}>          
            <Image
              src="/assets/img/tila.png"
              alt="Anguk Law Offices and India Lawfirm of TILA"
              className={styles.angukLogo}
              width={300}
              height={550}
              priority
            />
          </div>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {
              "Anguk Law Offices as a Global Partner of Int'l Law Firms"
            }
          </p>
          <p className={styles.para_wrapper}>
            {"Anguk Law Offices provides legal services in collaboration with many int'l lawfirms like \""} 
            <a 
              href='https://www.tila.in/south-korea'              
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'blue'}}
            >
              TILA India
            </a> 
            {"\" that is a leading Indian lawfirm."}
          </p>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {"Welcome to the world of Anguk Law Offices. "}
          </p>
        </div>
      </div>
    </div>
  )
}
