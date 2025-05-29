import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, Heart, MapPin } from 'lucide-react'

export const Route = createFileRoute('/$')({
    component: NotFoundPage,
})

function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5 flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Animated 404 */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 leading-none">
                        404
                    </h1>
                </motion.div>

                {/* Main content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
                        Looks like you've wandered off the beaten path. This page seems to have taken an unexpected vacation!
                    </p>
                    <p className="text-lg text-gray-500 max-w-xl mx-auto">
                        Don't worry, even the best travelers get lost sometimes. Let's get you back on track to discover amazing destinations.
                    </p>
                </motion.div>

                {/* Floating elements */}
                <div className="relative mb-12">
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-8 left-1/4 text-primary/30"
                    >
                        <MapPin size={48} />
                    </motion.div>
                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -top-4 right-1/4 text-accent/40"
                    >
                        <Heart size={40} />
                    </motion.div>
                    <motion.div
                        animate={{ y: [-5, 15, -5] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-4 left-1/3 text-primary/20"
                    >
                        <Search size={36} />
                    </motion.div>
                </div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <Link
                        to="/"
                        className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <Home size={20} />
                        <span className="font-medium">Back to Home</span>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="group flex items-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Go Back</span>
                    </button>
                </motion.div>

                {/* Footer message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-12 text-gray-400"
                >
                    <p>Lost but not forgotten - every journey has its detours! ✈️</p>
                </motion.div>
            </div>
        </div>
    )
}
