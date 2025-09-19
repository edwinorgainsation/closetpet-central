import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container px-4  py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ClosetPet</h3>
            <p className="text-primary-foreground/80">
              Your one-stop platform for all pet services. From shopping to veterinary care, we connect pet owners with the best local services.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-white/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-white/20">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/shops" className="hover:text-white transition-colors">Pet Shops</a></li>
              <li><a href="/vets-care" className="hover:text-white transition-colors">Veterinary Care</a></li>
              <li><a href="/workplace" className="hover:text-white transition-colors">Pet Workplace</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pet Breeding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pet Exchange</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vaccination</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/blogs" className="hover:text-white transition-colors">Pet Care Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@closetpet.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+2349012675868</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Available Nationwide</span>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-primary-foreground/80 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 ClosetPet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;