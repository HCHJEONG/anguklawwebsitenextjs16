import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Establishment | Anguk Law Offices',
  description: 'Anguk Law Offices is a leading Korean law firm for foreign investors.',
  metadataBase: new URL('https://anguklaw.com/services/incorporation'),
};


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
          <h1 className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {
              "Company Registration in South Korea "
            }
          </h1>
          <p className={styles.para_wrapper}>
            {
              "South Korea is a fantastic place for international investors, offering a reliable, high-tech business world with clear rules and a very solid legal system. However, getting set up means dealing with a few big laws, like the Commercial Act and the Foreign Investment Promotion Act, along with various tax and hiring rules. "
              +
              "Foreign investors are always supposed to deal with a sophisticated, rules-based commercial environment backed by a well-developed court system and a transparent corporate registry. Establishing a legal presence requires navigating the Commercial Act (상법, Sangbeop), the Foreign Investment Promotion Act (외국인투자촉진법), and a layered set of tax and labour obligations. "
              +
              "The risks of proceeding without specialist guidance are concrete: incorrect entity selection can trigger double taxation, and missed registration deadlines carry administrative penalties. This article covers the main legal forms available to foreign investors, the step-by-step registration process, ongoing compliance obligations, and the most common pitfalls that international businesses encounter in South Korea."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Doing it alone can be tricky. Picking the wrong business structure might lead to extra taxes, and missing deadlines can result in annoying fines. To help you get it right, this guide breaks down the different ways to set up your business, explains the registration steps, covers your ongoing responsibilities, and points out the common mistakes to avoid."
            }
          </p>       
          <h1 className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {
              "Legal forms for your business"
            }
          </h1>
          <p className={styles.para_wrapper}>
            {
              "Foreign investors in South Korea typically choose between the Jusik Hoesa (joint-stock company), Yuhan Hoesa (LLC), and a branch office. The Jusik Hoesa is the standard for larger operations, allowing public shares, while the Yuhan Hoesa offers more privacy for smaller ventures. While branches are faster to establish, they do not create a separate legal entity, leaving the parent company directly liable. Local partners and banks generally prefer the stability of a locally incorporated entity over a branch, which is often chosen just for convenience."
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

          <h1 className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {
              "Registration steps, timelines and costs"
            }
          </h1>
          <p className={styles.para_wrapper}>
            {
              "Setting up a Jusik Hoesa or Yuhan Hoesa follows a clear path under Korean law, usually taking about three to six weeks from the time you start your paperwork until you get your official corporate registration certificate."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Here’s a quick look at the main steps:"
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Drafting the Rules: You'll create and notarize your \"Articles of Incorporation\" (the company’s rulebook)."
            }
          </p>

          <p className={styles.para_wrapper}>
            {
              "Funding: You’ll deposit your starting capital into a local bank to get a deposit certificate."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "The Court Filing: You officially file your application with the local District Court Registry."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Tax Setup: Within 20 days of starting, you need to register with the National Tax Service to get your business number."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Local Licenses: Depending on what you do, you might need extra permits from the local government."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "While the law technically doesn't require a huge amount of starting money, banks and officials like to see a balance that matches your business goals. A big tip: if you invest $100,000 USD or more, you fall under the Foreign Investment Promotion Act. This is great because it gives you access to KOTRA’s \"one-stop service\" and potential tax breaks."
            }
          </p>

          <p className={styles.para_wrapper}>
            {
              "Keep in mind there are costs involved, like notary fees and court charges, which scale with your capital. You’ll also need to budget for legal fees, plus translation and document certification (apostille) costs since you're bringing in foreign paperwork."
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
          <h1 className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {"Foreign investment rules and sector restrictions"}
          </h1>
          <p className={styles.para_wrapper}>
            {
              "Think of the Foreign Exchange Management Act (FEMA) as the main rulebook for bringing money into South Korea. One of the most important steps is the Foreign Investment Notification. You need to file this with a bank or KOTRA before or during the time you send your funds. It’s not just a formality — if you skip it, your investment might lose its legal protection under the law."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "While Korea is very open, some areas have \"Keep Out\" or \"Proceed with Caution\" signs."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Restricted Areas: Sectors like broadcasting, telecommunications, aviation, and some financial services have limits on how much a foreigner can own."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Approval is Key: If you’re eyeing a restricted sector, you can’t just start a company. You need a thumbs-up from the government first, which can take a few months. Starting without this approval is a major risk—the government could actually shut your company down later."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "Pro-tip: Don't forget about Investment Treaties. Korea has special deals with many countries that offer extra protection and ways to settle disputes. Checking if your home country has one of these treaties can give you a big advantage."
            }
          </p>
        </div>
      </div>
    </div>
  )
}
