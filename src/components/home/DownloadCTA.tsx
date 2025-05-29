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
              Download Healcation
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Get the Healcation app and start your journey to better health and wellness today!
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white bg-white/20 rounded-lg hover:bg-white/30 transition-colors cursor-pointer"
              >
                <Play size={24} />
                <div className="flex flex-col">
                  <span className="text-xs">Download on</span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </a>
              
              <div className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white/60 bg-white/10 rounded-lg cursor-not-allowed">
                <Apple size={24} />
                <div className="flex flex-col">
                  <span className="text-xs">Not Available Yet</span>
                  <span className="text-sm font-bold">App Store</span>
                </div>
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