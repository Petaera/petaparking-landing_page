
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
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
              <Button variant="link" className="text-gray-400 hover:text-white p-0">
                Terms of Service
              </Button>
              <br />
              <Button variant="link" className="text-gray-400 hover:text-white p-0">
                Privacy Policy
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-gray-400">support@petaparking.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PetaParking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
