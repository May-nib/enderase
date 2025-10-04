import { useState, useEffect } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    alert('Form submitted!')
  }

  return (
    <div className="font-sans ">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-white font-bold text-lg mr-3">
              <img src="/enderase.png" alt="" />
            </div>
            <span className={`text-xl font-bold   ${isScrolled ? 'text-green-800' : 'text-white'}`}>Enderase Research</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className={`text-blue-800 hover:text-blue-600 font-medium  ${isScrolled ? 'text-green-800' : 'text-white'}`}>Home</a>
            <a href="#about" className={`text-blue-800 hover:text-blue-600 font-medium  ${isScrolled ? 'text-green-800' : 'text-white'}`}>About</a>
            <a href="#services" className={`text-blue-800 hover:text-blue-600 font-medium  ${isScrolled ? 'text-green-800' : 'text-white'}`}>Services</a>
            <a href="#it" className={`text-blue-800 hover:text-blue-600 font-medium  ${isScrolled ? 'text-green-800' : 'text-white'}`}>IT Solutions</a>
            <a href="#contact" className={`text-blue-800 hover:text-blue-600 font-medium  ${isScrolled ? 'text-green-800' : 'text-white'}`}>Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-blue-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a href="#home" className="text-blue-800 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="text-blue-800 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" className="text-blue-800 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#it" className="text-blue-800 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>IT Solutions</a>
              <a href="#contact" className="text-blue-800 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-green-900 to-blue-300 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Advancing Ethical and Compliant Research Across Africa</h1>
              <p className="text-xl mb-8 opacity-90">
                Premier provider of research and regulatory services dedicated to promoting high standards of ethical and compliant research.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Our Services</a>
                <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition">Contact Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About Enderase Research Solutions</h2>
              <div className="h-1 w-20 bg-green-200 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Based in Addis Ababa, Ethiopia, we specialize in research and regulatory services across Africa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-6">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  ERS is dedicated to promoting high standards of ethical and compliant research within Ethiopia and across the African continent. As both a Contract Research Organization (CRO) and a Clinical Research Associate (CRA), we play a key role in the design, implementation, and monitoring of clinical trials nationwide.
                </p>
                <p className="text-gray-700">
                  We deliver cross-cutting, hands-on training in Research Ethics and Good Clinical Practice (GCP), designed to strengthen the ethical and methodological competencies of researchers, institutions, and organizations.
                </p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-green-800 mb-2">100+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-green-800 mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-green-800 mb-2">50+</div>
                    <div className="text-gray-600">Clients</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-green-800 mb-2">12</div>
                    <div className="text-gray-600">African Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (expanded to include IT Solutions) */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Services</h2>
              <div className="h-1 w-20 bg-green-300 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Comprehensive research solutions tailored to meet your specific needs
              </p>
            </div>

            {/* make room for 4 cards: 3 research services + 1 IT solutions */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-2">
                <div className="h-2 bg-green-800"></div>
                <div className="p-6">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-blue-800 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">Ethics Consultation & Facilitation</h3>
                  <p className="text-gray-600">
                    Support in navigating and securing research ethics approval (ethical clearance) with expert guidance through the entire process.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-2">
                <div className="h-2 bg-green-800"></div>
                <div className="p-6">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-blue-800 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">Training in Research Ethics & GCP</h3>
                  <p className="text-gray-600">
                    Direct, applied courses on ethical standards and Good Clinical Practice to strengthen methodological competencies.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-2">
                <div className="h-2 bg-green-800"></div>
                <div className="p-6">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-blue-800 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">Research Design & Implementation</h3>
                  <p className="text-gray-600">
                    End-to-end support for conducting high-quality, ethically sound research projects from conception to completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT Solutions Section (separate full-width section) */}
        <section id="it" className="py-24 bg-gradient-to-r from-white via-blue-50 to-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="text-sm font-semibold text-green-800 uppercase">IT Solution Services</div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mt-3">Gelagle — Technology-Driven Review Platform</h2>
              <p className="text-gray-700 mt-4">
                We provide a one-stop online ethics review platform that allows administrators, researchers, and reviewers to seamlessly manage the entire review cycle — including protocol submission, review, approval, and follow-up — in a high-quality, efficient, and technology-driven manner.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Streamlined Submissions</h3>
                <p className="text-gray-700 mb-4">Easy protocol uploads, versioning, and intelligent validation to reduce back-and-forth and speed approvals.</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Intelligent form validation & templates</li>
                  <li>• Document versioning & auto-track changes</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Reviewer Workflows</h3>
                <p className="text-gray-700 mb-4">Assign, annotate, and approve with audit trails, role-based access control, and collaborative review tools.</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Role-based access & secure audit trails</li>
                  <li>• In-app annotations & decision history</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Transparent Tracking</h3>
                <p className="text-gray-700 mb-4">Real-time status, automated notifications, task reminders, and follow-up management for faster, more transparent decisions.</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Real-time dashboards & KPIs</li>
                  <li>• Automated email/SMS notifications</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a href="#contact" className="inline-block px-6 py-3 bg-green-800 text-white rounded-lg font-semibold hover:bg-green-700 transition">Request a Demo</a>
              <a href="#" className="inline-block ml-3 px-6 py-3 border border-green-800 text-green-800 rounded-lg font-semibold hover:bg-green-50 transition">Learn about Gelagle (ገላግሌ)</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Contact Us</h2>
              <div className="h-1 w-20 bg-green-300 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Get in touch with us to discuss how we can support your research needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+251 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@enderase.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <button type="submit" className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-800 font-bold text-lg mr-3">
                  ERS
                </div>
                <span className="text-xl font-bold">Enderase Research</span>
              </div>
              <p className="text-blue-200 mb-6">
                Advancing Ethical and Compliant Research Across Africa through excellence, integrity, and innovation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-blue-200 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-blue-200 hover:text-white">About Us</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white">Services</a></li>
                <li><a href="#it" className="text-blue-200 hover:text-white">IT Solutions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-blue-200 hover:text-white">Ethics Consultation</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white">Research Training</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white">Study Design</a></li>
                <li><a href="#it" className="text-blue-200 hover:text-white">IT Solutions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-blue-200 mb-4">Subscribe to our newsletter for updates</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 w-full bg-white text-gray-800 rounded-l-lg focus:outline-none" />
                <button type="submit" className="bg-blue-700 px-4 py-2 rounded-r-lg hover:bg-blue-600">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="border-t border-white-800 pt-8 text-sm text-blue-300 text-center">
            <p>&copy; 2025 Enderase Research Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <ChevronUpIcon className="w-5 h-5" />
      </button>
    </div>
  )
}

export default App
