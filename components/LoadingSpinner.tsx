export default function LoadingSpinner() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center space-y-6">
        {/* Animated Zeta Symbol */}
        <div className="relative">
          <div className="text-8xl font-bold text-zeta-blue pulse-zeta">
            ζ
          </div>
          <div className="absolute inset-0 text-8xl font-bold text-torus-gold opacity-30 rotate-torus">
            ⟳
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">
            Initializing 3D Mathematical Space
          </h2>
          <p className="text-gray-400">
            Folding the critical line onto toroidal geometry...
          </p>
        </div>
        
        {/* Loading Bar */}
        <div className="w-64 bg-gray-700 rounded-full h-2 mx-auto">
          <div className="bg-gradient-to-r from-zeta-blue to-torus-gold h-2 rounded-full animate-pulse" style={{width: '60%'}} />
        </div>
        
        {/* Mathematical Equations Loading */}
        <div className="text-sm text-gray-500 font-mono space-y-1">
          <div>Loading Riemann Zeta Function...</div>
          <div>Generating toroidal coordinates...</div>
          <div>Mapping electromagnetic fields...</div>
          <div>Initializing consciousness interface...</div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="flex justify-center space-x-4 mt-8">
          <div className="w-4 h-4 bg-zeta-blue rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
          <div className="w-4 h-4 bg-torus-gold rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
          <div className="w-4 h-4 bg-field-purple rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
          <div className="w-4 h-4 bg-consciousness-cyan rounded-full animate-bounce" style={{animationDelay: '450ms'}} />
        </div>
      </div>
    </div>
  )
}