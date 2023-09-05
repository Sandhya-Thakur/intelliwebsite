import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">
              Harness the Power of Personalization to Elevate Your Child's
              Learning{" "}
            </span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"></h1>
        <ul
          className={`max-w-[470px] mt-5 mb-8 ${styles.paragraph} list-disc list-inside`}
        >
          <li className="mb-2">
            <span className="text-gradient">Personalized Learning:</span> Access
            a curated library that adapts to your child's academic preferences,
            taking the hassle out of finding appropriate resources.
          </li>
          <li className="mb-2">
            <span className="text-gradient">Guided Learning Paths:</span>{" "}
            Benefit from AI-driven learning path suggestions that adapt to your
            child's unique needs, paving the way for informed decisions and
            tailored learning.
          </li>
          <li className="mb-2">
            <span className="text-gradient">Data-backed Assessments:</span>{" "}
            Utilize engaging quizzes and data-backed assessments to pinpoint
            your child's strengths and areas for improvement, giving you the
            insights to support their academic journey.
          </li>
        </ul>
        <div className={`${styles.sectionImg} md:ml-16 mt-8`}>
          <a
            href="https://intellidash-rlgg0tpn6-thakusandhya-gmailcom.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer glow-on-hover"
          >
            <GetStarted />
          </a>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src="kid.png"
          alt="billing"
          className="w-[100%] h-[60%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
