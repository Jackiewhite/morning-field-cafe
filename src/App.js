import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Instagram } from 'lucide-react';

export default function BreakfastRestaurant() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Buttermilk Pancakes",
      description: "House-made buttermilk pancakes, Vermont maple syrup, spiced apples, cultured butter",
      price: "16"
    },
    {
      name: "Eggs Benedict",
      description: "Poached farm eggs, house-cured ham, hollandaise, English muffin",
      price: "18"
    },
    {
      name: "Avocado on Toast",
      description: "Smashed avocado, heirloom tomatoes, poached eggs, sourdough",
      price: "14"
    },
    {
      name: "French Toast",
      description: "Brioche, vanilla custard, seasonal berries, whipped cream",
      price: "15"
    },
    {
      name: "Shrimops & Grits",
      description: "Southern-style shrimp, creamy stone-ground grits, thyme butter, parsley ",
      price: "18"
    },
    {
      name: "Smoked Salmon",
      description: "House-smoked salmon, cream cheese, capers, hashbrown cake",
      note: "+10 for caviar",
      price: "19"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: "'Quicksand', 'Nunito', sans-serif" }}>
      {/* Add Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Quicksand:wght@300;400;500;600;700&family=Nunito:wght@300;400;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        
        .brand-font {
          font-family: 'Bebas Neue', sans-serif;
          color: #8DB4D2;
        }
        
        .body-font {
          font-family: 'Quicksand', 'Nunito', sans-serif;
        }
        
        .nav-font {
          font-family: 'Lora', serif;
          font-style: italic;
        }
      `}</style>

      {/* Minimal Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="brand-font text-3xl">Morning Field</div>
            <div className="hidden md:flex gap-12 text-lg nav-font">
              <a href="#menu" className="text-stone-700 hover:text-stone-900 transition-colors">Menu</a>
              <a href="#about" className="text-stone-700 hover:text-stone-900 transition-colors">About</a>
              <a href="#visit" className="text-stone-700 hover:text-stone-900 transition-colors">Visit</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-image.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-stone-900/20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 body-font font-light" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>EST. 2025</p>
          <h1 className="brand-font text-6xl md:text-7xl lg:text-8xl mb-6" style={{ color: 'white', textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>Morning Field</h1>
          <p className="text-xl md:text-2xl body-font font-light tracking-wide max-w-2xl mx-auto mb-12" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
            A neighborhood cafe serving thoughtfully prepared breakfast & brunch
          </p>
          <button className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-stone-900 transition-all duration-300 text-sm tracking-widest body-font font-semibold">
            VIEW MENU
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-stone-500 mb-8 body-font">BREAKFAST & BRUNCH</p>
          <h2 className="brand-font text-4xl md:text-5xl mb-8">Start Your Day Right</h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed body-font font-light">
            We believe breakfast is the most important meal of the day. That's why we source the finest local ingredients, 
            prepare everything fresh daily, and serve it in a warm, welcoming space where neighbors become friends.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-stone-500 mb-4 body-font">SEASONAL MENU</p>
            <h2 className="brand-font text-4xl md:text-5xl">Our Offerings</h2>
          </div>

          <div className="space-y-12">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-stone-200 pb-8 last:border-0">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl md:text-2xl text-stone-800 nav-font">{item.name}</h3>
                  <span className="text-xl text-stone-600 body-font font-medium">${item.price}</span>
                </div>
                <p className="text-stone-600 body-font font-light">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <p className="text-sm text-stone-500 body-font font-light italic">Menu changes seasonally to highlight local ingredients</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 bg-cover bg-center" style={{backgroundImage: "url('/pancakes.jpg')"}}></div>
            <div className="h-96 bg-cover bg-center" style={{backgroundImage: "url('hawaiian-breakfast.jpg')"}}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-stone-500 mb-6 body-font">OUR STORY</p>
            <h2 className="brand-font text-4xl mb-8">Made with Love</h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6 body-font font-light">
              Morning Field began as a dream to create a space where the community could gather over exceptional breakfast. 
              We partnered with local farms and artisans to bring you the freshest ingredients in every dish.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed body-font font-light">
              From our hand-mixed pancake batter to our house-cured meats, everything is prepared with care and attention 
              to detail. We're not just serving food—we're creating experiences.
            </p>
          </div>
          <div className="h-[500px] bg-cover bg-center rounded-sm" style={{backgroundImage: "url('/about-image.jpg')"}}></div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="py-32 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-stone-500 mb-4 body-font">COME SEE US</p>
            <h2 className="brand-font text-4xl md:text-5xl">Visit Us</h2>
          </div>
 
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-6 text-stone-600" />
              <h3 className="text-xl mb-4 text-stone-800 body-font font-semibold">Hours</h3>
              <p className="text-stone-600 leading-relaxed body-font font-light">
                Monday - Friday<br />7:00 AM - 2:00 PM<br /><br />
                Saturday - Sunday<br />8:00 AM - 3:00 PM
              </p>
            </div>

            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-6 text-stone-600" />
              <h3 className="text-xl mb-4 text-stone-800 body-font font-semibold">Location</h3>
              <p className="text-stone-600 leading-relaxed body-font font-light">
                123 Main Street<br />Austin, TX 78701<br /><br />
                Free parking available
              </p>
            </div>

            <div className="text-center">
              <Instagram className="w-8 h-8 mx-auto mb-6 text-stone-600" />
              <h3 className="text-xl mb-4 text-stone-800 body-font font-semibold">Connect</h3>
              <p className="text-stone-600 leading-relaxed body-font font-light">
                @morningfieldcafe<br /><br />
                hello@morningfield.com<br />
                (512) 555-0123
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-stone-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="brand-font text-3xl">Morning Field</div>
            <p className="text-sm text-stone-400 body-font font-light">© 2024 Morning Field Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}