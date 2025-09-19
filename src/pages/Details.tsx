import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Star, 
  Clock, 
  Phone, 
  Mail, 
  Calendar,
  Heart,
  Share,
  ArrowLeft,
  CheckCircle,
  Users,
  Award,
  Shield
} from "lucide-react";

const Details = () => {
  const { id, type } = useParams();
  
  // Mock data - in a real app, this would come from an API based on the id and type
  const getDetailsData = () => {
    if (type === "shop") {
      return {
        name: "Pawsome Pet Store",
        type: "Pet Store",
        rating: 4.8,
        reviews: 127,
        distance: "2.1 miles",
        address: "123 Pet Street, Animal City, AC 12345",
        phone: "(555) 123-4567",
        email: "info@pawsomepetstore.com",
        website: "www.pawsomepetstore.com",
        hours: {
          monday: "9:00 AM - 8:00 PM",
          tuesday: "9:00 AM - 8:00 PM", 
          wednesday: "9:00 AM - 8:00 PM",
          thursday: "9:00 AM - 8:00 PM",
          friday: "9:00 AM - 9:00 PM",
          saturday: "10:00 AM - 6:00 PM",
          sunday: "11:00 AM - 5:00 PM"
        },
        description: "Premium pet food, toys, and accessories for all your furry friends. We've been serving the community for over 15 years with quality products and expert advice.",
        image: "https://images.unsplash.com/photo-1703145204783-d7de7ad7070b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxwZXQlMjBzdG9yZSUyMHN0b3JlZnJvbnQlMjBzaG9wJTIwcmV0YWlsfGVufDB8MHx8fDE3NTgyMDQ5NDd8MA&ixlib=rb-4.1.0&q=85",
        imageAlt: "Modern pet store storefront with large windows",
        tags: ["Food", "Toys", "Accessories", "Grooming"],
        services: [
          "Pet Food & Treats",
          "Toys & Accessories", 
          "Grooming Services",
          "Pet Training Classes",
          "Veterinary Referrals",
          "Pet Adoption Events"
        ],
        features: [
          "Free parking available",
          "Pet-friendly store",
          "Expert staff consultation",
          "Online ordering with pickup",
          "Loyalty rewards program"
        ],
        verified: true,
        established: "2008"
      };
    } else if (type === "vet") {
      return {
        name: "Dr. Sarah Johnson",
        type: "Veterinarian",
        rating: 4.9,
        reviews: 89,
        distance: "1.2 miles",
        address: "456 Animal Care Blvd, Pet City, PC 54321",
        phone: "(555) 987-6543",
        email: "dr.johnson@compassionatevet.com",
        website: "www.compassionatevet.com",
        hours: {
          monday: "8:00 AM - 6:00 PM",
          tuesday: "8:00 AM - 6:00 PM",
          wednesday: "8:00 AM - 6:00 PM", 
          thursday: "8:00 AM - 6:00 PM",
          friday: "8:00 AM - 5:00 PM",
          saturday: "9:00 AM - 2:00 PM",
          sunday: "Emergency Only"
        },
        description: "Experienced veterinarian specializing in preventive care and emergency services. Dr. Johnson has been practicing for over 12 years with a focus on compassionate care.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx2ZXRlcmluYXJpYW4lMjBkb2N0b3IlMjBwZXQlMjBjYXJlJTIwY2xpbmljfGVufDB8MHx8fDE3NTgyMDQ5NDd8MA&ixlib=rb-4.1.0&q=85",
        imageAlt: "Professional veterinarian examining a dog",
        tags: ["General Practice", "Emergency Care", "Surgery"],
        services: [
          "Annual Checkups",
          "Vaccinations",
          "Dental Care",
          "Surgery",
          "Emergency Care",
          "Pet Boarding"
        ],
        features: [
          "24/7 Emergency Service",
          "Modern Equipment",
          "Compassionate Care",
          "Payment Plans Available",
          "Pet Insurance Accepted"
        ],
        verified: true,
        established: "2012"
      };
    }
    
    return null;
  };

  const data = getDetailsData();

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container px-4  py-8">
          <Card className="text-center">
            <CardContent className="p-8">
              <h1 className="text-2xl font-bold mb-4">Details Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The requested details could not be found.
              </p>
              <Link to="/">
                <Button>Go Home</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to={`/${type === "shop" ? "shops" : type === "vet" ? "vets-care" : ""}`}>
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to {type === "shop" ? "Shops" : type === "vet" ? "Vets" : "List"}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={data.image}
                      alt={data.imageAlt}
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{data.type}</Badge>
                          {data.verified && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              <Shield className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{data.rating}</span>
                        <span>({data.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{data.distance}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{data.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Services Offered</CardTitle>
                <CardDescription>
                  What we can help you with
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {data.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Features & Amenities</CardTitle>
                <CardDescription>
                  What makes us special
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {data.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{data.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${data.phone}`} className="text-sm hover:text-primary">
                    {data.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${data.email}`} className="text-sm hover:text-primary">
                    {data.email}
                  </a>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(data.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="capitalize font-medium">{day}</span>
                      <span className="text-muted-foreground">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {type === "vet" ? (
                  <Link to={`/book-appointment/${id}`}>
                    <Button variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                )}
                <Button variant="outline" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
                <Button variant="outline" className="w-full">
                  <Share className="h-4 w-4 mr-2" />
                  Share Location
                </Button>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {data.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Details;
