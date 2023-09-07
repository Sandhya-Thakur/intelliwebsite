import styles from "../style";

const Why = () => {
  return (
    <section id="why" className={`flex justify-center ${styles.paddingY}`}>
      <div className="text-center">
        <h2 className="font-poppins font-semibold ss:text-[48px] text-[36px] text-white ss:leading-[60px] leading-[45px]">
          Why IntelliKid?
        </h2>
        <div>
          <h2 className="font-poppins font-semibold text-3xl text-white leading-[45px] mt-5 ">
            Personalized and Learning Experience
          </h2>
        </div>

        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          Your child is unique, and their education should be too. IntelliKid's
          AI-driven platform adjusts itself according to your child's learning
          speed, preferences, and interests, providing a highly personalized and
          fun learning environment.
        </p>
        <h2 className="font-poppins font-semibold text-3xl text-white leading-[45px] mt-5 ">
          Empowered Parents
        </h2>
        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          Through our insightful assessments and learning path suggestions,
          parents can easily track their child's progress and be actively
          involved in their educational journey. Say goodbye to
          one-size-fits-all solutions and hello to intelligent, personalized
          learning.
        </p>
        <h2 className="font-poppins font-semibold text-3xl text-white leading-[45px] mt-5 ">
          Flexibility and Convenience
        </h2>
        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          IntelliKid is accessible from multiple devices, giving you and your
          child the flexibility to engage with educational content at your
          convenience, be it at home, in a classroom, or on the go.
        </p>
        <h2 className="font-poppins font-semibold text-3xl text-white leading-[45px] mt-5 ">
          Secure and Private
        </h2>
        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          We take your child's privacy seriously. All data is encrypted and
          stored securely, ensuring a safe and confidential learning
          environment.
        </p>
        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
          Choose IntelliKid today for an intelligent, intuitive, and
          individualized educational experience for your child. Because every
          child deserves a personalized path to success.
        </p>
        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-white`}>
         
        </p>
      </div>
    </section>
  );
};

export default Why;
