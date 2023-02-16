import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NavbarComp from './components/NavbarComp';
import ImagesSlide from './components/ImagesSlide';
import Footer from './components/Footer';
import UpButton from './components/UpButton';
import SideAddCard from './components/card/SideAddCard';
import Test from './components/card/Test';
import Main from './components/Pages/Main';
import NewsAndResearch from './components/Pages/NewsAndResearch';
import DataFetch from './components/Pages/DataFetch';
import HealthyLiving from './components/Pages/HealthyLiving';
import { Routes ,Route} from 'react-router-dom';
import AboutDiabetes from './components/Pages/AboutDiabetes';
import ReadMore from './components/Pages/ReadMore';

function App() {
  return (
    <div className="App">
      {/* <Test/> */}
    <Header />
    <NavbarComp />
    {/* <ImagesSlide /> */}
    {/* <SideAddCard /> */}
    {/* <UpButton /> */}
    {/* <Footer /> */}

    {/* <Main /> */}
    {/* <NewsAndResearch /> */}
    {/* <HealthyLiving /> */}
    
   {/* <DataFetch/> */}

   <Routes>
    <Route path="/" element={<Main />}/>
    <Route path="/healthyliving" element={<HealthyLiving />}/>
    <Route path="/newsandresearch" element={<NewsAndResearch/>}/>
    <Route path="/aboutdiabetes" element={<AboutDiabetes />}/>
    <Route path="/ReadMore" element={<ReadMore />}/>

   </Routes>
    </div>
  );
}

export default App;
