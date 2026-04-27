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
              "Company Liquidation in South Korea "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "When it comes to the legal side of business in South Korea, two big laws call the shots: the Commercial Act (for starting and running a company) and the Debtor Rehabilitation Act (for handling financial trouble or closing down). Together, they set the ground rules for everyone involved, from the owners to the creditors."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Most international investors choose the Jusik Hoesa (joint-stock company) structure over the Yuhan Hoesa (limited liability company), so it’s the main focus here, though they do have different rules for things like voting and closing shop."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Here are a few \"must-knows\" to keep your business on track:"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "The Two-Thirds Rule: For major changes like closing the company, you need a special resolution. This means at least two-thirds of the voting shares present (and at least one-third of all shares) must agree. A common trap for international owners is thinking a simple majority (51%) is enough—it isn't."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "The Go-To Court: If things get legally complicated with debt or bankruptcy, the Seoul Bankruptcy Court is the main authority. They handle the big cases and set the standard for how these things are done across the country."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "The \"Mandatory Pre-dissolution\" Audit: If your company is a certain size, you are legally required to have a pre-dissolution audit before you can close. Many international businesses miss this step, which can stall your exit plan by several weeks."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Understanding these rules early can save you a lot of time and stress later on."
            }
          </p>
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
              "Voluntary dissolution and liquidation"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "If your company is in good financial shape and everyone agrees it’s time to move on, Voluntary Dissolution is the smoothest way to exit. It follows a step-by-step process set out in the Commercial Act."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Here’s how the journey looks:"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "The Big Vote: It all starts with that special resolution we mentioned earlier. Once the shareholders say \"yes,\" you have two weeks to register this with the court."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Appointing a Liquidator: Next, you need a \"Liquidator\" to manage the closing. Usually, this is the current CEO, but shareholders can pick someone else. This person’s job is to look out for both the owners and the people the company owes money to."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "The \"Waiting Period\": This is a crucial step. By law, the liquidator must post a public notice (and contact known creditors directly) giving everyone at least two months to come forward with any unpaid bills. You can't give any money back to shareholders until this clock runs out."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Cleaning the Books: Once the two months are up, the liquidator pays off any remaining debts, sells off assets, and creates a final financial report."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Final Payout: After the shareholders approve that final report, the remaining cash is distributed to the owners based on their share percentage."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Crossing the Finish Line: Finally, you register the official closure with the court."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "How long does it take?"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "If your books are \"clean\" and there are no arguments, expect it to take about three to four months. However, if you have ongoing lawsuits, tax audits, or complicated assets, it’s not unusual for the process to stretch to a year or more."
            }
          </p>
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
          {/* <p className={styles.para_wrapper}>
            {"이외에도 안국법률사무소는 IT 기술과 법률 전문성을 접목한 "} 
            <a 
              href='https://penvot.com'              
              target="_blank"
              rel="noopener noreferrer"
            >
              penvot.com
            </a> 
            {"이란 서비스를 제공하고 있습니다. "}
          </p> */}
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {"Rehabilitation proceedings: the Korean Chapter 11 "}
          </p>
          <p className={styles.para_wrapper}>
            {"When a company is running out of money or is about to go broke but still has a solid business model, they can look into \"rehabilitation proceedings\" (Hoesaeng Jeolcha) under the DRBA. This is basically a court-guided makeover for the business instead of just shutting everything down. Think of it as the Korean version of Chapter 11 in the U.S. or administration in the U.K."} 
          </p>
          <p className={styles.para_wrapper}>
            {"This process can be kicked off by the company itself, a major creditor, or even a shareholder who owns at least 10% of the business. They file a petition with the Seoul Bankruptcy Court or a local court. Once that’s filed, the court usually steps in with a \"stay order,\" which acts like a giant pause button. It stops creditors from seizing assets or suing the company while things get sorted out."} 
          </p>
          <p className={styles.para_wrapper}>
            {"Next, the court brings in a \"custodian\" (Gwalliin) to keep an eye on things. This might be the current boss or an outside pro. Even though the original directors might stay on, the custodian is the one really in charge of the company’s assets and daily operations."} 
          </p>
          <p className={styles.para_wrapper}>
            {"From there, the company has to draw up a comeback plan (Hoesaeng Gyehoek-an) and show it to the court, usually within four to six months. This plan puts everyone the company owes money to into different groups—like banks, regular vendors, and shareholders—and outlines exactly how and when they’ll get paid. The creditors then get to vote. To move forward, a majority of the people in each group, representing two-thirds of the total debt value, need to say \"yes.\""} 
          </p>
          <p className={styles.para_wrapper}>
            {"If the court gives the green light, the plan becomes official for everyone, even the creditors who didn't like it. This \"cram-down\" power is a big deal in Korea because it forces the restructuring through. Just keep in mind that shareholders usually lose a lot of their ownership or even get wiped out entirely, depending on how much the company is actually worth."}
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
