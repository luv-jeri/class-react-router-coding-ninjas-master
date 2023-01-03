import Hero from './pages/app/hero/Hero';
import Nav from './components/nav/Nav';
import Courses from './pages/app/courses/Courses';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route
          path='/courses'
          element={<Courses />}
        />
      </Routes>
    </div>
  );
}

export default App;
