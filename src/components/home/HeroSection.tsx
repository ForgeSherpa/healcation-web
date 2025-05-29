import { motion } from 'framer-motion';
import { MapPin, Calendar, Hotel, Navigation } from 'lucide-react';

const HeroSection: React.FC = () => {
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
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                  <Calendar size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium">Easy Booking</span>
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
              <div className="absolute -top-4 -right-4 -left-4 -bottom-4 bg-primary/10 rounded-3xl transform rotate-6"></div>
              <div className="relative overflow-hidden border-8 border-white rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3943859/pexels-photo-3943859.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Healcation App Preview" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">Paris Getaway</h3>
                    <p className="text-white/90">Perfect 5-day itinerary</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-white font-medium">$1,299</span>
                      <button className="px-3 py-1 text-xs font-medium text-primary bg-white rounded-full">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second App Mockup (Offset) */}
            <div className="absolute w-64 md:w-80 left-20 lg:left-auto lg:right-16 top-16">
              <div className="absolute -top-4 -right-4 -left-4 -bottom-4 bg-primary/10 rounded-3xl transform -rotate-6"></div>
              <div className="relative overflow-hidden border-8 border-white rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Healcation App Second Preview" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">Bali Retreat</h3>
                    <p className="text-white/90">7 days of relaxation</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-white font-medium">$1,799</span>
                      <button className="px-3 py-1 text-xs font-medium text-primary bg-white rounded-full">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
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