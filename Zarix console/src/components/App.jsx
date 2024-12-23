import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Store from './Store';
import GraphicsSettings from './GraphicsSettings';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <header className="flex justify-between items-center mb-6">
          <img src="/path/to/zarix-logo.png" alt="Zarix Logo" className="w-20" />
          <h1 className="text-2xl font-bold">Zarix Launcher</h1>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/settings" element={<GraphicsSettings onBack={() => window.history.back()} />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="space-y-6">
      <Link to="/store" className="block bg-purple-600 p-4 rounded text-center hover:bg-purple-700">
        Zarix Store
        <p className="text-sm text-gray-300">Descubre apps y juegos</p>
      </Link>
      <Link to="/settings" className="block bg-blue-600 p-4 rounded text-center hover:bg-blue-700">
        Configuración
        <p className="text-sm text-gray-300">Gráficos y sistema</p>
      </Link>
    </div>
  );
};

export default App;
