
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ContactForm from "./Components/ContactForm";
import Team from "./Components/Team";
import GlobalStyles from "./GlobalStyles";
import Footer from './Components/Footer'
import InformesDireitos from './Components/InformesDireito'
import About from './Components/About'


const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Team/>
      <InformesDireitos />
      <About/>
      <ContactForm/>
      <Footer />
    </Router>
  );
};

export default App;