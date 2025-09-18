import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Search, 
  ArrowLeft, 
  HelpCircle, 
  MapPin, 
  Heart,
  ShoppingBag,
  Calendar,
  FileText,
  Phone
} from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    {
      title: "Find Pet Services",
      description: "Discover veterinarians, pet stores, and care providers near you",
      icon: MapPin,
      link: "/shops",
      color: "bg-blue-500"
    },
    {
      title: "Veterinary Care",
      description: "Book appointments with trusted veterinarians",
      icon: Calendar,
      link: "/vets-care",
      color: "bg-green-500"
    },
    {
      title: "Pet Care Blog",
      description: "Expert advice and tips for better pet care",
      icon: FileText,
      link: "/blogs",
      color: "bg-purple-500"
    },
    {
      title: "Contact Support",
      description: "Get help from our support team",
      icon: Phone,
      link: "/contact",
      color: "bg-orange-500"
    }
  ];

  const popularPages = [
    { name: "Home", path: "/", icon: Home },
    { name: "Pet Shops", path: "/shops", icon: ShoppingBag },
    { name: "Veterinarians", path: "/vets-care", icon: Heart },
    { name: "Blog", path: "/blogs", icon: FileText },
    { name: "Contact", path: "/contact", icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        {/* Main 404 Content */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary mb-4">404</div>
            <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off like a curious pet. 
              Don't worry, we'll help you find your way back!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.link}>
                <Card className="hover:shadow-card transition-shadow bg-gradient-card border-border/50 h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center mx-auto mb-4`}>
                      <link.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Search Help */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Can't Find What You're Looking For?
              </CardTitle>
              <CardDescription>
                Try these helpful suggestions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium">Check the URL</p>
                    <p className="text-sm text-muted-foreground">Make sure the web address is spelled correctly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium">Use our navigation menu</p>
                    <p className="text-sm text-muted-foreground">Browse our main sections using the menu above</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium">Try our search feature</p>
                    <p className="text-sm text-muted-foreground">Search for services, articles, or information</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Help */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Still Need Help?
              </CardTitle>
              <CardDescription>
                Our support team is here to assist you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you're still having trouble finding what you need, don't hesitate to reach out to our support team.
              </p>
              <div className="space-y-3">
                <Link to="/contact">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  View Help Center
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        

        {/* Fun Pet Facts */}
        <Card className="mt-12 bg-gradient-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">🐾 Fun Pet Fact</h3>
            <p className="text-lg opacity-90 mb-4">
              Did you know that dogs have about 300 million olfactory receptors in their noses, 
              compared to about 6 million in humans? That's why they're such great detectives!
            </p>
            <p className="text-sm opacity-75">
              While you're here, why not explore our pet care resources and find something amazing for your furry friend?
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
