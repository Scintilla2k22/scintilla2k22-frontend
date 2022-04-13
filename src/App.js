import './App.css';
import { Routes, Route } from 'react-router-dom'
import EventList from './Components/EventList/EventList';
import EventPage from './Components/Eventpage/EventPage';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/eventpage' element={<EventPage />} />
      </Routes>
    </div>
  );
}




export default App;
