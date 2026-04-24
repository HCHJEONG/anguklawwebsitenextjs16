import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.fullView}>
      <div className={styles.map_wrapper}>
        <div className={styles.iframe_wrapper}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.1569048956408!2d126.98128919999999!3d37.574922799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2c203368715%3A0xd31a93e3cb87188!2zQW5ndWsgTGF3IE9mZmljZXMg5a6J5ZyL5rOV5b6L5LqL5YuZ5omA!5e0!3m2!1sen!2skr!4v1709370056411!5m2!1sen!2skr" 
            style={{
              width: '250px',
              height: '350px',
              border: '0',
            }}
            loading="lazy" 
          ></iframe>
        </div>
      </div>
      <div className={styles.contact_wrapper}>
        <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
          {("Address: Chamber 304, 7, Yulgok-ro 2-gil, Jongno-gu, Seoul, Republic of Korea, 03143")}
        </p>
        <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
          {("TEL: +82-2-3210-3330")}
        </p>
      </div>
    </div>);
}