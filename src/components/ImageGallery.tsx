
import { Card, CardContent } from "@/components/ui/card";

const ImageGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/93f99e44-dbe0-4021-ae13-f52004cd7e48.png",
      alt: "PetaParking Module Front View"
    },
    {
      src: "/lovable-uploads/06983b8a-c52e-44db-b99d-c2d5854fd21e.png",
      alt: "PetaParking Module Side View"
    },
    {
      src: "/lovable-uploads/d5b703ac-03c0-4261-9cc2-a3017541c0d3.png",
      alt: "PetaParking Module Angle View"
    },
    {
      src: "/lovable-uploads/25b89c1f-1fbf-49bb-a5f9-13e3dec7e143.png",
      alt: "PetaParking Module with Ports"
    },
    {
      src: "/lovable-uploads/ec762e02-6f47-4602-8e56-0f9fef533fe2.png",
      alt: "PetaParking App Interface"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Our Hardware Module
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The PetaParking smart module connects your cameras and sensors to our cloud platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[300px] object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
