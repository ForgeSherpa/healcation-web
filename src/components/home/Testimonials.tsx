import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jessica Thompson',
      location: 'New York, USA',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      text: 'Healcation made our family trip to Hawaii absolutely perfect! The AI recommendations were spot-on, and we discovered hidden beaches we never would have found otherwise.',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      location: 'Barcelona, Spain',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      text: 'As a frequent traveler, I\'ve tried many travel apps, but Healcation is by far the best. The AI understood exactly what kind of experiences I was looking for in Japan.',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      location: 'London, UK',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4,
      text: 'The app saved me hours of research for our anniversary trip to Italy. The hotel recommendations were luxurious yet affordable, exactly what we wanted!',
    },
    {
      id: 4,
      name: 'David Chen',
      location: 'Singapore',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      text: 'I was skeptical about an AI planning my vacation, but Healcation exceeded all expectations. My solo trip to New Zealand was perfectly balanced with adventure and relaxation.',
    },
    {
      id: 5,
      name: 'Emily Wilson',
      location: 'Sydney, Australia',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      text: 'The itinerary builder is a game-changer! It organized our family trip to Disney World perfectly, maximizing our time and minimizing walking distances with kids.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = 3;
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => 
      prev + 1 >= testimonials.length ? 0 : prev + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => 
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Create a circular array of testimonials starting from activeIndex
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleTestimonials; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">
            Discover how Healcation has transformed vacation planning for travelers around the world.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-background rounded-xl shadow-sm w-full md:w-[calc(33.33%-1rem)] flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-black/70">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < testimonial.rating ? "#03045e" : "none"}
                      stroke={i < testimonial.rating ? "#03045e" : "#03045e"}
                      className="text-primary"
                    />
                  ))}
                </div>
                <p className="flex-grow text-black/80 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary text-white hover:bg-opacity-90 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary text-white hover:bg-opacity-90 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;