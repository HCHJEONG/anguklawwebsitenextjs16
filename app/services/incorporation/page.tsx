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
              "국제거래 소송과 가사 "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "외국기업과 외국인이 관계된 사법상의 분쟁은 특별한 고려사항들이 있습니다. "
              +
              "그리고 다량의 외국어 자료의 분석과 외국인을 상대로 한 교섭이 필요합니다. "
              +
              "국제거래 소송에서 전문성과 경험을 가진 조력자가 필요한 이유입니다. "
              +
              "가사 소송도 실체법이나 절차에 있어서 특별한 점이 많습니다. " 
              +
              "무엇보다도 의뢰인의 내면적 소리를 끊기 있게 경청하고 이를 법적으로 구성해내야 합니다. "
              +
              "안국법률사무소는 일반 민사는 물론 이상과 같은 분야에서 의뢰인이 추구하는 가치를 옹호합니다."
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "국제거래 소송과 자문 "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "이혼 "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "의료소송 "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "IT 스타트업 소송과 자문 "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "집합건물 소송과 자분 "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "민사소송 "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "형사고소 "
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
              "헌법소원과 출입국관리 분쟁 "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "실정법은 주로 행정기관에서 안을 만들어 입법기관에서 의결해 만들고 그 과정에 참여하는 사람들은 비교적 소수입니다. "
              +
              "그리고 많은 선량한 시민들은 이러한 법률이나 행정규칙에 대해서 참을성 있게 순응하며 이를 준수합니다. "
              +
              "하지만 실정법도 사람이 만든 것이기에 불합리한 것일 수 있습니다. "
              +
              "이런 경우도 잘못된 것을 바로잡아서 본인의 피해를 구제하고 나아가 사회를 더 개선시킬 수 있습니다. "
              +
              "우리 헌법질서는 헌법소원이라는 훌륭한 제도를 두고 있고 부당한 기소유예나 입법 기타 공권력에 의한 기본권 침해의 구제를 이를 통해 이룰 수 있습니다. "
              +
              "나아가 외국인들도 헌법상 인권, 출입국관리법과 난민법에 따라 정당하게 처우를 받을 수 있습니다. "
              +
              "어떤 정부도 외국인이라는 이유로 부당하게 처우할 수는 없습니다. "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "기소유예 처분 취소 "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "출입국관리법 위반 분쟁 "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "부당한 공권력 행사에 따른 기본권 침해 "
            }
          </p>
          <p className={styles.para_wrapper}>
            {
              "부당한 행정처분에 의한 재산권 침해 "
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
            {"이외에도 안국법률사무소는 IT 기술과 법률 전문성을 접목한 "} 
            <a 
              href='https://penvot.com'              
              target="_blank"
              rel="noopener noreferrer"
            >
              penvot.com
            </a> 
            {"이란 서비스를 제공하고 있습니다. "}
          </p>
          <p className={`${styles.para_wrapper} ${styles.para_accent}`}>
            {"당신을 안국법률사무소의 세계로 초대합니다. "}
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
