import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './pages/Homepage';
import Aboutuspage from './pages/Aboutuspage'
import EnergySolutionspage from './pages/EnergySolutionspage';
import ProcessEngineeringpage from './pages/ProEngpage';
import ResearchSupportpage from './pages/ResearchSupportpage';
import Trainingspage from './pages/Trainingspage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = '/' element = {<Homepage />} />
          <Route path = '/about' element = {<Aboutuspage />} />
          <Route path = '/energy' element = {<EnergySolutionspage />} />
          <Route path = '/proeng' element = {<ProcessEngineeringpage/>} />
          <Route path = '/research' element = {<ResearchSupportpage/>} />
          <Route path = '/training' element = {<Trainingspage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
