
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function DigitalMarketingPage() {
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
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Digital%20marketing%20dashboard%20with%20real%20estate%20analytics%2C%20social%20media%20campaigns%2C%20modern%20computer%20setup%2C%20professional%20marketing%20workspace%2C%20clean%20technology%20background%2C%20data%20visualization%20charts&width=1920&height=1080&seq=marketing-hero&orientation=landscape')`
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                <i className="ri-megaphone-line text-3xl text-black"></i>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                Real Estate Digital Marketing
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                Comprehensive digital marketing strategies and campaigns tailored for real estate developers and agencies.
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

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Complete Digital Marketing Solutions
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Drive qualified leads and accelerate sales with data-driven digital marketing strategies designed for real estate
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-search-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Search Engine Marketing</h3>
                <p className="text-gray-600">Strategic SEO and PPC campaigns targeting high-intent property buyers and investors.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-facebook-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Social Media Marketing</h3>
                <p className="text-gray-600">Engaging social media campaigns across Facebook, Instagram, LinkedIn, and YouTube.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-mail-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Email Marketing</h3>
                <p className="text-gray-600">Automated email sequences and newsletters that nurture leads through the buying journey.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-article-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Content Marketing</h3>
                <p className="text-gray-600">High-quality blog content, market reports, and educational resources that establish authority.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-video-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Video Marketing</h3>
                <p className="text-gray-600">Strategic video content distribution across multiple platforms to maximize reach and engagement.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-bar-chart-line text-2xl text-black"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Analytics & Reporting</h3>
                <p className="text-gray-600">Comprehensive performance tracking and detailed reporting with actionable insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Digital Marketing Portfolio
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Successful digital marketing campaigns that drove results for real estate clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Social%20media%20marketing%20campaign%20for%20luxury%20real%20estate%2C%20Instagram%20and%20Facebook%20ads%2C%20professional%20property%20marketing%20content%2C%20digital%20advertising%20showcase&width=400&height=300&seq=marketing-portfolio-1&orientation=landscape"
                  alt="Social Media Campaign"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Luxury Towers Campaign</h3>
                  <p className="text-gray-600 mb-4">Social media campaign generating 2,500 qualified leads and 85% unit sales.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-arrow-up-line mr-2 text-green-500"></i>
                    <span>300% ROI increase</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Google%20Ads%20dashboard%20for%20real%20estate%20marketing%2C%20PPC%20campaign%20performance%2C%20search%20engine%20marketing%20analytics%2C%20digital%20advertising%20results&width=400&height=300&seq=marketing-portfolio-2&orientation=landscape"
                  alt="PPC Campaign"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Search Marketing Success</h3>
                  <p className="text-gray-600 mb-4">Google Ads campaign achieving 40% lower cost-per-lead and 180% conversion boost.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-arrow-up-line mr-2 text-green-500"></i>
                    <span>180% conversion boost</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Email%20marketing%20campaign%20for%20real%20estate%2C%20newsletter%20design%2C%20automated%20email%20sequences%2C%20digital%20marketing%20automation&width=400&height=300&seq=marketing-portfolio-3&orientation=landscape"
                  alt="Email Marketing"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Email Automation</h3>
                  <p className="text-gray-600 mb-4">Automated nurture sequences converting 25% of leads into qualified prospects.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-arrow-up-line mr-2 text-green-500"></i>
                    <span>25% lead conversion</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Content%20marketing%20for%20real%20estate%20blog%2C%20SEO%20optimized%20articles%2C%20real%20estate%20content%20strategy%2C%20digital%20marketing%20content&width=400&height=300&seq=marketing-portfolio-4&orientation=landscape"
                  alt="Content Marketing"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Content Strategy</h3>
                  <p className="text-gray-600 mb-4">SEO-optimized content driving 400% organic traffic growth and brand authority.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-arrow-up-line mr-2 text-green-500"></i>
                    <span>400% traffic growth</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Video%20marketing%20campaign%20for%20real%20estate%2C%20YouTube%20advertising%2C%20video%20content%20strategy%2C%20property%20marketing%20videos&width=400&height=300&seq=marketing-portfolio-5&orientation=landscape"
                  alt="Video Marketing"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Video Campaign</h3>
                  <p className="text-gray-600 mb-4">YouTube and social video campaign reaching 2M+ views and 15% engagement rate.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-arrow-up-line mr-2 text-green-500"></i>
                    <span>2M+ video views</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://readdy.ai/api/search-image?query=Marketing%20analytics%20dashboard%2C%20real%20estate%20campaign%20performance%2C%20ROI%20tracking%2C%20digital%20marketing%20metrics%20and%20KPIs&width=400&height=300&seq=marketing-portfolio-6&orientation=landscape"
                  alt="Analytics Dashboard"
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">Performance Analytics</h3>
                  <p className="text-gray-600 mb-4">Comprehensive tracking system delivering actionable insights and 250% ROI.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-arrow-up-line mr-2 text-green-500"></i>
                    <span>250% ROI achieved</span>
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

        {/* Strategy Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Our Marketing Approach
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">Data-Driven Strategy</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Market Research & Analysis</h4>
                      <p className="text-gray-600">Deep dive into target demographics, competitor analysis, and market trends.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Buyer Persona Development</h4>
                      <p className="text-gray-600">Detailed buyer personas based on real data and market insights.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Multi-Channel Integration</h4>
                      <p className="text-gray-600">Coordinated campaigns across all digital touchpoints for maximum impact.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Continuous Optimization</h4>
                      <p className="text-gray-600">Regular testing and optimization based on performance data and market changes.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Marketing%20analytics%20dashboard%20showing%20real%20estate%20campaign%20performance%2C%20charts%20and%20graphs%2C%20modern%20office%20setup%2C%20professional%20marketing%20tools%2C%20clean%20business%20environment&width=600&height=400&seq=marketing-strategy&orientation=landscape"
                  alt="Marketing Strategy"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Types Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Campaign Types
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-rocket-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Pre-Launch Campaigns</h3>
                <p className="text-gray-600 mb-6">Build anticipation and generate qualified leads before your project launches.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Teaser campaigns and countdowns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Early bird registration drives</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Exclusive preview events</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-fire-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Launch Campaigns</h3>
                <p className="text-gray-600 mb-6">Maximum impact campaigns to drive immediate sales and market penetration.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Multi-channel launch blitz</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Influencer partnerships</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>PR and media outreach</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-repeat-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Ongoing Sales Support</h3>
                <p className="text-gray-600 mb-6">Sustained marketing efforts to maintain momentum and drive continuous sales.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Lead nurturing sequences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Retargeting campaigns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Seasonal promotions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-heart-line text-2xl text-black"></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Brand Building</h3>
                <p className="text-gray-600 mb-6">Long-term brand development campaigns that establish market leadership.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Thought leadership content</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Community engagement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-yellow-400"></i>
                    <span>Awards and recognition campaigns</span>
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
                  Get Your Digital Marketing Quote
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg text-black/80">
                  Ready to boost your digital presence? Contact us for a custom marketing strategy.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <form id="digital-marketing-inquiry-form" data-readdy-form action="https://readdy.ai/api/form/d3mirlst07omtp5lr4i0" method="POST" className="space-y-6">
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                      <select
                        name="project_type"
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                      >
                        <option value="">Select service</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="paid-advertising">Paid Advertising (Google/Facebook)</option>
                        <option value="content-marketing">Content Marketing</option>
                        <option value="seo">Search Engine Optimization</option>
                        <option value="email-marketing">Email Marketing</option>
                        <option value="website-optimization">Website Optimization</option>
                        <option value="comprehensive">Comprehensive Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Marketing Goals</label>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none"
                      placeholder="Tell us about your marketing goals, target audience, current challenges, and budget range..."
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
              Ready to Dominate Digital?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your real estate marketing with data-driven digital strategies that deliver results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/#contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Your Campaign
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
