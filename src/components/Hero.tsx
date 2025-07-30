
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <img
      src="/lovable-uploads/PETAERA COMPLETE LOGO.png"
      alt="PetaEra Logo"
      className="h-24 w-auto"
    />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
              Smarter Parking Starts Here
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Manage, Monitor, and Optimize Your Parking Space with PetaParking
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:block"
          >
            <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg shadow-xl">
              <img
                src="/lovable-uploads/ec762e02-6f47-4602-8e56-0f9fef533fe2.png"
                alt="PetaParking Dashboard"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </AspectRatio>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
