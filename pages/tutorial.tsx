import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Tutorial() {
  const router = useRouter()
  const [currentSection, setCurrentSection] = useState(0)
  
  const tutorialSections = [
    {
      title: "The Mathematical Revolution",
      icon: "🌟",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-500/30">
            <h3 className="text-xl font-bold text-red-400 mb-4">⚠️ 160 Years of Mathematical Oversight</h3>
            <p className="text-gray-300 mb-4">
              Since Bernhard Riemann's groundbreaking 1859 paper "On the Number of Primes Less Than a Given Magnitude," 
              every mathematical treatment of the Riemann Zeta Function has been confined to flat 2D complex plane representations.
            </p>
            <div className="bg-black/30 p-4 rounded-lg">
              <h4 className="text-orange-400 font-semibold mb-2">What Mathematics Missed:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 3D geometric transformation of the critical line Re(s) = 1/2</li>
                <li>• Physical interpretation of abstract mathematical zeros</li>
                <li>• Connection between number theory and electromagnetic fields</li>
                <li>• Universal toroidal architecture underlying natural phenomena</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-bold text-blue-400 mb-4">🚀 The Breakthrough Discovery</h3>
            <p className="text-gray-300 mb-4">
              By performing the "missing" 3D geometric transformation—folding the critical line onto a torus major circumference—we reveal 
              the true electromagnetic field structure hidden within the Zeta function for over a century and a half.
            </p>
            <div className="font-mono bg-black/30 p-4 rounded-lg text-center">
              <div className="text-zeta-blue text-lg">Traditional: ζ(s) in 2D complex plane</div>
              <div className="text-torus-gold text-xl my-2">↓ REVOLUTIONARY FOLDING ↓</div>
              <div className="text-field-purple text-lg">New: ζ₃D(R,r,θ,φ) on toroidal surface</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The 3D Transformation Process",
      icon: "🔄",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-4">Step-by-Step Geometric Folding</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-zeta-blue mb-3">Step 1: Critical Line Mapping</h4>
              <div className="font-mono bg-black/50 p-3 rounded text-sm">
                Re(s) = 1/2 → Torus major circumference
              </div>
              <p className="text-gray-300 text-sm mt-3">
                The critical line, traditionally a vertical line in the complex plane, becomes 
                the major circumference of a 3D torus.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-torus-gold mb-3">Step 2: Imaginary Axis Folding</h4>
              <div className="font-mono bg-black/50 p-3 rounded text-sm">
                Im(s) = t → θ = 2πt/T
              </div>
              <p className="text-gray-300 text-sm mt-3">
                The imaginary axis wraps around the torus, creating toroidal angular coordinates.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-field-purple mb-3">Step 3: Zero Distribution</h4>
              <div className="font-mono bg-black/50 p-3 rounded text-sm">
                ζ(1/2 + it₀) = 0 → Node(R,r,θ₀)
              </div>
              <p className="text-gray-300 text-sm mt-3">
                Riemann zeros become specific nodes distributed on the toroidal surface.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-consciousness-cyan mb-3">Step 4: Field Mapping</h4>
              <div className="font-mono bg-black/50 p-3 rounded text-sm">
                |ζ(s)| → B⃗ field strength
              </div>
              <p className="text-gray-300 text-sm mt-3">
                Function magnitude becomes electromagnetic field strength in 3D space.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30">
            <h4 className="text-lg font-bold text-purple-400 mb-3">🔬 Mathematical Framework</h4>
            <div className="space-y-3">
              <div className="font-mono bg-black/50 p-3 rounded">
                <div className="text-zeta-blue">3D Toroidal Zeta Function:</div>
                <div className="text-white">ζ₃D(R, r, θ, φ) = Σ(n=1→∞) 1/n^s × T(R, r, θ, φ)</div>
              </div>
              <div className="font-mono bg-black/50 p-3 rounded">
                <div className="text-field-purple">Electromagnetic Derivation:</div>
                <div className="text-white">B⃗(x⃗) = ∇ × A⃗(x⃗) = ∇ × [ζ₃D(toroidal_coords(x⃗))]</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "From Abstract to Physical",
      icon: "⚡",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-4">Mathematical Consciousness → Physical Reality</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-5 rounded-xl border border-yellow-500/30">
                <h4 className="text-lg font-bold text-yellow-400 mb-3">🧮 Abstract Mathematics</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong className="text-zeta-blue">ζ(s) zeros:</strong> Abstract mathematical points</li>
                  <li><strong className="text-zeta-blue">Critical Line:</strong> Boundary condition Re(s) = 1/2</li>
                  <li><strong className="text-zeta-blue">|ζ(s)| magnitude:</strong> Function amplitude</li>
                  <li><strong className="text-zeta-blue">Complex plane:</strong> Mathematical parameter space</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-5 rounded-xl border border-purple-500/30">
                <h4 className="text-lg font-bold text-purple-400 mb-3">⚛️ Physical Reality</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong className="text-field-purple">EM field nodes:</strong> Physical electromagnetic nodes</li>
                  <li><strong className="text-field-purple">Field boundary:</strong> Electromagnetic field containment</li>
                  <li><strong className="text-field-purple">Field strength:</strong> Magnetic flux density</li>
                  <li><strong className="text-field-purple">3D space:</strong> Observable physical reality</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/30">
              <h4 className="text-lg font-bold text-cyan-400 mb-4">🌀 Universal Applications</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-green-400 mb-2">🔬 Physics & Engineering</h5>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Electromagnetic field modeling and prediction</li>
                    <li>• Plasma confinement optimization (Tokamak design)</li>
                    <li>• Quantum field fluctuation analysis</li>
                    <li>• Advanced antenna and waveguide design</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-blue-400 mb-2">🧮 Mathematics</h5>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• New approaches to the Riemann Hypothesis</li>
                    <li>• Prime number distribution insights</li>
                    <li>• Number theory and physics unification</li>
                    <li>• Computational geometry breakthroughs</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-purple-400 mb-2">🧠 Consciousness Studies</h5>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Mathematical consciousness interfaces</li>
                    <li>• Neural field correlation patterns</li>
                    <li>• Awareness emergence mechanisms</li>
                    <li>• Brain-computer interface optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Interactive Exploration",
      icon: "📱",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-4">How to Use This Revolutionary Tool</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-torus-gold/20 to-yellow-900/30 p-6 rounded-xl border border-torus-gold/30">
              <h4 className="text-lg font-bold text-torus-gold mb-4">🎭 Visualization Modes</h4>
              <div className="space-y-3">
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">2D Complex Plane</h5>
                  <p className="text-xs text-gray-300">Traditional Riemann visualization showing the critical line and zeros as taught in mathematics for 160+ years.</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">3D Toroidal Structure</h5>
                  <p className="text-xs text-gray-300">Revolutionary folded structure revealing the true electromagnetic field geometry of the Zeta function.</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">Transformation Animation</h5>
                  <p className="text-xs text-gray-300">Watch the folding process in real-time as the 2D representation transforms into 3D reality.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-consciousness-cyan/20 to-blue-900/30 p-6 rounded-xl border border-consciousness-cyan/30">
              <h4 className="text-lg font-bold text-consciousness-cyan mb-4">📐 Geometry Controls</h4>
              <div className="space-y-3">
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">Major Radius</h5>
                  <p className="text-xs text-gray-300">Controls the size of the main torus - represents the critical line circumference scale.</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">Minor Radius</h5>
                  <p className="text-xs text-gray-300">Controls the thickness of the torus tube - affects field strength visualization resolution.</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">Segments</h5>
                  <p className="text-xs text-gray-300">Rendering quality and detail level - higher values show more precise geometric structure.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-field-purple/20 to-purple-900/30 p-6 rounded-xl border border-field-purple/30">
              <h4 className="text-lg font-bold text-field-purple mb-4">⚡ Visual Elements</h4>
              <div className="space-y-3">
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">Riemann Zeros</h5>
                  <p className="text-xs text-gray-300">Golden spheres showing the precise locations of the first 10 non-trivial zeros on the toroidal surface.</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">Electromagnetic Field</h5>
                  <p className="text-xs text-gray-300">Purple dots representing field strength distribution across the 3D structure.</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">Animation Speed</h5>
                  <p className="text-xs text-gray-300">Control rotation speed and transformation timing for optimal exploration.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
              <h4 className="text-lg font-bold text-green-400 mb-4">🔍 Research Features</h4>
              <div className="space-y-3">
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">Mathematical Framework</h5>
                  <p className="text-xs text-gray-300">Access complete equations and theoretical foundation in the Mathematics tab.</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">Zero Database</h5>
                  <p className="text-xs text-gray-300">Explore the first 20 Riemann zeros with high-precision values and toroidal mappings.</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <h5 className="font-semibold text-white mb-1">Interactive Camera</h5>
                  <p className="text-xs text-gray-300">Full 3D navigation with mouse/touch controls - zoom, rotate, and pan to explore every angle.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30">
            <h4 className="text-lg font-bold text-purple-400 mb-3">🎆 Pro Tips for Exploration</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Start with 2D mode</strong> to understand traditional visualization</li>
                <li>• <strong>Use Transformation mode</strong> to see the folding process</li>
                <li>• <strong>Enable both zeros and field</strong> in 3D mode for complete picture</li>
                <li>• <strong>Adjust major radius</strong> to see different scales of the structure</li>
              </ul>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>Zoom in on zeros</strong> to see their precise toroidal positions</li>
                <li>• <strong>Slow down animation</strong> for detailed mathematical analysis</li>
                <li>• <strong>Read the Mathematics tab</strong> for complete theoretical framework</li>
                <li>• <strong>Try different geometry</strong> to understand parameter effects</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Historical Significance",
      icon: "🏆",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-4">A Mathematical Breakthrough 160 Years in the Making</h3>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border border-yellow-500/30">
            <h4 className="text-xl font-bold text-yellow-400 mb-4">🌟 Why This Matters</h4>
            <p className="text-gray-300 mb-4">
              This visualization represents the first time in mathematical history that the Riemann Zeta Function 
              has been properly understood as a 3D electromagnetic field equation rather than an abstract 2D mathematical object.
            </p>
            <div className="bg-black/30 p-4 rounded-lg">
              <h5 className="text-orange-400 font-semibold mb-3">Revolutionary Implications:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• <strong>Riemann Hypothesis:</strong> New geometric approach to proof</li>
                  <li>• <strong>Prime Distribution:</strong> Physical field interpretation</li>
                  <li>• <strong>Number Theory:</strong> Connection to electromagnetic reality</li>
                  <li>• <strong>Mathematical Education:</strong> Fundamental paradigm shift</li>
                </ul>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• <strong>Physics Integration:</strong> Math-physics unification</li>
                  <li>• <strong>Engineering Applications:</strong> EM field design tools</li>
                  <li>• <strong>Consciousness Studies:</strong> Mathematical awareness models</li>
                  <li>• <strong>Technology:</strong> Quantum computing implications</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-900/30 p-5 rounded-xl border border-red-500/30">
              <h4 className="text-lg font-bold text-red-400 mb-3">📅 1859-2025</h4>
              <p className="text-sm text-gray-300 mb-3">
                <strong>166 years</strong> of exclusively 2D mathematical visualization
              </p>
              <p className="text-xs text-gray-400">
                Every mathematician, from Riemann to modern researchers, confined to flat complex plane representations.
              </p>
            </div>
            
            <div className="bg-blue-900/30 p-5 rounded-xl border border-blue-500/30">
              <h4 className="text-lg font-bold text-blue-400 mb-3">🚀 2025</h4>
              <p className="text-sm text-gray-300 mb-3">
                <strong>First 3D visualization</strong> reveals true geometric structure
              </p>
              <p className="text-xs text-gray-400">
                Revolutionary folding transformation exposes electromagnetic field architecture hidden for over a century.
              </p>
            </div>
            
            <div className="bg-green-900/30 p-5 rounded-xl border border-green-500/30">
              <h4 className="text-lg font-bold text-green-400 mb-3">🔮 Future</h4>
              <p className="text-sm text-gray-300 mb-3">
                <strong>New era</strong> of mathematical-physical integration
              </p>
              <p className="text-xs text-gray-400">
                Opens pathways for consciousness studies, advanced engineering, and fundamental physics breakthroughs.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30">
            <h4 className="text-lg font-bold text-purple-400 mb-4">🏆 Your Role in Mathematical History</h4>
            <p className="text-gray-300 mb-4">
              By exploring this visualization, you're among the first people in human history to see the Riemann Zeta Function 
              as it truly is: a 3D electromagnetic field equation governing the fundamental structure of mathematical reality.
            </p>
            <div className="bg-black/30 p-4 rounded-lg">
              <p className="text-sm text-gray-300 italic text-center">
                "The universe is not only mathematical, but mathematically conscious - and now we can see its true geometric form."
              </p>
              <p className="text-xs text-gray-400 text-center mt-2">- Mikael Theoret, 2025</p>
            </div>
          </div>
        </div>
      )
    }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 text-white hover:text-torus-gold transition-colors"
            >
              <span className="text-2xl">🌀</span>
              <span className="font-bold">3D Zeta Function</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/')}
              className="px-4 py-2 bg-consciousness-cyan hover:bg-consciousness-cyan/80 text-white rounded-lg transition-colors"
            >
              🔬 Launch Visualization
            </button>
            <button
              onClick={() => router.push('/research')}
              className="px-4 py-2 bg-field-purple hover:bg-field-purple/80 text-white rounded-lg transition-colors"
            >
              📊 Research Tools
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Section Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {tutorialSections.map((section, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                  currentSection === index
                    ? 'bg-gradient-to-r from-zeta-blue to-torus-gold text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span>{section.icon}</span>
                <span className="text-sm">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Section Content */}
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-zeta-blue to-torus-gold rounded-full flex items-center justify-center text-2xl">
              {tutorialSections[currentSection].icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{tutorialSections[currentSection].title}</h1>
              <p className="text-gray-400">Section {currentSection + 1} of {tutorialSections.length}</p>
            </div>
          </div>
          
          {tutorialSections[currentSection].content}
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
              currentSection === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
          >
            <span>←</span>
            <span>Previous</span>
          </button>
          
          <div className="flex space-x-2">
            {tutorialSections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSection
                    ? 'bg-torus-gold'
                    : index < currentSection
                    ? 'bg-zeta-blue'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => {
              if (currentSection < tutorialSections.length - 1) {
                setCurrentSection(currentSection + 1)
              } else {
                router.push('/')
              }
            }}
            className="px-6 py-3 bg-gradient-to-r from-zeta-blue to-torus-gold hover:from-zeta-blue/80 hover:to-torus-gold/80 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <span>{currentSection < tutorialSections.length - 1 ? 'Next' : 'Start Exploring!'}</span>
            <span>→</span>
          </button>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 p-4 mt-16">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="text-sm">
            🧠 Mathematical Consciousness Visualization © 2025 Mikael Theoret | 
            <span className="ml-2">⧭ ✶ ⟐ ⚡ ♾ 📜</span>
          </p>
        </div>
      </footer>
    </div>
  )
}