import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Hotel, Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  
  const destinations = [
    {
      image: "/ss/ss2.jpeg",
      title: "Paris Getaway",
      subtitle: "Perfect 5-day itinerary",
      price: "est $1,299"
    },
    {
      image: "/ss/ss1.jpeg",
      title: "Bali Retreat",
      subtitle: "7 days of relaxation",
      price: "est $1,799"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, [destinations.length]);
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="container relative z-10">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
              Your AI-Powered <br />Vacation Companion
            </h1>
            <p className="mb-8 text-lg text-black/80 md:text-xl">
              Let AI find your perfect getaway. Enter your destination, preferences, and let 
              Healcation recommend attractions, hotels, and create your ideal vacation itinerary.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#download" className="btn btn-primary">
                Download Now
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                Learn How It Works
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mt-12">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium">100+ Destinations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                  <Hotel size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium">10,000+ Hotels</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                  <Navigation size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium">5,000+ Attractions</span>
              </div>
            </div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 md:w-80">
              <div className="absolute -top-4 -right-4 -left-4 -bottom-4 bg-primary/10 rounded-3xl transform rotate-3"></div>
              <div className="relative overflow-hidden border-8 border-white rounded-3xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDestination}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <img 
                      src={destinations[currentDestination].image}
                      alt="Healcation App Preview" 
                      className="w-full aspect-[9/16] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-white">
                          {destinations[currentDestination].title}
                        </h3>
                        <p className="text-white/90">
                          {destinations[currentDestination].subtitle}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-white font-medium">
                            {destinations[currentDestination].price}
                          </span>
                          <button className="px-3 py-1 text-xs font-medium text-primary bg-white rounded-full hover:bg-white/90 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Destination Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {destinations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDestination(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentDestination 
                        ? 'bg-primary w-6' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Switch to destination ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>
    </section>
  );
};

export default HeroSection;