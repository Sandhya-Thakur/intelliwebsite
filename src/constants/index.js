import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "why",
    title: "Why",
  },
  {
    id: "about",
    title: "About",
  },
 

];

export const logoLink = {
  id: "logo",
  link: "/"
};

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Interactive Learning",
    content:
      "Engage with our interactive lessons that make learning enjoyable and effective.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Safe & Secure",
    content:
      "We prioritize the security of your child's data and provide a safe online environment.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Progress Tracking",
    content:
      "Easily track your child's progress and learning milestones through our platform.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "IntelliKid has transformed my child's learning experience. It's amazing to see how engaged and excited they are to learn new things!",
    name: "Sarah Williams",
    title: "Proud Parent",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "As an educator, I'm impressed by IntelliKid's commitment to providing quality educational content. It's a valuable resource for parents and teachers alike.",
    name: "David Lee",
    title: "Educator",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "I've seen my students thrive using IntelliKid's platform. It's a wonderful tool that caters to diverse learning styles and abilities.",
    name: "Emily Carter",
    title: "Elementary School Teacher",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Happy Users",
    value: "5000+",
  },
  {
    id: "stats-2",
    title: "Trusted by Schools",
    value: "300+",
  },
  {
    id: "stats-3",
    title: "Learning Hours",
    value: "1M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.intellikid.xyz/",
      },
      {
        name: "Pricing",
        link: "https://www.intellikid.xyz/pricing/",

      },
      {
        name: "Privacy Policy",
        link: "https://www.intellikid.xyz/privacy-policy/",
      },
      {
        name: "Terms of Service",
        link: "https://www.intellikid.xyz/terms-of-service/",
      },
    ],


  },
  {
    title: "Community",
    links: [
      {
        name: "Our Team",
        link: "https://www.intellikid.xyz/our-team/",
      },
      {
        name: "Our Story",
        link: "https://www.intellikid.xyz/our-story/",
      },
      {
        name: "Blog",
        link: "https://www.intellikid.xyz/blog/",
      },
    ],
  },

  {
    title: "Partner",
    links: [
      {
        name: "Become a Partner",
        link: "https://www.intellikid.xyz/become-a-partner/",
      },
      {
        name: "Partner Login",
        link: "https://www.intellikid.xyz/partner-login/",
      },
    ],
  },
];



export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    img: airbnb,
  },
  {
    id: "client-2",
    img: binance,
  },
  {
    id: "client-3",
    img: coinbase,
  },
  {
    id: "client-4",
    img: dropbox,
  },
];