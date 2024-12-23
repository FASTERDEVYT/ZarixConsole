// GraphicsSettings.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sliders, ArrowLeft } from 'lucide-react';

const GraphicsSettings = ({ onBack }) => {
  const [settings, setSettings] = useState({
    resolution: '1080p',
    aspectRatio: '16:9',
    refreshRate: 60,
    vsync: true,
    textureQuality: 'high',
    shadowQuality: 'high',
    antialiasing: 'TAA',
    bloomEffect: true,
    motionBlur: false,
    drawDistance: 100,
    vegetationDensity: 80,
  });

  const handleSettingChange = (setting, value) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <button
        onClick={onBack}
        className="mb-4 flex items-center text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Volver
      </button>

      <Card className="w-full max-w-2xl mx-auto bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sliders className="w-6 h-6" />
            Configuración de Gráficos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Configuración Básica */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Configuración Básica</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label>Resolución</label>
                <select
                  className="w-full bg-gray-700 rounded p-2"
                  value={settings.resolution}
                  onChange={(e) => handleSettingChange('resolution', e.target.value)}
                >
                  <option>720p</option>
                  <option>1080p</option>
                  <option>1440p</option>
                  <option>4K</option>
                </select>
              </div>
              <div className="space-y-2">
                <label>Tasa de refresco</label>
                <select
                  className="w-full bg-gray-700 rounded p-2"
                  value={settings.refreshRate}
                  onChange={(e) => handleSettingChange('refreshRate', Number(e.target.value))}
                >
                  <option>60</option>
                  <option>75</option>
                  <option>144</option>
                  <option>240</option>
                </select>
              </div>
            </div>
          </div>

          {/* Calidad Visual */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Calidad Visual</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label>Calidad de Texturas</label>
                <select
                  className="w-full bg-gray-700 rounded p-2"
                  value={settings.textureQuality}
                  onChange={(e) => handleSettingChange('textureQuality', e.target.value)}
                >
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                  <option>ultra</option>
                </select>
              </div>
              <div className="space-y-2">
                <label>Calidad de Sombras</label>
                <select
                  className="w-full bg-gray-700 rounded p-2"
                  value={settings.shadowQuality}
                  onChange={(e) => handleSettingChange('shadowQuality', e.target.value)}
                >
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                  <option>ultra</option>
                </select>
              </div>
            </div>
          </div>

          {/* Efectos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Efectos</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={settings.bloomEffect}
                  onChange={(e) => handleSettingChange('bloomEffect', e.target.checked)}
                  className="w-4 h-4"
                />
                <label>Efecto Bloom</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={settings.motionBlur}
                  onChange={(e) => handleSettingChange('motionBlur', e.target.checked)}
                  className="w-4 h-4"
                />
                <label>Motion Blur</label>
              </div>
            </div>
          </div>

          {/* Configuración Avanzada */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Avanzado</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label>Distancia de Dibujo</label>
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={settings.drawDistance}
                  onChange={(e) => handleSettingChange('drawDistance', Number(e.target.value))}
                  className="w-full"
                />
                <span>{settings.drawDistance} m</span>
              </div>
              <div className="space-y-2">
                <label>Densidad de Vegetación</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.vegetationDensity}
                  onChange={(e) => handleSettingChange('vegetationDensity', Number(e.target.value))}
                  className="w-full"
                />
                <span>{settings.vegetationDensity}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GraphicsSettings;
