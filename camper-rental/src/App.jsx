import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CataloguePage = lazy(() => import('./pages/CataloguePage/CataloguePage'));

const App = () => {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
      </Routes>
    </>
  )
}

export default App;
