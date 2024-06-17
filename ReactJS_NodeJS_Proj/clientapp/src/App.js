import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Sidenav from './Sidenav';
import Header from './components/Navbarcomponent/Header';
import Footer from './components/Navbarcomponent/Footer';
import Home from './components/Navbarcomponent/Home';
import Sidenav_Ex from './components/Navbarcomponent/SideNav';
import ESGReading from './components/sitecomponents/ESGReading';
import { BrowserRouter as Router, Route, Switch, Link, useNavigate, Outlet, Routes } from 'react-router-dom';

// function GettingDataFromNodeJSAPI() {
//   // const [reportList, setListOfReport] = useState([]);
//   // useEffect(() => {
//   //   axios.get("http://localhost:3001/report").then((response) => {
//   //    setListOfReport(response.data);
//   //   });
//   // }, []);
//   return (
//     <div className="App">     
//      {/* {reportList.map((value, key) =>{
//       return(
//         <div className='post'>
//           <li key={value.Id}>
//           <div className='title'>{value.Label}</div>
//           <div className='title'>{value.ScheduleType}</div>
//           </li>
//         </div>)
//      })} */}
//      <Sidenav/>
//     </div>
//   );
// }

const App = () => 
{
  return(
    <Router>
      <AppContent />
    </Router>
  )
}
const AppContent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLinkClick = (event) => {
      console.log(event);
      if (event.target.matches('.nav-link')) {
        event.preventDefault();
        const href = event.target.getAttribute('href');
        navigate(href);
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, [navigate]);

  return (
    <div>
      <Header/>
      <Home/>      
      <Footer/>
      <Sidenav_Ex/>
      </div>
  );
};

export default App;
