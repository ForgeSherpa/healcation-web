import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Start Planning Your Dream Vacation Today
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Download the Healcation app now and let AI transform your vacation planning experience. Available for iOS and Android.
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-primary bg-white rounded-lg hover:bg-background transition-colors"
              >
                <Apple size={24} />
                <div className="flex flex-col">
                  <span className="text-xs">Download on the</span>
                  <span className="text-sm font-bold">App Store</span>
                </div>
              </a>
              
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-primary bg-white rounded-lg hover:bg-background transition-colors"
              >
                <Play size={24} />
                <div className="flex flex-col">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </a>
            </div>
            
            <div className="flex items-center mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://images.pexels.com/photos/${721760 + i * 10}/pexels-photo-${721760 + i * 10}.jpeg?auto=compress&cs=tinysrgb&w=100`}
                    alt={`User ${i}`}
                    className="w-10 h-10 border-2 border-primary rounded-full object-cover"
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/80">
                  4.9 stars from 10,000+ reviews
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 md:w-72">
              <div className="absolute -top-6 -right-6 -left-6 -bottom-6 bg-white/10 rounded-3xl transform rotate-6"></div>
              <div className="relative z-10 overflow-hidden border-8 border-white rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Healcation App Screenshot" 
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Second phone mockup */}
            <div className="absolute w-64 md:w-72 -bottom-4 -right-8 md:right-10">
              <div className="absolute -top-6 -right-6 -left-6 -bottom-6 bg-white/10 rounded-3xl transform -rotate-6"></div>
              <div className="relative z-10 overflow-hidden border-8 border-white rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Healcation App Second Screenshot" 
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;