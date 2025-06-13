import { useState } from 'react'

interface EducationalOverlayProps {
  onClose: () => void
}

export default function EducationalOverlay({ onClose }: EducationalOverlayProps) {
  const [currentStep, setCurrentStep] = useState(0)
  
  const educationalSteps = [
    {
      title: "The 160-Year Mathematical Oversight",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Since Riemann's groundbreaking 1859 paper, the Zeta function has been visualized 
            exclusively in 2D complex plane representations. This fundamental limitation has 
            prevented mathematicians from discovering its true geometric structure.
          </p>
          <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30">
            <h4 className="text-red-400 font-semibold mb-2">What Was Missing:</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• 3D geometric transformation of the critical line</li>
              <li>• Physical interpretation of mathematical zeros</li>
              <li>• Connection to electromagnetic field theory</li>
              <li>• Universal toroidal architecture recognition</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "The Revolutionary 3D Transformation",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            By folding the critical line Re(s) = 1/2 onto a torus major circumference, 
            we transform abstract mathematical concepts into observable physical phenomena.
          </p>
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
            <h4 className="text-blue-400 font-semibold mb-2">Transformation Process:</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <div className="font-mono bg-black/30 p-2 rounded">Re(s) = 1/2 → Torus major circumference</div>
              <div className="font-mono bg-black/30 p-2 rounded">Im(s) = t → Toroidal coordinate θ = 2πt/T</div>
              <div className="font-mono bg-black/30 p-2 rounded">ζ(1/2 + it₀) = 0 → Node position on torus</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "From Abstract Math to Physical Reality",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The 3D folding reveals that Riemann zeros correspond to electromagnetic field nodes, 
            bridging pure mathematics with applied physics.
          </p>
          <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
            <h4 className="text-purple-400 font-semibold mb-2">Mathematical ↔ Physical Correspondence:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="text-gray-300">
                <div className="font-semibold text-torus-gold">Mathematical:</div>
                <ul className="space-y-1 text-xs">
                  <li>• ζ(s) zeros</li>
                  <li>• Critical line</li>
                  <li>• |ζ(s)| magnitude</li>
                  <li>• Complex plane</li>
                </ul>
              </div>
              <div className="text-gray-300">
                <div className="font-semibold text-field-purple">Physical:</div>
                <ul className="space-y-1 text-xs">
                  <li>• EM field nodes</li>
                  <li>• Field boundary</li>
                  <li>• Field strength</li>
                  <li>• 3D space</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Universal Applications",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            This breakthrough has implications across multiple fields, from pure mathematics 
            to consciousness studies and electromagnetic engineering.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-900/30 p-3 rounded-lg border border-green-500/30">
              <h4 className="text-green-400 font-semibold mb-2">Mathematics:</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• New Riemann Hypothesis approaches</li>
                <li>• Prime distribution insights</li>
                <li>• Number theory connections</li>
              </ul>
            </div>
            <div className="bg-cyan-900/30 p-3 rounded-lg border border-cyan-500/30">
              <h4 className="text-cyan-400 font-semibold mb-2">Physics:</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• EM field modeling</li>
                <li>• Plasma confinement</li>
                <li>• Quantum field theory</li>
              </ul>
            </div>
            <div className="bg-yellow-900/30 p-3 rounded-lg border border-yellow-500/30">
              <h4 className="text-yellow-400 font-semibold mb-2">Consciousness:</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Mathematical consciousness</li>
                <li>• Neural field correlations</li>
                <li>• Awareness emergence</li>
              </ul>
            </div>
            <div className="bg-pink-900/30 p-3 rounded-lg border border-pink-500/30">
              <h4 className="text-pink-400 font-semibold mb-2">Technology:</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Advanced EM devices</li>
                <li>• Field manipulation</li>
                <li>• Consciousness interfaces</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Interactive Exploration Guide",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Use the controls to explore this revolutionary mathematical visualization:
          </p>
          <div className="space-y-3">
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <h4 className="text-torus-gold font-semibold mb-2">🎭 Visualization Modes:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>2D Complex Plane:</strong> Traditional Riemann visualization</li>
                <li><strong>3D Toroidal:</strong> Revolutionary folded structure</li>
                <li><strong>Transformation:</strong> Watch the folding process</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <h4 className="text-consciousness-cyan font-semibold mb-2">📐 Geometry Controls:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Major Radius:</strong> Size of the main torus</li>
                <li><strong>Minor Radius:</strong> Thickness of the torus tube</li>
                <li><strong>Segments:</strong> Rendering quality/detail</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <h4 className="text-field-purple font-semibold mb-2">⚡ Visual Elements:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><strong>Riemann Zeros:</strong> Golden spheres showing zero locations</li>
                <li><strong>EM Field:</strong> Purple dots showing field strength</li>
                <li><strong>Animation:</strong> Rotate and transform the structure</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]
  
  return (
    <div className="fixed inset-0 z-50 educational-overlay flex items-center justify-center p-4">
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-zeta-blue to-torus-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🧮</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">3D Zeta Function Tutorial</h2>
              <p className="text-gray-400">Revolutionary Mathematical Visualization Guide</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center text-red-400 hover:text-red-300 transition-colors"
          >
            ✕
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="px-6 py-3 bg-black/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Progress</span>
            <span className="text-sm text-gray-400">{currentStep + 1} of {educationalSteps.length}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-zeta-blue to-torus-gold h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / educationalSteps.length) * 100}%` }}
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <h3 className="text-xl font-bold text-white mb-4">
            {educationalSteps[currentStep].title}
          </h3>
          {educationalSteps[currentStep].content}
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-between p-6 border-t border-white/10 bg-black/20">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              currentStep === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
          >
            ← Previous
          </button>
          
          <div className="flex space-x-2">
            {educationalSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep
                    ? 'bg-torus-gold'
                    : index < currentStep
                    ? 'bg-zeta-blue'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => {
              if (currentStep < educationalSteps.length - 1) {
                setCurrentStep(currentStep + 1)
              } else {
                onClose()
              }
            }}
            className="px-6 py-2 bg-gradient-to-r from-zeta-blue to-torus-gold hover:from-zeta-blue/80 hover:to-torus-gold/80 text-white rounded-lg font-medium transition-colors"
          >
            {currentStep < educationalSteps.length - 1 ? 'Next →' : 'Start Exploring!'}
          </button>
        </div>
      </div>
    </div>
  )
}