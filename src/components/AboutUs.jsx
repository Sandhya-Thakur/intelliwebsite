import styles from "../style";

const About = () => {
  return (
    <section id="about" className={`flex justify-center ${styles.paddingY}`}>
      <div className="text-center">
        <h2 className="font-poppins font-semibold ss:text-[48px] text-[36px] text-white ss:leading-[60px] leading-[45px]">
          About Us
        </h2>
        <h2 className="font-poppins font-semibold text-3xl text-white leading-[45px] mt-5 ">
          Vision
        </h2>
        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          At IntelliKid, our vision is to revolutionize the way children learn
          by offering a personalized, intuitive, and interactive educational
          journey. We believe that each child is unique, and our aim is to
          nurture that uniqueness through targeted, interest-based learning
          experiences.
        </p>
        <h2 className="font-poppins font-semibold text-3xl text-white leading-[45px] mt-5 ">
          Mission
        </h2>
        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          Our mission is to empower children by providing them with a
          personalized learning platform. We strive to understand each child's
          individual learning preferences and interests to deliver a tailor-made
          educational experience that fosters growth, creativity, and a lifelong
          love of learning.
        </p>
        <h2 className="font-poppins font-semibold text-3xl text-white leading-[45px] mt-5 ">
          Approach
        </h2>
        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          IntelliKid leverages the power of AI to offer a four-module approach
          to personalized learning:
        </p>
        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          <span className="text-gradient">Content curation:</span> Our advanced
          algorithms curate educational content based on selected languages,
          grades, subjects, and topics. This ensures that your child receives
          the most relevant and engaging material tailored specifically to them.
        </p>

        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          <span className="text-gradient">Resource recommendations:</span> Based
          on the selected preferences, we also provide a list of valuable
          resources and links that will further facilitate the learning
          experience.
        </p>
        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          <span className="text-gradient">Quiz-based assessment:</span> Through
          interactive quizzes, your child is able to apply what they've learned.
          This not only reinforces their understanding but also helps us adapt
          our algorithms for future learning pathways.
        </p>

        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          <span className="text-gradient">Customized learning path:</span> Based
          on quiz results, we generate comprehensive assessments that not only
          gauge how well your child understands the material but also suggests a
          customized learning path for ongoing education.
        </p>
      </div>
    </section>
  );
};

export default About;
