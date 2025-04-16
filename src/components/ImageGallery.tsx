
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const ImageGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/93f99e44-dbe0-4021-ae13-f52004cd7e48.png",
      alt: "PetaParking Module Front View",
      caption: "Sleek and Modern Design with Integrated Thermal Printer"
    },
    {
      src: "/lovable-uploads/06983b8a-c52e-44db-b99d-c2d5854fd21e.png",
      alt: "PetaParking Module Side View",
      caption: "Advanced Cooling System Integration"
    },
    {
      src: "/lovable-uploads/d5b703ac-03c0-4261-9cc2-a3017541c0d3.png",
      alt: "PetaParking Module Angle View",
      caption: "Compact Form Factor for Easy Installation"
    },
    {
      src: "/lovable-uploads/25b89c1f-1fbf-49bb-a5f9-13e3dec7e143.png",
      alt: "PetaParking Module with Ports",
      caption: "Multiple Ports for Camera and Network Integration"
    },
    // {
    //   src: "/lovable-uploads/ec762e02-6f47-4602-8e56-0f9fef533fe2.png",
    //   alt: "PetaParking App Interface",
    //   caption: "Intuitive Dashboard for Real-time Monitoring"
    // }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Intelligent Hardware Module
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Built for 24/7 Performance with Advanced Cooling Technology
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden bg-white hover:bg-gray-50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 group-hover:text-black transition-colors duration-300">
                      {image.caption}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
