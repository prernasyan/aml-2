
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function DroneShootsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-black/70"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20drone%20flying%20over%20luxury%20residential%20development%2C%20aerial%20cinematography%20equipment%2C%20stunning%20landscape%20view%20with%20modern%20buildings%2C%20clean%20sky%20background%2C%20high-end%20real%20estate%20aerial%20photography&width=1920&height=1080&seq=drone-hero&orientation=landscape')`
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <i className="ri-flight-takeoff-line text-3xl text-black"></i>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                Location AVs & Drone Shoots
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                Stunning aerial cinematography showcasing location advantages and surroundings with professional drone technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/#contact"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get Quote
                </Link>
                <Link 
                  to="/#portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Location AV
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Showcase your property's location advantages with breathtaking aerial footage and professional cinematography
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-camera-3-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">4K Aerial Footage</h3>
                <p className="text-gray-600">Ultra-high definition aerial cinematography capturing stunning views and location context.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-map-2-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Location Showcase</h3>
                <p className="text-gray-600">Highlight proximity to amenities, transportation, and key landmarks that add property value.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-sun-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Golden Hour Shoots</h3>
                <p className="text-gray-600">Optimal timing for cinematic lighting that creates warm, inviting aerial perspectives.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-movie-2-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Cinematic Movements</h3>
                <p className="text-gray-600">Professional camera movements including reveals, orbits, and dynamic tracking shots.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Licensed Operations</h3>
                <p className="text-gray-600">Fully licensed drone pilots with comprehensive insurance and regulatory compliance.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-edit-2-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Professional Editing</h3>
                <p className="text-gray-600">Expert post-production with color grading, stabilization, and cinematic finishing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Aerial Photography Portfolio
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Stunning aerial footage showcasing properties and locations from breathtaking perspectives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20luxury%20beachfront%20resort%20development%2C%20stunning%20coastline%20and%20ocean%20views%2C%20professional%20drone%20photography%2C%20tropical%20paradise%20setting&width=400&height=300&seq=drone-portfolio-1&orientation=landscape"
                  alt="Beachfront Resort Aerial"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Ocean View Resort</h3>
                  <p className="text-gray-600 mb-4">Spectacular aerial footage showcasing beachfront location and resort amenities.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span>Coastal Paradise</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20modern%20city%20skyline%20with%20high-rise%20buildings%2C%20urban%20development%20from%20above%2C%20professional%20drone%20cinematography%2C%20metropolitan%20landscape&width=400&height=300&seq=drone-portfolio-2&orientation=landscape"
                  alt="City Skyline Aerial"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Downtown Towers</h3>
                  <p className="text-gray-600 mb-4">Dynamic aerial shots highlighting urban connectivity and city center location.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span>Metropolitan Core</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20golf%20course%20residential%20community%2C%20luxury%20homes%20around%20golf%20course%2C%20green%20landscape%20and%20water%20features%2C%20premium%20lifestyle%20development&width=400&height=300&seq=drone-portfolio-3&orientation=landscape"
                  alt="Golf Course Community"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Golf Course Estates</h3>
                  <p className="text-gray-600 mb-4">Aerial showcase of luxury residential community with championship golf course.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span>Premium Greens</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20mountain%20resort%20development%2C%20ski%20slopes%20and%20alpine%20landscape%2C%20luxury%20mountain%20properties%2C%20scenic%20mountain%20setting&width=400&height=300&seq=drone-portfolio-4&orientation=landscape"
                  alt="Mountain Resort Aerial"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Alpine Resort</h3>
                  <p className="text-gray-600 mb-4">Breathtaking mountain views showcasing ski-in/ski-out luxury development.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span>Mountain Peak</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20marina%20and%20waterfront%20development%2C%20luxury%20yachts%20and%20boats%2C%20waterfront%20properties%2C%20coastal%20lifestyle%20community&width=400&height=300&seq=drone-portfolio-5&orientation=landscape"
                  alt="Marina Development"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Waterfront Marina</h3>
                  <p className="text-gray-600 mb-4">Stunning aerial footage of luxury marina development with yacht access.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span>Harbor District</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20suburban%20residential%20development%2C%20planned%20community%20with%20parks%20and%20amenities%2C%20family-friendly%20neighborhood%20from%20above&width=400&height=300&seq=drone-portfolio-6&orientation=landscape"
                  alt="Suburban Community"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Family Community</h3>
                  <p className="text-gray-600 mb-4">Comprehensive aerial view of master-planned family community with amenities.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span>Suburban Haven</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/#portfolio"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Aerial Video Services
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-building-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Property Overview Videos</h3>
                <p className="text-gray-600 mb-6">Comprehensive aerial tours showcasing the entire property, surrounding area, and key features from unique perspectives.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>360-degree property reveals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Neighborhood context shots</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Amenity proximity highlights</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-road-map-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Location Advantage Videos</h3>
                <p className="text-gray-600 mb-6">Strategic aerial footage highlighting transportation links, commercial centers, schools, and lifestyle amenities.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Transportation connectivity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Commercial district proximity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Recreational facility access</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-landscape-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Lifestyle & Environment</h3>
                <p className="text-gray-600 mb-6">Showcase the lifestyle and environmental benefits of the location with beautiful aerial cinematography.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Natural landscape features</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Parks and green spaces</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Waterfront or scenic views</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-time-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Time-Lapse Documentation</h3>
                <p className="text-gray-600 mb-6">Long-term aerial time-lapse projects capturing seasonal changes and area development over time.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Seasonal transformation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Development progress</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Infrastructure improvements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-yellow-400">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Get Your Drone Shoot Quote
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Ready to capture stunning aerial footage? Contact us for a custom quote.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form id="drone-shoots-inquiry-form" data-readdy-form action="https://readdy.ai/api/form/d3mirlst07omtp5lr4ig" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Shoot Type</label>
                      <select
                        name="project_type"
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select shoot type</option>
                        <option value="aerial-photography">Aerial Photography</option>
                        <option value="aerial-videography">Aerial Videography</option>
                        <option value="construction-progress">Construction Progress</option>
                        <option value="property-showcase">Property Showcase</option>
                        <option value="site-survey">Site Survey</option>
                        <option value="marketing-content">Marketing Content</option>
                        <option value="comprehensive">Comprehensive Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      placeholder="Tell us about your drone shoot requirements, location, timeline, and any specific shots you need..."
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      0/500 characters
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Get Quote</span>
                      <i className="ri-send-plane-line"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Elevate Your Perspective
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Capture breathtaking aerial footage that showcases your properties from every angle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/#contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                Book Your Shoot
              </Link>
              <Link 
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors whitespace-nowrap cursor-pointer"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
