// ZarixStore.jsx
import React, { useState } from 'react';
import { Search, Star, Download, Tag, Home, Grid, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ZarixStore = ({ onBack }) => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const apps = [
    {
      id: 1,
      name: "Super Adventure",
      category: "games",
      price: "29.99",
      rating: 4.5,
      downloads: "50K",
      image: "/api/placeholder/200/200",
      tags: ["Aventura", "Acción"]
    },
    {
      id: 2,
      name: "Photo Editor Pro",
      category: "productivity",
      price: "Free",
      rating: 4.8,
      downloads: "100K",
      image: "/api/placeholder/200/200",
      tags: ["Edición", "Fotos"]
    },
    {
      id: 3,
      name: "Space Explorer",
      category: "games",
      price: "19.99",
      rating: 4.7,
      downloads: "75K",
      image: "/api/placeholder/200/200",
      tags: ["Espacio", "Estrategia"]
    }
  ];

  const categories = [
    { id: 'all', name: 'Todo', icon: <Home className="w-5 h-5" /> },
    { id: 'games', name: 'Juegos', icon: <Grid className="w-5 h-5" /> },
    { id: 'productivity', name: 'Productividad', icon: <Tag className="w-5 h-5" /> }
  ];

  const filteredApps = apps.filter(app => 
    (currentCategory === 'all' || app.category === currentCategory) &&
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto bg-gray-900 min-h-screen text-white p-6">
      <button onClick={onBack} className="mb-4 flex items-center text-gray-400 hover:text-white transition-colors">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Volver
      </button>

      <h1 className="text-3xl font-bold mb-4 text-purple-400">Zarix Store</h1>
      
      <div className="flex gap-4 items-center mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar apps y juegos..."
            className="w-full bg-gray-800 rounded-lg py-2 pl-10 pr-4 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setCurrentCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentCategory === category.id ? 'bg-purple-600' : 'bg-gray-800'
            }`}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApps.map(app => (
          <Card key={app.id} className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <img
                src={app.image}
                alt={app.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{app.name}</h3>
                  <span className="text-purple-400 font-bold">{app.price}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1">{app.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="w-4 h-4" />
                    <span className="ml-1">{app.downloads}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {app.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                  Descargar
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ZarixStore;