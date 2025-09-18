import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Filter } from "lucide-react";

const Shops = () => {
  const shops = [
    {
      name: "Pawsome Pet Store",
      rating: 4.8,
      distance: "2.1 miles",
      category: "Pet Supplies",
      description: "Premium pet food, toys, and accessories for all your furry friends",
      image: "🏪",
      tags: ["Food", "Toys", "Accessories"]
    },
    {
      name: "Fur & Feathers",
      rating: 4.9,
      distance: "3.5 miles", 
      category: "Pet Store",
      description: "Specialized in exotic pets and unique pet supplies",
      image: "🦜",
      tags: ["Exotic Pets", "Birds", "Reptiles"]
    },
    {
      name: "Happy Tails Market",
      rating: 4.7,
      distance: "1.8 miles",
      category: "Organic Pet Food",
      description: "Organic and natural pet food, treats, and health supplements",
      image: "🌱",
      tags: ["Organic", "Natural", "Health"]
    },
    {
      name: "Pet Paradise",
      rating: 4.6,
      distance: "4.2 miles",
      category: "Full Service",
      description: "One-stop shop for all pet needs including grooming services",
      image: "🏬",
      tags: ["Grooming", "Full Service", "Supplies"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Pet Shops Near You</h1>
          <p className="text-xl text-muted-foreground">
            Find the best pet stores, supplies, and products in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for pet stores, products, or brands..."
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
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {shops.map((shop, index) => (
            <Card key={index} className="hover:shadow-card transition-shadow bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{shop.image}</div>
                    <div>
                      <CardTitle className="text-xl">{shop.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {shop.rating} • {shop.distance} • {shop.category}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{shop.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {shop.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                    Visit Store
                  </Button>
                  <Button variant="outline">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Shops
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shops;