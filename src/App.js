import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NavbarComp from './components/NavbarComp';
import ImagesSlide from './components/ImagesSlide';
import Footer from './components/Footer';
import UpButton from './components/UpButton';

function App() {
  return (
    <div className="App">
    <Header />
    <NavbarComp />
    <ImagesSlide />
    <UpButton />
    <Footer />
   
    </div>
  );
}

export default App;
