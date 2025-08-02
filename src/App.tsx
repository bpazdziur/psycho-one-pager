import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Monitor, Heart, Brain, Users, MessageCircle, Calendar, CheckCircle, Instagram, Facebook } from 'lucide-react';

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
                href="mailto:kontakt@example.com" 
                className="flex items-center space-x-1 hover:text-fuchsia-600 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-fuchsia-600" />
                <span>kontakt@example.com</span>
              </a>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-fuchsia-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com" 
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
                  LOGO
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
                <li><button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-fuchsia-600 transition-colors">O MNIE</button></li>
                <li><button onClick={() => scrollToSection('what-is')} className="block w-full text-left py-2 text-gray-700 hover:text-fuchsia-600 transition-colors">CZYM JEST Psychoterapia/Psychodietetyka</button></li>
                <li><button onClick={() => scrollToSection('areas')} className="block w-full text-left py-2 text-gray-700 hover:text-fuchsia-600 transition-colors">OBSZARY I PROBLEMY Z KTÓRYMI PRACUJĘ</button></li>
                <li><button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-fuchsia-600 transition-colors">RODZAJE USŁUG</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-fuchsia-600 transition-colors">KONTAKT</button></li>
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
              LOGO
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            PSYCHOTERAPIA POZNAWCZO-BEHAWIORALNA<br />
            PSYCHODIETETYKA
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Profesjonalne wsparcie psychologiczne i dietetyczne w formie online. 
            Pomogę Ci odnaleźć równowagę i zdrowe nawyki.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-fuchsia-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Umów konsultację
          </button>
        </div>
      </section>

      {/* O MNIE Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O MNIE</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Anna Kowalska</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-fuchsia-600" />
                  <span>anna.kowalska@example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Monitor className="w-4 h-4 text-teal-600" />
                  <span>Przyjmuję tylko online</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                Zdjęcie
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CZYM JEST Section */}
      <section id="what-is" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">CZYM JEST</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Psychoterapia */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-fuchsia-600 mb-4">Psychoterapia poznawczo-behawioralna</h3>
                <div className="w-64 h-48 bg-gray-200 rounded-lg mx-auto mb-4 relative overflow-hidden group cursor-pointer">
                  {/* Obrazek - stan domyślny */}
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100 to-fuchsia-200 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-fuchsia-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Brain className="w-8 h-8 text-fuchsia-700" />
                      </div>
                      <p className="text-fuchsia-700 font-medium">Psychoterapia</p>
                    </div>
                  </div>
                  {/* Tekst - stan hover */}
                  <div className="absolute inset-0 bg-white flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                      Psychoterapia poznawczo-behawioralna to skuteczna metoda leczenia zaburzeń psychicznych, 
                      która koncentruje się na zmianie negatywnych wzorców myślenia i zachowania.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Psychodietetyka */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">Psychodietetyka</h3>
                <div className="w-64 h-48 bg-gray-200 rounded-lg mx-auto mb-4 relative overflow-hidden group cursor-pointer">
                  {/* Obrazek - stan domyślny */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Heart className="w-8 h-8 text-teal-700" />
                      </div>
                      <p className="text-teal-700 font-medium">Psychodietetyka</p>
                    </div>
                  </div>
                  {/* Tekst - stan hover */}
                  <div className="absolute inset-0 bg-white flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                      Psychodietetyka łączy wiedzę z zakresu psychologii i dietetyki, 
                      pomagając w rozwiązywaniu problemów związanych z jedzeniem i wagą.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBSZARY I PROBLEMY Section */}
      <section id="areas" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">OBSZARY I PROBLEMY Z KTÓRYMI PRACUJĘ</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Psychoterapia */}
            <div className="bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-fuchsia-700 mb-6 text-center">Psychoterapia</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 relative overflow-hidden group cursor-pointer">
                {/* Obrazek - stan domyślny */}
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-200 to-fuchsia-300 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-fuchsia-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-fuchsia-800 font-semibold text-lg">Terapia CBT</p>
                  </div>
                </div>
                {/* Tekst - stan hover */}
                <div className="absolute inset-0 bg-white flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-fuchsia-700 mb-3">Psychoterapia poznawczo-behawioralna</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Skuteczna metoda terapeutyczna skupiająca się na identyfikacji i zmianie 
                      destrukcyjnych wzorców myślenia oraz zachowań, które wpływają na samopoczucie i funkcjonowanie.
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-fuchsia-600 flex-shrink-0" />
                  <span className="text-gray-700">Zaburzenia lękowe i napady paniki</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-fuchsia-600 flex-shrink-0" />
                  <span className="text-gray-700">Depresja i zaburzenia nastroju</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-fuchsia-600 flex-shrink-0" />
                  <span className="text-gray-700">Problemy w relacjach interpersonalnych</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-fuchsia-600 flex-shrink-0" />
                  <span className="text-gray-700">Niska samoocena i brak pewności siebie</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-fuchsia-600 flex-shrink-0" />
                  <span className="text-gray-700">Stres i wypalenie zawodowe</span>
                </li>
              </ul>
            </div>

            {/* Psychodietetyka */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-teal-700 mb-6 text-center">Psychodietetyka</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 relative overflow-hidden group cursor-pointer">
                {/* Obrazek - stan domyślny */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-teal-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-teal-800 font-semibold text-lg">Zdrowe odżywianie</p>
                  </div>
                </div>
                {/* Tekst - stan hover */}
                <div className="absolute inset-0 bg-white flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-teal-700 mb-3">Psychodietetyka</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Holistyczne podejście łączące psychologię z dietetyką, 
                      pomagające w budowaniu zdrowej relacji z jedzeniem i własnym ciałem.
                    </p>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Zaburzenia odżywiania (anoreksja, bulimia, BED)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Kompulsywne objadanie się</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Problemy z wagą i obrazem ciała</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Emocjonalne jedzenie</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Budowanie zdrowych nawyków żywieniowych</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RODZAJE USŁUG Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">RODZAJE USŁUG</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-600 to-teal-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-6">Szczegóły rodzaju usług bez ceny</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Konsultacja indywidualna */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Konsultacja indywidualna</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Sesja trwa 50 minut</li>
                <li>• Prowadzona online</li>
                <li>• Indywidualne podejście</li>
                <li>• Elastyczne terminy</li>
              </ul>
            </div>

            {/* Terapia długoterminowa */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Terapia długoterminowa</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Regularne spotkania</li>
                <li>• Kompleksowe wsparcie</li>
                <li>• Monitorowanie postępów</li>
                <li>• Długofalowe efekty</li>
              </ul>
            </div>

            {/* Konsultacja dietetyczna */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Konsultacja psychodietetyczna</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Analiza nawyków żywieniowych</li>
                <li>• Plan zmiany zachowań</li>
                <li>• Wsparcie psychologiczne</li>
                <li>• Edukacja żywieniowa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">KONTAKT</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Dane kontaktowe */}
            <div className="bg-gradient-to-br from-fuchsia-50 to-teal-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Dane kontaktowe</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600">anna.kowalska@example.com</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Forma spotkań</h4>
                  <p className="text-gray-600">Tylko online</p>
                </div>
              </div>
            </div>

            {/* Formularz kontaktowy */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Zdanie zachęcające do kontaktu</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Imię</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Temat</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wiadomość</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-gradient-to-r from-fuchsia-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Wyślij wiadomość
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Anna Kowalska - Psychoterapia i Psychodietetyka. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;