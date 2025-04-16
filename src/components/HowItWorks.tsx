
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Install Cameras & Raspberry Pi",
    description: "Set up the hardware components at your parking facility",
  },
  {
    number: "2",
    title: "Connect to PetaParking Cloud",
    description: "Link your system to our secure cloud infrastructure",
  },
  {
    number: "3",
    title: "Start Managing Your Parking Lot",
    description: "Begin monitoring and managing your parking space efficiently",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with PetaParking in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
