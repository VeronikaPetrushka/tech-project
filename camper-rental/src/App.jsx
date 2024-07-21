import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ErrorBoundary from './components/ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CataloguePage = lazy(() => import('./pages/CataloguePage/CataloguePage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));

const App = () => {
  return (
    <ErrorBoundary>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
