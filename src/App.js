import Hero from './pages/app/hero/Hero';
import Nav from './components/nav/Nav';
import Courses from './pages/app/courses/Courses';
import Details from './pages/app/details/Details';
import Page404 from './pages/misc/Page404/Page404';

import './App.css';
import { Route, Routes } from 'react-router-dom';

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
        <Route
          path='/courses/:id'
          element={<Details />}
        />
      

        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
