import styles from "./style";
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import {About, Footer, HeroSection, NavBar, Why} from "./components";

const App = () => {
  return (
    <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}><NavBar/></div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <HeroSection/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Why/>
          <About/>
          <Footer/>
        </div>
      </div>
      <Routes>
          
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>

   
  );
};

export default App;
