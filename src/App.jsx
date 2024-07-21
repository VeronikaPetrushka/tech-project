import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
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
          <Route path="/catalog" element={<CataloguePage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
