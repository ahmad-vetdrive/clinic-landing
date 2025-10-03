import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Heart, Shield, Clock } from 'lucide-react';

export default function MillhouseVeterinary() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    { name: "Ben Barry", title: "DVM, Owner" },
    { name: "Carl Goodwin", title: "Staff Nurse, RVN" },
    { name: "Frank Pagac", title: "Staff Vet" },
    { name: "Mary Morris", title: "Staff Nurse, RVN" },
    { name: "Dee Dachenzie", title: "Veterinary Technician" },
    { name: "Alee Adams", title: "Staff Nurse, RVN" },
    { name: "Julie Jennings", title: "Veterinary Assistant" },
    { name: "Eva Rolfeg", title: "Staff Vet" },
    { name: "Vivian Hanson", title: "Veterinary Technician" },
    { name: "Eddie Emerson", title: "Veterinary Assistant" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className={`text-2xl font-bold transition-colors ${scrolled ? 'text-[#0b568a]' : 'text-white'}`}>
                Millhouse Veterinary
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#0b568a]' : 'text-white hover:text-gray-200'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#0b568a]' : 'text-white hover:text-gray-200'}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#0b568a]' : 'text-white hover:text-gray-200'}`}
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#0b568a]' : 'text-white hover:text-gray-200'}`}
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#0b568a]' : 'text-white hover:text-gray-200'}`}
              >
                Book
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden ${scrolled ? 'text-[#0b568a]' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 bg-white rounded-b-lg shadow-lg">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0b568a] transition"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0b568a] transition"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0b568a] transition"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0b568a] transition"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0b568a] transition"
              >
                Book
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0b568a 0%, #0d6aa3 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Compassionate Care for Your Beloved Companions
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-2xl mx-auto">
            Where professional veterinary excellence meets heartfelt dedication to animal wellbeing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-[#0b568a] px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Book Appointment
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 hover:bg-white hover:text-[#0b568a]"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Us</h2>
            <div className="w-24 h-1 bg-[#0b568a] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in comprehensive veterinary care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-2xl p-8 text-white transform hover:scale-105 transition shadow-xl" style={{ background: 'linear-gradient(135deg, #0b568a 0%, #0d6aa3 100%)' }}>
              <Heart className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Compassionate Care</h3>
              <p className="text-gray-100">We treat every pet with the love and attention they deserve, ensuring comfort at every visit.</p>
            </div>
            <div className="rounded-2xl p-8 text-white transform hover:scale-105 transition shadow-xl" style={{ background: 'linear-gradient(135deg, #0b568a 0%, #0d6aa3 100%)' }}>
              <Shield className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-100">Our experienced veterinarians and staff bring years of expertise to every consultation.</p>
            </div>
            <div className="rounded-2xl p-8 text-white transform hover:scale-105 transition shadow-xl" style={{ background: 'linear-gradient(135deg, #0b568a 0%, #0d6aa3 100%)' }}>
              <Clock className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Modern Facilities</h3>
              <p className="text-gray-100">State-of-the-art equipment and facilities to provide the highest standard of care.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Millhouse Veterinary, we are dedicated to providing exceptional care for your beloved pets. Our state-of-the-art facility combines modern veterinary medicine with compassionate service, ensuring that every animal receives the attention and treatment they deserve. With years of experience and a genuine love for animals, our team is committed to being your trusted partner in pet healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <div className="w-24 h-1 bg-[#0b568a] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to your pet's health and happiness
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="relative h-48 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0b568a 0%, #0d6aa3 100%)' }}>
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-[#0b568a]">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#0b568a] font-medium text-sm">{member.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 text-white" style={{ background: 'linear-gradient(135deg, #0b568a 0%, #0d6aa3 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get image.pngIn Touch</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              We're here to help with all your pet care needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 hover:bg-opacity-20 transition backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-white rounded-full p-3">
                    <Phone className="w-6 h-6 text-[#0b568a]" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Phone</p>
                    <a href="tel:08531-87250" className="text-gray-100 hover:text-white transition text-lg">(0853) 87250</a>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 hover:bg-opacity-20 transition backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-white rounded-full p-3">
                    <Mail className="w-6 h-6 text-[#0b568a]" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Email</p>
                    <a href="mailto:info@millhousevets.ie" className="text-gray-100 hover:text-white transition break-all">info@millhousevets.ie</a>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 hover:bg-opacity-20 transition backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-white rounded-full p-3">
                    <MapPin className="w-6 h-6 text-[#0b568a]" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Address</p>
                    <p className="text-gray-100">White Horse, Dunlavin, Co. Cork</p>
                    <p className="text-gray-100">Ireland, P56 YK33</p>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-lg mb-3">Opening Hours</h4>
                <div className="space-y-2 text-gray-100">
                  <p>Monday - Friday: 9am to 7pm</p>
                  <p>Saturday: 9am to 5pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-full min-h-96">
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-[#0b568a]">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Map Location</p>
                  <p className="text-gray-600 mt-2">White Horse, Dunlavin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Create a Booking Now</h2>
            <div className="w-24 h-1 bg-[#0b568a] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your appointment with ease
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <iframe 
              src="https://68de9f44defa55573621b1e2--majestic-lebkuchen-aed3d2.netlify.app/" 
              className="w-full h-[800px] border-0"
              title="Booking System"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Millhouse Veterinary</h3>
            <p className="text-gray-400 mb-4">The Professional Choice</p>
            <p className="text-gray-500 text-sm">&copy; 2025 Millhouse Veterinary. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}