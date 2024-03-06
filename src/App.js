import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Allocate from './Components/HomePage/Allocate/Allocate';
import Estimate from './Components/HomePage/Estimate/Estimate';
// import Desktop3  from './Components/Desktop3/Desktop3.tsx';
import ProjectCenter from './Components/ProjectCenter/ProjectCenter.js';
import ReportCenter from './Components/ReportCenter/ReportCenter.js';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Header from './Components/Header/Header';
import IdentifyTable from './Components/IdentifyTable/IdentifyTable.js';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/identify" element={<IdentifyTable />}></Route>
          <Route exact path="/allocate"element={<Allocate />}></Route>
          <Route exact path="/estimate" element={<Estimate />}></Route>
          <Route exact path="/projectCenter" element={<ProjectCenter />}></Route>
          <Route exact path="/reportCenter" element={<ReportCenter />}></Route>      
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
