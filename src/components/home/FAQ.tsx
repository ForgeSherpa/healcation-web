import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0 p-2">
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-primary">{question}</h3>
        <span className="flex items-center justify-center w-8 h-8 text-primary">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-4"
        >
          <p className="text-black/70">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How does Healcation\'s AI recommendation system work?',
      answer: 'Our AI analyzes your preferences, past trips, and travel style to recommend destinations, attractions, and accommodations that match your interests. The more you use Healcation, the more personalized your recommendations become.',
    },
    {
      question: 'Is Healcation available worldwide?',
      answer: 'Yes! Healcation covers destinations around the world. Our database includes over 100 countries and thousands of cities, with new locations added regularly.',
    },
    {
      question: 'Are there any subscription fees to use Healcation?',
      answer: 'Healcation is completely free to use! We believe in making travel planning accessible to everyone. You can explore destinations, get recommendations, and plan your trips without any costs (not even an ads!)',
    },
    {
      question: 'How does Healcation protect my privacy?',
      answer: 'Healcation did not save any personal data. We only require destination name and email, nothing more. Your email is stored and not shared with any third parties. We use industry-standard encryption to protect your data and ensure your privacy is always respected.',
    },
  ];

  return (
    <section id="faq" className="section bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Got questions about Healcation? We've got answers to help you get started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="max-w-xl mx-auto text-center mt-12">
          <p className="mb-6 text-lg text-black/80">
            Still have questions? We're here to help!
          </p>
          <a href="mailto:healcation@gmail.com" className="btn btn-primary">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;