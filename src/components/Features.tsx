
import {
  Camera,
  LogIn,
  Printer,
  Activity,
  Smartphone,
  BarChart3,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Automatic Vehicle Detection",
    description: "Real-time number plate & vehicle type recognition using IP cameras",
    icon: Camera,
  },
  {
    title: "Smart Entry & Exit Logging",
    description: "Secure and accurate vehicle entry/exit logging",
    icon: LogIn,
  },
  {
    title: "Instant Slip Generation",
    description: "Thermal printer supported; print vehicle entry slips in seconds",
    icon: Printer,
  },
  {
    title: "Live Monitoring Dashboard",
    description: "Track current parked vehicles and overdue ones",
    icon: Activity,
  },
  {
    title: "Mobile Access",
    description: "Employees and owners can manage from anywhere",
    icon: Smartphone,
  },
  {
    title: "Financial Reporting",
    description: "Track income, slips, and payment history seamlessly",
    icon: BarChart3,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Powerful Features for Modern Parking
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your parking space efficiently
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
