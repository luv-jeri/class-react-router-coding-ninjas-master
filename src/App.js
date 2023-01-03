import Hero from './pages/app/hero/Hero';
import Nav from './components/nav/Nav';
import Courses from './pages/app/courses/Courses';
import Details from './pages/app/details/Details';

import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='courses' element={<Courses />} />
        <Route path='/courses/:courseID' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
