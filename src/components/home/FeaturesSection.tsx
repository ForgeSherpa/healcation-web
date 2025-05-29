import { motion } from 'framer-motion';
import { 
  Brain, 
  Map, 
  Hotel, 
  Camera, 
  Navigation, 
  Route, 
  Sparkles, 
  Clock 
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Brain className="text-primary" size={28} />,
      title: 'AI-Powered Recommendations',
      description: 'Our smart algorithm learns your preferences to suggest destinations you\'ll love.',
    },
    {
      icon: <Map className="text-primary" size={28} />,
      title: 'Destination Explorer',
      description: 'Browse trending destinations or search for your dream vacation spot.',
    },
    {
      icon: <Hotel className="text-primary" size={28} />,
      title: 'Smart Accommodation Guide',
      description: 'Get AI-curated recommendations for hotels and stays that match your preferences.',
    },
    {
      icon: <Camera className="text-primary" size={28} />,
      title: 'Attraction Highlights',
      description: 'Discover must-see attractions and hidden gems at your destination.',
    },
    {
      icon: <Navigation className="text-primary" size={28} />,
      title: 'Local Experiences',
      description: 'Find authentic local experiences curated by travel experts.',
    },
    {
      icon: <Route className="text-primary" size={28} />,
      title: 'Itinerary Builder',
      description: 'Create day-by-day itineraries optimized for your travel style.',
    },
    {
      icon: <Sparkles className="text-primary" size={28} />,
      title: 'Personalized Insights',
      description: 'Get tailored travel tips and insights based on your interests and travel history.',
    },
    {
      icon: <Clock className="text-primary" size={28} />,
      title: 'Real-time Updates',
      description: 'Receive important travel alerts and updates about your booking.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Healcation combines AI with human expertise to make your vacation planning effortless and enjoyable.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-background">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary">{feature.title}</h3>
              <p className="text-black/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;