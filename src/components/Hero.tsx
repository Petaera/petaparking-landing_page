
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="flex items-center mb-8">
              <img
                src="/lovable-uploads/29bb7e4c-5643-4e02-ac91-f4ed88166a44.png"
                alt="PetaParking Logo"
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
              Smarter Parking Starts Here
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Manage, Monitor, and Optimize Your Parking Space with PetaParking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Download on Android
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download on iOS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative lg:block">
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/ec762e02-6f47-4602-8e56-0f9fef533fe2.png"
                alt="PetaParking Dashboard"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
