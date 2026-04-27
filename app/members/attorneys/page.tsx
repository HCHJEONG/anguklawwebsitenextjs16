import Image from 'next/image';
import styles from './page.module.css';

export default function Members () {
  return (
    <div className={styles.fullView}>
      <div className={styles.members_content_wrapper}>
        <div className={styles.members_content_column}>
          
          <div className={styles.image_wrapper}>
            <Image
              src="/assets/img/myfacesuit.jpg"
              alt="Anguk Law Offices"
              className={styles.angukLogo}
              width={250}
              height={550}
              priority
            />
          </div>
          
        </div>
        <div className={styles.members_content_column}> 
          <p className={styles.para_accent}>
            {'Representative Attorney'}
          </p><p className={styles.para_accent}>
            {'Mr. Heechan Jeong'}
          </p>
          <p className={styles.para_wrapper}>
            {'Doctor of Philosophy (Ph.D.) in Law, Faculty of Law, University of Delhi'}
            <br/>
            <span style={{fontSize: '0.8rem'}}>
              {'Ph.D. Dissertation: '}
            </span>
            <br/>
            <span style={{fontSize: '0.8rem', color: 'green',}}>
              {'A Comparative Study on the Concept of Legal Personality in Korea and India'}
            </span>
          </p>   
          <p className={styles.para_wrapper}>
            {'Graduated from Seoul National University College of Law'}
          </p>
          <p className={styles.para_wrapper} style={{color: 'green',}}>
            {'Member of the Question Drafting and Grading Committee for the National Bar Examination'}
          </p>
          <p className={styles.para_wrapper}>
            {'Passed the qualification exams for judges, prosecutors, and lawyers'}
          </p>
          <p className={styles.para_wrapper} style={{color: 'green',}}>
            {'Graduated from the Judicial Research and Training Institute (30th class)'}
          </p>
          <p className={styles.para_wrapper}>
            {'Master of Laws (LL.M.) from Seoul National University Graduate School'}
            <br/>
            <span style={{fontSize: '0.8rem'}}>
              {'Master Thesis: '}
            </span>
            <br/>
            <span style={{fontSize: '0.8rem', color: 'green',}}>
              {'Research on the Requirement of Originality under Copyright Law'}
            </span>
          </p>          
          <p className={styles.para_wrapper}>
            {'Instructor at HUFS Law School'}
            <br/>
            <span style={{fontSize: '0.8rem', color: 'green',}}>
              {'Course: Civil Law'}
            </span>
          </p>
          <p className={styles.para_wrapper}>
            {'Anguk Law Offices Representative Attorney'}
          </p>
        </div>
      </div>
    </div>
  )
}