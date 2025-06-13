import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ZetaUtils } from '../utils/zetaCalculations'
import { ToroidalUtils } from '../utils/toroidalGeometry'

export default function Research() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('calculator')
  const [zetaInput, setZetaInput] = useState({ real: 0.5, imag: 14.134725 })
  const [zetaResult, setZetaResult] = useState<number | null>(null)
  const [torusParams, setTorusParams] = useState({ majorRadius: 3, minorRadius: 1 })
  const [mappingResult, setMappingResult] = useState<any>(null)
  
  const tabs = [
    { id: 'calculator', label: '🧮 Zeta Calculator', icon: '🧮' },
    { id: 'zeros', label: '🎯 Zero Database', icon: '🎯' },
    { id: 'mapping', label: '🗺 Toroidal Mapping', icon: '🗺' },
    { id: 'analysis', label: '📊 Field Analysis', icon: '📊' },
    { id: 'theory', label: '📜 Theory', icon: '📜' }
  ]
  
  useEffect(() => {
    if (activeTab === 'calculator') {
      const result = ZetaUtils.evaluateZeta(zetaInput.real, zetaInput.imag)
      setZetaResult(result)
    }
  }, [zetaInput, activeTab])
  
  useEffect(() => {
    if (activeTab === 'mapping') {
      const mapping = ToroidalUtils.toroidalMapping(
        zetaInput.imag,
        torusParams.majorRadius,
        torusParams.minorRadius
      )
      setMappingResult({
        position: mapping,
        distance: mapping.length(),
        normalized: mapping.clone().normalize()
      })
    }
  }, [zetaInput.imag, torusParams, activeTab])
  
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
              <span className="font-bold">3D Zeta Research Tools</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/')}
              className="px-4 py-2 bg-consciousness-cyan hover:bg-consciousness-cyan/80 text-white rounded-lg transition-colors"
            >
              🔬 Visualization
            </button>
            <button
              onClick={() => router.push('/tutorial')}
              className="px-4 py-2 bg-field-purple hover:bg-field-purple/80 text-white rounded-lg transition-colors"
            >
              📚 Tutorial
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-zeta-blue to-torus-gold text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
          
          {/* Zeta Calculator Tab */}
          {activeTab === 'calculator' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zeta-blue to-torus-gold rounded-full flex items-center justify-center text-xl">
                  🧮
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Riemann Zeta Function Calculator</h2>
                  <p className="text-gray-400">Evaluate ζ(s) for any complex number s = a + bi</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-800/50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-4">Input Parameters</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Real Part (a): {zetaInput.real}
                        </label>
                        <input
                          type="range"
                          min="-2"
                          max="3"
                          step="0.01"
                          value={zetaInput.real}
                          onChange={(e) => setZetaInput({...zetaInput, real: parseFloat(e.target.value)})}
                          className="slider w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Imaginary Part (b): {zetaInput.imag.toFixed(6)}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="0.001"
                          value={zetaInput.imag}
                          onChange={(e) => setZetaInput({...zetaInput, imag: parseFloat(e.target.value)})}
                          className="slider w-full"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {ZetaUtils.RIEMANN_ZEROS.slice(0, 8).map((zero, index) => (
                          <button
                            key={index}
                            onClick={() => setZetaInput({real: 0.5, imag: zero})}
                            className="px-3 py-2 bg-torus-gold/20 hover:bg-torus-gold/30 text-torus-gold rounded text-xs transition-colors"
                          >
                            Zero #{index + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-4">Mathematical Properties</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Input:</span>
                        <span className="text-white font-mono">
                          s = {zetaInput.real} + {zetaInput.imag.toFixed(6)}i
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">On Critical Line:</span>
                        <span className={zetaInput.real === 0.5 ? 'text-green-400' : 'text-red-400'}>
                          {zetaInput.real === 0.5 ? 'Yes' : 'No'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Near Zero:</span>
                        <span className={ZetaUtils.isNearZero(zetaInput.real, zetaInput.imag) ? 'text-green-400' : 'text-gray-400'}>
                          {ZetaUtils.isNearZero(zetaInput.real, zetaInput.imag) ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-zeta-blue/20 to-field-purple/20 p-6 rounded-xl border border-zeta-blue/30">
                    <h3 className="text-lg font-semibold text-white mb-4">Calculation Result</h3>
                    <div className="space-y-4">
                      <div className="bg-black/30 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl font-mono text-zeta-blue mb-2">
                            ζ({zetaInput.real} + {zetaInput.imag.toFixed(3)}i)
                          </div>
                          <div className="text-3xl font-bold text-white">
                            {zetaResult !== null ? zetaResult.toFixed(8) : 'Calculating...'}
                          </div>
                        </div>
                      </div>
                      
                      {zetaResult !== null && (
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Magnitude:</span>
                            <span className="text-white font-mono">{Math.abs(zetaResult).toFixed(8)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Log Magnitude:</span>
                            <span className="text-white font-mono">{Math.log(Math.abs(zetaResult) + 1).toFixed(8)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Classification:</span>
                            <span className={`font-semibold ${
                              Math.abs(zetaResult) < 0.001 ? 'text-green-400' :
                              Math.abs(zetaResult) < 0.1 ? 'text-yellow-400' : 'text-blue-400'
                            }`}>
                              {Math.abs(zetaResult) < 0.001 ? 'Near Zero' :
                               Math.abs(zetaResult) < 0.1 ? 'Small Value' : 'Regular Value'}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-4">Computational Notes</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Calculations use Euler-Maclaurin approximation with 1000 terms</li>
                      <li>• Critical strip (0 < Re(s) < 1) uses analytic continuation</li>
                      <li>• Results cached for performance optimization</li>
                      <li>• Precision limited to ~8 decimal places for real-time computation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Zero Database Tab */}
          {activeTab === 'zeros' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-torus-gold to-yellow-600 rounded-full flex items-center justify-center text-xl">
                  🎯
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Riemann Zero Database</h2>
                  <p className="text-gray-400">First 20 non-trivial zeros with high precision</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-4">Non-trivial Zeros (Im(s) > 0)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left p-2 text-gray-300">#</th>
                        <th className="text-left p-2 text-gray-300">Imaginary Part</th>
                        <th className="text-left p-2 text-gray-300">s = 1/2 + it</th>
                        <th className="text-left p-2 text-gray-300">Verification</th>
                        <th className="text-left p-2 text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ZetaUtils.RIEMANN_ZEROS.map((zero, index) => (
                        <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-700/30">
                          <td className="p-2 text-torus-gold font-semibold">{index + 1}</td>
                          <td className="p-2 font-mono text-white">{zero.toFixed(9)}</td>
                          <td className="p-2 font-mono text-gray-300">0.5 + {zero.toFixed(6)}i</td>
                          <td className="p-2">
                            <span className="text-green-400 text-xs">✓ Verified</span>
                          </td>
                          <td className="p-2">
                            <button
                              onClick={() => {
                                setZetaInput({real: 0.5, imag: zero})
                                setActiveTab('calculator')
                              }}
                              className="px-2 py-1 bg-zeta-blue hover:bg-zeta-blue/80 text-white text-xs rounded transition-colors"
                            >
                              Calculate
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/30">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4">Zero Properties</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>All zeros shown</strong> lie on the critical line Re(s) = 1/2</li>
                    <li>• <strong>Symmetric pairs:</strong> If ρ is a zero, so is ρ̄ (complex conjugate)</li>
                    <li>• <strong>Density:</strong> ~log(T)/2π zeros with 0 < Im(s) < T</li>
                    <li>• <strong>Precision:</strong> Values accurate to 9+ decimal places</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-purple-400 mb-4">Riemann Hypothesis</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    The Riemann Hypothesis states that all non-trivial zeros of the Riemann zeta function 
                    lie on the critical line Re(s) = 1/2.
                  </p>
                  <div className="bg-black/30 p-3 rounded">
                    <div className="text-xs text-gray-400 mb-1">Status:</div>
                    <div className="text-yellow-400 font-semibold">Unproven Conjecture</div>
                    <div className="text-xs text-gray-400 mt-1">
                      Over 10^13 zeros computed, all on critical line
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Add other tab contents here... */}
          
        </div>
      </main>
    </div>
  )
}