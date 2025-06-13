import { useState } from 'react'

interface ControlPanelProps {
  visualizationMode: '2d' | '3d' | 'transition'
  setVisualizationMode: (mode: '2d' | '3d' | 'transition') => void
  torusParameters: {
    majorRadius: number
    minorRadius: number
    tubularSegments: number
    radialSegments: number
  }
  setTorusParameters: (params: any) => void
  animationSpeed: number
  setAnimationSpeed: (speed: number) => void
  showZeros: boolean
  setShowZeros: (show: boolean) => void
  showField: boolean
  setShowField: (show: boolean) => void
}

export default function ControlPanel({
  visualizationMode,
  setVisualizationMode,
  torusParameters,
  setTorusParameters,
  animationSpeed,
  setAnimationSpeed,
  showZeros,
  setShowZeros,
  showField,
  setShowField
}: ControlPanelProps) {
  const [activeSection, setActiveSection] = useState<string>('visualization')

  const sections = [
    { id: 'visualization', label: '🎭 Visualization', icon: '🎭' },
    { id: 'geometry', label: '📐 Geometry', icon: '📐' },
    { id: 'animation', label: '⚡ Animation', icon: '⚡' },
    { id: 'mathematics', label: '🧮 Mathematics', icon: '🧮' }
  ]

  return (
    <div className="h-full flex flex-col bg-black/30 backdrop-blur-md">
      {/* Section Tabs */}
      <div className="flex border-b border-white/10">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex-1 p-3 text-sm font-medium transition-colors ${
              activeSection === section.id
                ? 'bg-zeta-blue text-white border-b-2 border-torus-gold'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="hidden sm:inline">{section.icon} </span>
            <span className="text-xs sm:text-sm">{section.label.split(' ')[1] || section.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Visualization Controls */}
        {activeSection === 'visualization' && (
          <div className="p-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Display Mode</h3>
              <div className="space-y-2">
                {[
                  { key: '2d', label: '2D Complex Plane', desc: 'Traditional visualization' },
                  { key: '3d', label: '3D Toroidal Structure', desc: 'Revolutionary folding' },
                  { key: 'transition', label: 'Transformation Animation', desc: 'Folding process' }
                ].map(({ key, label, desc }) => (
                  <button
                    key={key}
                    onClick={() => setVisualizationMode(key as any)}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      visualizationMode === key
                        ? 'bg-zeta-blue text-white border-2 border-torus-gold'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                    }`}
                  >
                    <div className="font-medium">{label}</div>
                    <div className="text-xs opacity-75">{desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Visual Elements</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-gray-300">Show Riemann Zeros</span>
                  <input
                    type="checkbox"
                    checked={showZeros}
                    onChange={(e) => setShowZeros(e.target.checked)}
                    className="w-4 h-4 text-torus-gold rounded focus:ring-torus-gold"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-gray-300">Electromagnetic Field</span>
                  <input
                    type="checkbox"
                    checked={showField}
                    onChange={(e) => setShowField(e.target.checked)}
                    className="w-4 h-4 text-field-purple rounded focus:ring-field-purple"
                  />
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Geometry Controls */}
        {activeSection === 'geometry' && (
          <div className="p-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Torus Parameters</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Major Radius: {torusParameters.majorRadius.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    step="0.1"
                    value={torusParameters.majorRadius}
                    onChange={(e) => setTorusParameters({
                      ...torusParameters,
                      majorRadius: parseFloat(e.target.value)
                    })}
                    className="slider"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Minor Radius: {torusParameters.minorRadius.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="0.2"
                    max="3"
                    step="0.1"
                    value={torusParameters.minorRadius}
                    onChange={(e) => setTorusParameters({
                      ...torusParameters,
                      minorRadius: parseFloat(e.target.value)
                    })}
                    className="slider"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Segments: {torusParameters.tubularSegments}
                  </label>
                  <input
                    type="range"
                    min="16"
                    max="200"
                    step="4"
                    value={torusParameters.tubularSegments}
                    onChange={(e) => setTorusParameters({
                      ...torusParameters,
                      tubularSegments: parseInt(e.target.value)
                    })}
                    className="slider"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-torus-gold mb-2">Geometric Properties</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <div>Surface Area: {(4 * Math.PI**2 * torusParameters.majorRadius * torusParameters.minorRadius).toFixed(2)}</div>
                <div>Volume: {(2 * Math.PI**2 * torusParameters.majorRadius * torusParameters.minorRadius**2).toFixed(2)}</div>
                <div>Aspect Ratio: {(torusParameters.majorRadius / torusParameters.minorRadius).toFixed(2)}</div>
              </div>
            </div>
          </div>
        )}

        {/* Animation Controls */}
        {activeSection === 'animation' && (
          <div className="p-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Animation Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Speed: {animationSpeed.toFixed(1)}x
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="3"
                    step="0.1"
                    value={animationSpeed}
                    onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
                    className="slider"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-field-purple mb-2">Animation Info</h4>
              <div className="text-xs text-gray-400">
                {visualizationMode === 'transition' && (
                  <p>Transformation shows the critical line Re(s) = 1/2 folding onto the torus major circumference.</p>
                )}
                {visualizationMode === '3d' && (
                  <p>3D rotation reveals the toroidal structure of the Zeta function zeros.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mathematics Info */}
        {activeSection === 'mathematics' && (
          <div className="p-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Mathematical Framework</h3>
              
              <div className="space-y-4">
                <div className="equation">
                  <div className="text-sm font-mono text-zeta-blue mb-2">Riemann Zeta Function:</div>
                  <div className="text-sm font-mono">ζ(s) = Σ(n=1 to ∞) 1/n^s</div>
                </div>
                
                <div className="equation">
                  <div className="text-sm font-mono text-torus-gold mb-2">3D Toroidal Mapping:</div>
                  <div className="text-sm font-mono">ζ₃D(R,r,θ,φ) = Σ 1/n^s × T(R,r,θ,φ)</div>
                </div>
                
                <div className="equation">
                  <div className="text-sm font-mono text-field-purple mb-2">Electromagnetic Field:</div>
                  <div className="text-sm font-mono">B⃗(x⃗) = ∇ × [ζ₃D(toroidal_coords(x⃗))]</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-consciousness-cyan mb-2">First 10 Non-trivial Zeros</h4>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-mono">
                  <div>14.134725</div><div>21.022040</div>
                  <div>25.010858</div><div>30.424876</div>
                  <div>32.935062</div><div>37.586178</div>
                  <div>40.918719</div><div>43.327073</div>
                  <div>48.005151</div><div>49.773832</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-zeta-blue/20 to-torus-gold/20 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-white mb-2">🌟 Revolutionary Insight</h4>
              <p className="text-xs text-gray-300">
                This visualization reveals the missing 3D geometric structure of the Riemann Zeta Function, 
                transforming abstract mathematical zeros into physical electromagnetic field nodes on a toroidal surface.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}