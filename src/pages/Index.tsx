import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import LocationSearch from "@/components/LocationSearch";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  RefreshCw, 
  Heart, 
  Package, 
  Syringe,
  Star,
  Users,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

const Index = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  const services = [
    {
      title: "Buy Pets",
      description: "Find your perfect companion from verified breeders and shelters",
      icon: ShoppingBag,
    },
    {
      title: "Adoption & Rehoming",
      description: "Connect with other pet owners for breeding or rehoming",
      icon: RefreshCw,
    },
    {
      title: "Breeding",
      description: "Professional breeding services and genetic matching",
      icon: Heart,
    },
    {
      title: "Pet Products", 
      description: "Everything your pet needs - food, toys, accessories",
      icon: Package,
    },
    {
      title: "Vaccination",
      description: "Schedule vaccinations and health checkups nearby",
      icon: Syringe,
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Pet Owners", icon: Users },
    { number: "1K+", label: "Verified Providers", icon: Award },
    { number: "4.9/5", label: "Average Rating", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
              Everything Your Pet
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Needs in One Place
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with trusted pet services, products, and professionals in your area. 
              From adoption to care, we've got your furry friends covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg bg-gradient-hero px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Search */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 ">
          <LocationSearch />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Comprehensive Pet Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking for a new companion or caring for your current pet, 
              we connect you with the best services in your area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                onClick={() => setSelectedService(service.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-gradient-primary p-3 w-fit">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Give Your Pet the Best?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of pet owners who trust ClosetPet for all their pet care needs.
          </p>
          <a href="/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Your Journey
            </Button>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;