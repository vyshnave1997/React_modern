import { stats } from "../constants";
import styles from "../style";

const Stats = () =>  (
    <section className={`${styles.flexCenter} flex-row flex-warp sm:mb-20 mb-6`}>
      {stats.map((stat)=> (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40] text-[30px] xs:leading-[43px] text-white">{stat.value}</h4>
          <p className="font-poppins font-semibold xs:text-[20] text-[15px] xs:leading-[26px] text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))}
    </section>
  )


export default Stats