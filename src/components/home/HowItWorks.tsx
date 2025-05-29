import { motion } from 'framer-motion';
import { MapPin, CalendarCheck, Palette, Hotel } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MapPin size={24} className="text-white" />,
      title: 'Choose Your Destination',
      description: 'Enter your dream destination or let our AI suggest places based on your interests.',
      image: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <CalendarCheck size={24} className="text-white" />,
      title: 'Set Your Dates',
      description: 'Select your travel dates and duration to find the best options available.',
      image: 'https://images.pexels.com/photos/6863175/pexels-photo-6863175.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <Palette size={24} className="text-white" />,
      title: 'Choose Activities',
      description: 'Browse AI-recommended attractions, activities, and experiences tailored to you.',
      image: 'https://images.pexels.com/photos/1268079/pexels-photo-1268079.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <Hotel size={24} className="text-white" />,
      title: 'Book Your Stay',
      description: 'Select from curated accommodations and finalize your perfect vacation package.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
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
                <img
                  src={step.image}
                  alt={step.title}
                  className="relative z-10 object-cover w-full h-64 rounded-xl shadow-lg md:h-80"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;