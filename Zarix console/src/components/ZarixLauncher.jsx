// ZarixLauncher.jsx
import React, { useState } from 'react';
import { Settings, Store, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ZarixStore from './ZarixStore';
import GraphicsSettings from './GraphicsSettings';

const ZarixLauncher = () => {
  const [currentSection, setCurrentSection] = useState('launcher');
  const [recentApps] = useState([
    { id: 1, name: 'Super Game', icon: '/api/placeholder/64/64' },
    { id: 2, name: 'Photo App', icon: '/api/placeholder/64/64' },
    { id: 3, name: 'Music Pro', icon: '/api/placeholder/64/64' },
    { id: 4, name: 'Video Play', icon: '/api/placeholder/64/64' }
  ]);

  if (currentSection === 'store') {
    return <ZarixStore onBack={() => setCurrentSection('launcher')} />;
  }

  if (currentSection === 'settings') {
    return <GraphicsSettings onBack={() => setCurrentSection('launcher')} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-center mb-8">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
          <img src="/zarix-logo.png" alt="Zarix Logo" className="w-24 h-24" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
          <Card 
            className="bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 cursor-pointer transition-colors"
            onClick={() => setCurrentSection('store')}
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Store className="w-16 h-16" />
                <h2 className="text-xl font-bold">Zarix Store</h2>
                <p className="text-sm text-center text-gray-200">Descubre apps y juegos</p>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 cursor-pointer transition-colors"
            onClick={() => setCurrentSection('settings')}
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Settings className="w-16 h-16" />
                <h2 className="text-xl font-bold">Configuración</h2>
                <p className="text-sm text-center text-gray-200">Gráficos y sistema</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Recientes</h3>
          <div className="grid grid-cols-4 gap-4">
            {recentApps.map((app) => (
              <div key={app.id} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 rounded-lg bg-gray-800 overflow-hidden">
                  <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm text-center">{app.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-700" />
              <div>
                <p className="font-medium">Usuario</p>
                <p className="text-sm text-gray-400">En línea</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
              Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZarixLauncher;