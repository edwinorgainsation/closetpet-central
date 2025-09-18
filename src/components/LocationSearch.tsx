import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LocationSearch = () => {
  const [location, setLocation] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const services = [
    "Buy Pets", "Adoption & Rehoming", "Breeding", "Pet Products", "Vaccination", "All Services"
  ];

  const handleSearch = () => {
    if (!location.trim()) return;
    
    // TODO: Implement actual search functionality
    console.log(`Searching for ${selectedService || 'all services'} in ${location}`);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-card bg-card/80 backdrop-blur-sm border-border/50">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-2">Find Pet Services Near You</h3>
            <p className="text-muted-foreground">
              Select a service and enter your location to get started
            </p>
          </div>
          
          {/* Service Selection */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {services.map((service) => (
              <Button
                key={service}
                variant={selectedService === service ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedService(service)}
                className={
                  selectedService === service
                    ? "bg-gradient-primary hover:opacity-90"
                    : "hover:bg-secondary"
                }
              >
                {service}
              </Button>
            ))}
          </div>

          {/* Location Search */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Enter your city, state, or zip code"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 h-12"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button 
              onClick={handleSearch}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 px-8"
              disabled={!location.trim()}
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationSearch;