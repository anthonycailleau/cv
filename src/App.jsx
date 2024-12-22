import Header from './Header.jsx'; 
import AboutMe from './AboutMe.jsx';
import Technologies from './Technologies.jsx';
import CreationProcess from './CreationProcess.jsx';
import Footer from './Footer.jsx'; 
import './App.scss';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <AboutMe />
      <Technologies />
      <CreationProcess />
      <Footer />
    </div>
  );
};

export default App; 
