import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 mb-12"
        >
          <div className="flex items-center justify-center">
            <img
              src="/lovable-uploads/29bb7e4c-5643-4e02-ac91-f4ed88166a44.png"
              alt="PetaParking Logo"
              className="h-16 w-auto"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              variant="outline" 
              className="bg-black hover:bg-gray-900 text-white"
            >
              Download on Android
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-black hover:bg-gray-900 text-white"
            >
              Download on iOS
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">PetaParking</h3>
            <p className="text-gray-400">Smart Parking Management System</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Download</h3>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-400 hover:text-white p-0">
                Android App
              </Button>
              <br />
              <Button variant="link" className="text-gray-400 hover:text-white p-0">
                iOS App
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="space-y-2">
              <Button variant="https://petaera.com/PetaParking_terms/" className="text-gray-400 hover:text-white p-0">
                Terms of Service
              </Button>
              <br />
              <Button variant="https://petaera.com/PetaParking_privacy/" className="text-gray-400 hover:text-white p-0">
                Privacy Policy
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-gray-400">Petaerallp@gmail.com</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Petaera Technologies. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
