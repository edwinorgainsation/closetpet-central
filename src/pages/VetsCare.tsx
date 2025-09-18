import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Clock, Phone, Calendar } from "lucide-react";

const VetsCare = () => {
  const veterinarians = [
    {
      name: "Dr. Sarah Johnson",
      clinic: "Compassionate Animal Clinic",
      rating: 4.9,
      distance: "1.2 miles",
      specialty: "General Practice",
      description: "Experienced veterinarian specializing in preventive care and emergency services",
      availability: "Open Now",
      phone: "(555) 123-4567",
      services: ["Vaccination", "Surgery", "Emergency Care"]
    },
    {
      name: "Dr. Michael Chen",
      clinic: "City Pet Hospital",
      rating: 4.8,
      distance: "2.8 miles",
      specialty: "Exotic Animals",
      description: "Specialist in exotic pets, birds, and small mammals with 15+ years experience",
      availability: "Opens at 8 AM",
      phone: "(555) 987-6543",
      services: ["Exotic Care", "Surgery", "Dental"]
    },
    {
      name: "Dr. Emily Rodriguez",
      clinic: "Gentle Paws Veterinary",
      rating: 4.7,
      distance: "3.1 miles",
      specialty: "Orthopedic Surgery",
      description: "Board-certified surgeon specializing in orthopedic and soft tissue procedures",
      availability: "By Appointment",
      phone: "(555) 456-7890",
      services: ["Orthopedic", "Surgery", "Rehabilitation"]
    },
    {
      name: "Dr. Robert Kim",
      clinic: "24/7 Animal Emergency",
      rating: 4.6,
      distance: "4.5 miles",
      specialty: "Emergency Medicine",
      description: "Round-the-clock emergency care for critical and urgent pet medical needs",
      availability: "24/7 Emergency",
      phone: "(555) 911-PETS",
      services: ["Emergency", "Critical Care", "ICU"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Veterinarians & Pet Care</h1>
          <p className="text-xl text-muted-foreground">
            Find trusted veterinarians and pet care professionals in your area
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Book Appointment</h3>
              <p className="text-sm opacity-90">Schedule routine checkups</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-destructive/20">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-2 text-destructive" />
              <h3 className="font-semibold mb-1">Emergency Care</h3>
              <p className="text-sm text-muted-foreground">24/7 urgent pet care</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-accent/20">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-accent" />
              <h3 className="font-semibold mb-1">Vaccination Reminders</h3>
              <p className="text-sm text-muted-foreground">Stay up to date</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for veterinarians, clinics, or specialties..."
                className="pl-10"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Location"
                className="pl-10 md:w-64"
              />
            </div>
          </div>
        </div>

        {/* Veterinarians List */}
        <div className="space-y-6">
          {veterinarians.map((vet, index) => (
            <Card key={index} className="hover:shadow-card transition-shadow bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      {vet.name}
                      <Badge variant="secondary" className="text-xs">
                        {vet.specialty}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {vet.rating}
                      </span>
                      <span>{vet.distance}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {vet.availability}
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-lg mb-2">{vet.clinic}</h4>
                <p className="text-muted-foreground mb-4">{vet.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {vet.services.map((service, serviceIndex) => (
                    <Badge key={serviceIndex} variant="outline">
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    {vet.phone}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      Call Now
                    </Button>
                    <Button className="bg-gradient-primary hover:opacity-90">
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Veterinarians
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VetsCare;