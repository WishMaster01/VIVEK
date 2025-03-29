import React from 'react';

const MediChainFigmaTemplate = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-green-600 p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">MediChain AI</h1>
        <p className="text-sm opacity-90">A comprehensive presentation template for anti-counterfeit medicine verification</p>
      </div>
      
      {/* Slideshow Preview */}
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Slide Preview</h2>
        
        {/* Slide Navigator */}
        <div className="flex flex-wrap gap-4 mb-6">
          {['Cover', 'Problem', 'Solution', 'Tech Stack', 'Demo', 'Competitive Edge', 'Impact', 'CTA'].map((slide, index) => (
            <div key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {slide}
            </div>
          ))}
        </div>
        
        {/* Featured Slide - Cover */}
        <div className="relative rounded-lg overflow-hidden shadow-md mb-8 bg-white">
          <div className="w-full h-64 bg-gray-900 flex">
            {/* Left side - QR scan animation placeholder */}
            <div className="w-1/2 flex items-center justify-center bg-gray-800 relative">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center relative">
                <div className="absolute inset-0 border-2 border-green-500 rounded-lg animate-pulse"></div>
                <div className="grid grid-cols-4 grid-rows-4 gap-1 w-24 h-24">
                  {Array(16).fill().map((_, i) => (
                    <div key={i} className="bg-gray-800"></div>
                  ))}
                </div>
                <div className="absolute -bottom-10 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Scan Me
                </div>
              </div>
              {/* UV Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Right side - Valid checkmark */}
            <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-green-800 to-green-600 p-6">
              <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">VALID</h3>
              <p className="text-green-200 text-sm">Original Product Verified</p>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="p-4 text-center border-t border-gray-200">
            <p className="text-gray-600 italic mb-1">"जब दवा असली हो, तो जिंदगी भी असली होती है"</p>
            <p className="text-sm text-gray-500">When medicine is genuine, life is genuine too</p>
          </div>
        </div>
        
        {/* Problem Statement Preview */}
        <div className="rounded-lg overflow-hidden shadow-md mb-8 bg-gray-900 text-white p-6">
          <h3 className="font-bold text-xl mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Problem Statement
          </h3>
          
          <div className="flex items-center">
            {/* India Map Placeholder */}
            <div className="w-1/2 relative h-48 bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute top-1/4 right-1/3 w-12 h-12 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
            </div>
            
            <div className="w-1/2 pl-6">
              <p className="text-2xl font-bold mb-4 text-red-400">25% medicines in India are counterfeit</p>
              <div className="flex items-center text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>1 life lost every 5 minutes</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech Stack Preview */}
        <div className="rounded-lg overflow-hidden shadow-md mb-8 bg-white p-6">
          <h3 className="font-bold text-xl mb-6 text-gray-800">Tech Stack</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'AI (YOLOv8)', color: 'bg-blue-100 text-blue-800' },
              { name: 'Blockchain (Hedera)', color: 'bg-purple-100 text-purple-800' },
              { name: 'Storage (IPFS)', color: 'bg-yellow-100 text-yellow-800' },
              { name: 'UI (Flutter/React)', color: 'bg-green-100 text-green-800' }
            ].map((tech, index) => (
              <div key={index} className={`${tech.color} rounded-lg p-4 flex flex-col items-center justify-center text-center h-24`}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm">
                  <div className="w-6 h-6 rounded-sm bg-current opacity-70"></div>
                </div>
                <p className="text-sm font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
          
          {/* Connector Lines */}
          <div className="relative h-4 my-2">
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-300"></div>
          </div>
        </div>
        
        {/* Competitive Edge Preview */}
        <div className="rounded-lg overflow-hidden shadow-md bg-white">
          <div className="p-6">
            <h3 className="font-bold text-xl mb-4 text-gray-800">Competitive Edge</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-green-50">MediChain</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Competitor X</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Competitor Y</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Offline SMS</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 bg-green-50">
                      <span className="text-green-600 text-xl">✓</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="text-red-500 text-xl">✗</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="text-red-500 text-xl">✗</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">NFT + AI Combo</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 bg-green-50">
                      <span className="text-green-600 text-xl">✓</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="text-red-500 text-xl">✗</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="text-red-500 text-xl">✗</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default MediChainFigmaTemplate;