import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, Monitor, Heart, Brain, Users, MessageCircle, Calendar, CheckCircle, Instagram, Facebook } from 'lucide-react';
import { siteContent } from './config/content';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSmallLogo, setShowSmallLogo] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const heroBottom = heroSectionRef.current.getBoundingClientRect().bottom;
        setShowSmallLogo(heroBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            {/* Szybki kontakt */}
            <div className="flex items-center space-x-6 text-sm text-gray-600 flex-grow justify-start">
              <a 
                href={`mailto:${siteContent.header.email}`}
                className="flex items-center space-x-1 hover:text-fuchsia-600 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-fuchsia-600" />
                <span>{siteContent.header.email}</span>
              </a>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3">
                <a 
                  href={siteContent.header.social.instagram}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-fuchsia-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href={siteContent.header.social.facebook}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-fuchsia-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Logo */}
            {showSmallLogo && (
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-sm font-semibold text-gray-600 shadow-md">
                  {siteContent.hero.logo}
                </div>
              </div>
            )}

            {/* Menu hamburger */}
            <div className="ml-auto">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-fuchsia-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="max-w-7xl mx-auto px-4 py-4">
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-fuchsia-600 transition-colors">{siteContent.header.navigation.about}</button></li>
                <li><button onClick={() => scrollToSection('what-is')} className="block w-full text-left py-2 text-gray-700 hover:text-fuchsia-600 transition-colors">{siteContent.header.navigation.whatIs}</button></li>
                <li><button onClick={() => scrollToSection('areas')} className="block w-full text-left py-2 text-gray-700 hover:text-fuchsia-600 transition-colors">{siteContent.header.navigation.areas}</button></li>
                <li><button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-fuchsia-600 transition-colors">{siteContent.header.navigation.services}</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-fuchsia-600 transition-colors">{siteContent.header.navigation.contact}</button></li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroSectionRef} className="pt-24 pb-16 bg-gradient-to-br from-fuchsia-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Duże logo */}
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl flex items-center justify-center text-xl md:text-2xl font-bold text-gray-700 shadow-lg mx-auto border-2 border-gray-100">
              {siteContent.hero.logo}
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            {siteContent.hero.title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < siteContent.hero.title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {siteContent.hero.subtitle}
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-fuchsia-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {siteContent.hero.ctaButton}
          </button>
        </div>
      </section>

      {/* O MNIE Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{siteContent.about.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">{siteContent.about.name}</h3>
              {siteContent.about.description.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-fuchsia-600" />
                  <span>{siteContent.about.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Monitor className="w-4 h-4 text-teal-600" />
                  <span>{siteContent.about.meetingType}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                {siteContent.about.photoPlaceholder}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CZYM JEST Section */}
      <section id="what-is" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{siteContent.whatIs.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Psychoterapia */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-fuchsia-600 mb-4">{siteContent.whatIs.psychotherapy.title}</h3>
                <div className="w-64 h-48 bg-gray-200 rounded-lg mx-auto mb-4 relative overflow-hidden group cursor-pointer">
                  {/* Obrazek - stan domyślny */}
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100 to-fuchsia-200 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-fuchsia-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Brain className="w-8 h-8 text-fuchsia-700" />
                      </div>
                      <p className="text-fuchsia-700 font-medium">{siteContent.whatIs.psychotherapy.iconLabel}</p>
                    </div>
                  </div>
                  {/* Tekst - stan hover */}
                  <div className="absolute inset-0 bg-white flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                      {siteContent.whatIs.psychotherapy.hoverText}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {siteContent.whatIs.psychotherapy.description}
              </p>
            </div>

            {/* Psychodietetyka */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">{siteContent.whatIs.psychodietetics.title}</h3>
                <div className="w-64 h-48 bg-gray-200 rounded-lg mx-auto mb-4 relative overflow-hidden group cursor-pointer">
                  {/* Obrazek - stan domyślny */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Heart className="w-8 h-8 text-teal-700" />
                      </div>
                      <p className="text-teal-700 font-medium">{siteContent.whatIs.psychodietetics.iconLabel}</p>
                    </div>
                  </div>
                  {/* Tekst - stan hover */}
                  <div className="absolute inset-0 bg-white flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                      {siteContent.whatIs.psychodietetics.hoverText}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {siteContent.whatIs.psychodietetics.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBSZARY I PROBLEMY Section */}
      <section id="areas" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{siteContent.areas.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Psychoterapia */}
            <div className="bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-fuchsia-700 mb-6 text-center">{siteContent.areas.psychotherapy.title}</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 relative overflow-hidden group cursor-pointer">
                {/* Obrazek - stan domyślny */}
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-200 to-fuchsia-300 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-fuchsia-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-fuchsia-800 font-semibold text-lg">{siteContent.areas.psychotherapy.iconLabel}</p>
                  </div>
                </div>
                {/* Tekst - stan hover */}
                <div className="absolute inset-0 bg-white flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-fuchsia-700 mb-3">{siteContent.areas.psychotherapy.hoverTitle}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {siteContent.areas.psychotherapy.hoverDescription}
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {siteContent.areas.psychotherapy.problems.map((problem, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-fuchsia-600 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Psychodietetyka */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-teal-700 mb-6 text-center">{siteContent.areas.psychodietetics.title}</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 relative overflow-hidden group cursor-pointer">
                {/* Obrazek - stan domyślny */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-teal-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-teal-800 font-semibold text-lg">{siteContent.areas.psychodietetics.iconLabel}</p>
                  </div>
                </div>
                {/* Tekst - stan hover */}
                <div className="absolute inset-0 bg-white flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-teal-700 mb-3">{siteContent.areas.psychodietetics.hoverTitle}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {siteContent.areas.psychodietetics.hoverDescription}
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {siteContent.areas.psychodietetics.problems.map((problem, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RODZAJE USŁUG Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{siteContent.services.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-600 to-teal-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-6">{siteContent.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Konsultacja indywidualna */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{siteContent.services.individual.title}</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                {siteContent.services.individual.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Terapia długoterminowa */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{siteContent.services.longTerm.title}</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                {siteContent.services.longTerm.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Konsultacja dietetyczna */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{siteContent.services.dietetic.title}</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                {siteContent.services.dietetic.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{siteContent.contact.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-600 to-teal-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {siteContent.contact.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Główny kontakt - Email */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-fuchsia-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{siteContent.contact.email.title}</h3>
                <p className="text-gray-600 mb-6">
                  {siteContent.contact.email.description}
                </p>
                <a 
                  href={`mailto:${siteContent.contact.email.address}?subject=${encodeURIComponent(siteContent.contact.email.subject)}&body=${encodeURIComponent(siteContent.contact.email.body)}`}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-fuchsia-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-fuchsia-700 hover:to-teal-700"
                >
                  <Mail className="w-5 h-5" />
                  <span>{siteContent.contact.email.address}</span>
                </a>
              </div>
            </div>

            {/* Zachęcający tekst */}
            <div className="mt-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{siteContent.contact.encouragement.title}</h4>
                <p className="text-gray-600 mb-4">
                  {siteContent.contact.encouragement.description}
                </p>
                <div className="flex items-center justify-center space-x-2 text-fuchsia-600">
                  <Heart className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">{siteContent.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;