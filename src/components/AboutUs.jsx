import styles from "../style";

const About = () => {
  return (
    <section id="about" className={`flex justify-center ${styles.paddingY}`}>
      <div className="text-center">
        <h2 className="font-poppins font-semibold ss:text-[48px] text-[36px] text-white ss:leading-[60px] leading-[45px]">
          About Us
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
          IntelliKid is dedicated to revolutionizing the way children learn,
          offering an engaging and interactive learning experience. 
        </p>
      </div>
    </section>
  );
};

export default About;
