import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-4">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} md:text-[20px] text-[16px] ml-2`}>
          <span className="text-white ">50%</span> Discount for the
          <span className="text-white"> 1st Month </span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="font-poppins flex-1 font-semibold ss:text-[72px] text-[52px] text-white leading-[120%]">
          The Next <br className="sm:block hidden" />
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white leading-[120%] w-full">
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[1] w-[60%] h-[60%] opacity-50 rounded-full bottom-40 pink__gradient"></div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[60%] h-[60%] rounded-full bottom-40 pink__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero
