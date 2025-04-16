
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const plans = [
  {
    name: "Small Business",
    description: "Perfect for small parking lots",
    features: ["Up to 50 parking spots", "Basic reporting", "Email support"],
  },
  {
    name: "Medium Business",
    description: "Ideal for growing facilities",
    features: ["Up to 200 parking spots", "Advanced analytics", "Priority support"],
  },
  {
    name: "Enterprise",
    description: "For large parking operations",
    features: ["Unlimited parking spots", "Custom features", "24/7 support"],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible pricing for parking lots of all sizes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-primary mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6">
              <Button className="w-full bg-primary hover:bg-primary/90">
  <a href="mailto:petaerallp@gmail.com?subject=We%20are%20interested%20in%20PetaParking,%20let%20me%20know%20more%20about%20it!">
    Book a Demo
  </a>
</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
