import Header from './Header.jsx';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import Technologies from './Technologies.jsx';
import CreationProcess from './CreationProcess.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import './App.scss';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <AboutMe />
      <Skills />
      <Technologies />
      <CreationProcess />
      <Contact />
      <Footer />
    </div>
  );
};

export default App; 
