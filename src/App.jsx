import Header from './Header.jsx';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import Technologies from './Technologies.jsx';
import CreationProcess from './CreationProcess.jsx';
import Goal from './Goal.jsx';
import UserStories from './UserStories.jsx';
import Mvp from './Mvp.jsx';
import Conception from './Conception.jsx'
// import Zoning from './Zoning.jsx';
// import Wireframe from './Wireframe.jsx';
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
      <Goal />
      <UserStories />
      <Mvp />
      <Conception />
      {/* <Zoning />
      <Wireframe /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App; 
