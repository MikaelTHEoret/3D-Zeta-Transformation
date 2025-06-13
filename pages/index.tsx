import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import ControlPanel from '../components/ControlPanel'
import EducationalOverlay from '../components/EducationalOverlay'
import LoadingSpinner from '../components/LoadingSpinner'

// Dynamic import to avoid SSR issues with Three.js
const ZetaVisualization3D = dynamic(() => import('../components/ZetaVisualization3D'), {
  ssr: false,
  loading: () => <LoadingSpinner />
})

export default function Home() {
  const [showEducation, setShowEducation] = useState(false)
  const [visualizationMode, setVisualizationMode] = useState<'2d' | '3d' | 'transition'>('2d')
  const [torusParameters, setTorusParameters] = useState({
    majorRadius: 3,
    minorRadius: 1,
    tubularSegments: 100,
    radialSegments: 50
  })
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [showZeros, setShowZeros] = useState(true)
  const [showField, setShowField] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">
              🌀 3D Zeta Function Transformation
            </h1>
            <span className="text-sm text-gray-300 hidden md:block">
              First Interactive Visualization of Mathematical Consciousness
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowEducation(!showEducation)}
              className="px-4 py-2 bg-consciousness-cyan hover:bg-consciousness-cyan/80 text-white rounded-lg transition-colors"
            >
              📚 Learn
            </button>
            <a
              href="https://github.com/MikaelTHEoret/3D-Zeta-Transformation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              📋 GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 flex flex-col lg:flex-row h-screen">
        {/* Visualization Area */}
        <div className="flex-1 relative">
          <Suspense fallback={<LoadingSpinner />}>
            <ZetaVisualization3D
              mode={visualizationMode}
              torusParameters={torusParameters}
              animationSpeed={animationSpeed}
              showZeros={showZeros}
              showField={showField}
            />
          </Suspense>
          
          {/* Mode Selector */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md rounded-lg p-4">
            <div className="flex space-x-2">
              {[{ key: '2d', label: '2D Complex Plane' }, { key: '3d', label: '3D Torus' }, { key: 'transition', label: 'Transformation' }].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setVisualizationMode(key as any)}
                  className={`px-3 py-2 rounded text-sm transition-colors ${
                    visualizationMode === key
                      ? 'bg-zeta-blue text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Status Display */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md rounded-lg p-4 text-white">
            <div className="text-sm space-y-1">
              <div>Mode: <span className="text-torus-gold font-semibold">{visualizationMode.toUpperCase()}</span></div>
              <div>Zeros Visible: <span className={showZeros ? 'text-green-400' : 'text-red-400'}>{showZeros ? 'Yes' : 'No'}</span></div>
              <div>Field: <span className={showField ? 'text-purple-400' : 'text-gray-400'}>{showField ? 'Active' : 'Inactive'}</span></div>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="lg:w-80 bg-black/30 backdrop-blur-md border-l border-white/10">
          <ControlPanel
            visualizationMode={visualizationMode}
            setVisualizationMode={setVisualizationMode}
            torusParameters={torusParameters}
            setTorusParameters={setTorusParameters}
            animationSpeed={animationSpeed}
            setAnimationSpeed={setAnimationSpeed}
            showZeros={showZeros}
            setShowZeros={setShowZeros}
            showField={showField}
            setShowField={setShowField}
          />
        </div>
      </main>

      {/* Educational Overlay */}
      {showEducation && (
        <EducationalOverlay onClose={() => setShowEducation(false)} />
      )}

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-md border-t border-white/10 p-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-300">
          <div>🧠 Mathematical Consciousness Visualization © 2025 Mikael Theoret</div>
          <div className="hidden md:block">⧭ ✶ ⟐ ⚡ ♾ 📜</div>
        </div>
      </footer>
    </div>
  )
}