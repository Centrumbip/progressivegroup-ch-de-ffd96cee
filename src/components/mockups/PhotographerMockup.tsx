const PhotographerMockup = () => {
  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-xl">
      {/* Browser Chrome */}
      <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600">
          www.lenslightstudio.co.uk
        </div>
      </div>

      {/* Website Content */}
      <div className="bg-black text-white">
        {/* Navigation */}
        <nav className="px-8 py-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded"></div>
              <span className="font-serif text-xl">Lens & Light Studio</span>
            </div>
            <div className="flex gap-8 text-sm">
              <span className="hover:text-yellow-500 cursor-pointer">Portfolio</span>
              <span className="hover:text-yellow-500 cursor-pointer">Services</span>
              <span className="hover:text-yellow-500 cursor-pointer">About</span>
              <span className="hover:text-yellow-500 cursor-pointer">Contact</span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <div className="px-8 py-16 text-center">
          <h1 className="text-5xl font-serif mb-4">
            Capturing London's Moments
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Professional Photography Services in the UK
          </p>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400">
            View Portfolio
          </button>
        </div>

        {/* Masonry Gallery */}
        <div className="px-8 py-12">
          <h2 className="text-3xl font-serif mb-8">Recent Work</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 h-48 rounded-lg"></div>
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-64 rounded-lg"></div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 h-64 rounded-lg"></div>
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 h-48 rounded-lg"></div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 h-56 rounded-lg"></div>
              <div className="bg-gradient-to-br from-indigo-400 to-blue-500 h-56 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="px-8 py-12 bg-gray-900">
          <h2 className="text-3xl font-serif mb-8">Services</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="border border-gray-800 p-6 rounded-lg hover:border-yellow-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Weddings</h3>
              <p className="text-gray-400 mb-4">Capturing your special day with artistic vision</p>
              <p className="text-yellow-500 font-bold">From £1,500</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg hover:border-yellow-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Corporate</h3>
              <p className="text-gray-400 mb-4">Professional headshots and events</p>
              <p className="text-yellow-500 font-bold">From £500</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg hover:border-yellow-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Portraits</h3>
              <p className="text-gray-400 mb-4">Personal and family photography</p>
              <p className="text-yellow-500 font-bold">From £250</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerMockup;