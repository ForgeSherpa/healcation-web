import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CalendarCheck, Palette, Hotel } from 'lucide-react';
import { useState, useEffect } from 'react';

const HowItWorks: React.FC = () => {
  const [currentDestinationImage, setCurrentDestinationImage] = useState(0);
  
  const destinationImages = [
    { 
      url: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Tokyo, Japan'
    },
    { 
      url: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Bali, Indonesia'
    },
    { 
      url: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Paris, France'
    },
    { 
      url: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Santorini, Greece'
    },
    { 
      url: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Maldives'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestinationImage((prev) => (prev + 1) % destinationImages.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, [destinationImages.length]);

  const steps = [
    {
      icon: <MapPin size={24} className="text-white" />,
      title: 'Choose Your Destination',
      description: 'Enter your dream destination or let our AI suggest places based on your interests.',
      image: 'slideshow', // Special marker for slideshow
    },
    {
      icon: <CalendarCheck size={24} className="text-white" />,
      title: 'Set Your Dates',
      description: 'Select your travel dates and duration to find the best options available.',
      image: 'https://images.pexels.com/photos/273153/pexels-photo-273153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      icon: <Palette size={24} className="text-white" />,
      title: 'Choose Activities',
      description: 'Browse AI-recommended attractions, activities, and experiences tailored to you.',
      image: 'https://images.pexels.com/photos/1630039/pexels-photo-1630039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      icon: <Hotel size={24} className="text-white" />,
      title: 'Save Your List',
      description: 'Select from curated accommodations and finalize your perfect vacation package.',
      image: 'https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <section id="how-it-works" className="section bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">How Healcation Works</h2>
          <p className="section-subtitle">
            Planning your perfect vacation is simple with our intuitive app that guides you through every step.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 gap-8 items-center ${
                index % 2 === 0 ? 'md:grid-cols-[3fr_2fr]' : 'md:grid-cols-[2fr_3fr] md:flex-row-reverse'
              }`}
            >
              <div className={index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}>
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary">
                    {step.icon}
                  </div>
                  <div className="ml-4 text-2xl font-bold text-primary">
                    Step {index + 1}
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
                  {step.title}
                </h3>
                <p className="text-lg text-black/70">
                  {step.description}
                </p>
              </div>

              <div className={`relative ${index % 2 === 0 ? 'md:order-last' : 'md:order-first'}`}>
                <div className="absolute inset-0 bg-primary/20 rounded-xl transform rotate-3"></div>
                {step.image === 'slideshow' ? (
                  <div className="relative z-10 w-full h-64 md:h-80 rounded-xl shadow-lg overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentDestinationImage}
                        src={destinationImages[currentDestinationImage].url}
                        alt={destinationImages[currentDestinationImage].alt}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8 }}
                        className="object-cover w-full h-full"
                      />
                    </AnimatePresence>
                    {/* Destination label overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
                      <motion.p 
                        key={currentDestinationImage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white font-medium text-sm"
                      >
                        {destinationImages[currentDestinationImage].alt}
                      </motion.p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative z-10 object-cover w-full h-64 rounded-xl shadow-lg md:h-80"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;