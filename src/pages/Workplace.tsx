import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Briefcase, Clock, DollarSign } from "lucide-react";

const Workplace = () => {
  const jobs = [
    {
      title: "Veterinary Assistant",
      company: "Compassionate Animal Clinic",
      location: "Downtown",
      type: "Full-time",
      salary: "$35,000 - $45,000",
      posted: "2 days ago",
      description: "Join our caring team as a veterinary assistant. Help provide excellent care to animals while supporting veterinarians in daily operations.",
      requirements: ["High school diploma", "Animal handling experience", "Strong communication skills"],
      benefits: ["Health insurance", "Paid time off", "Training provided"]
    },
    {
      title: "Pet Groomer",
      company: "Pawsome Grooming Salon",
      location: "Midtown",
      type: "Part-time",
      salary: "$20 - $30/hour",
      posted: "5 days ago",
      description: "Experienced pet groomer needed for busy salon. Must be skilled in various grooming techniques and comfortable with all dog breeds and sizes.",
      requirements: ["Grooming certification", "2+ years experience", "Own grooming tools preferred"],
      benefits: ["Flexible schedule", "Commission bonuses", "Continuing education"]
    },
    {
      title: "Dog Walker & Pet Sitter",
      company: "Happy Paws Services",
      location: "Various neighborhoods",
      type: "Freelance",
      salary: "$15 - $25/hour",
      posted: "1 week ago",
      description: "Looking for reliable pet sitters and dog walkers to join our network. Set your own schedule and work with amazing pets in your area.",
      requirements: ["Love for animals", "Reliable transportation", "Background check"],
      benefits: ["Flexible schedule", "Work with pets", "Growing client base"]
    },
    {
      title: "Pet Store Manager",
      company: "Pet Paradise",
      location: "Westside",
      type: "Full-time",
      salary: "$50,000 - $65,000",
      posted: "3 days ago",
      description: "Manage daily operations of our popular pet store. Lead a team, handle inventory, and provide excellent customer service to pet owners.",
      requirements: ["Management experience", "Retail background", "Pet knowledge"],
      benefits: ["Management bonus", "Employee discount", "Career advancement"]
    }
  ];

  const categories = [
    "Veterinary", "Grooming", "Pet Sitting", "Training", "Retail", "Breeding", "Emergency Care", "All Jobs"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Pet Industry Careers</h1>
          <p className="text-xl text-muted-foreground">
            Find rewarding career opportunities in the pet care industry
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <Briefcase className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">150+</div>
              <p className="text-sm opacity-90">Open Positions</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-accent/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold mb-1 text-accent">$45K</div>
              <p className="text-sm text-muted-foreground">Average Salary</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold mb-1 text-primary">24</div>
              <p className="text-sm text-muted-foreground">New Jobs This Week</p>
            </CardContent>
          </Card>
        </div>

        {/* Job Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Job Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for jobs, companies, or keywords..."
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
            <Button className="bg-gradient-primary hover:opacity-90">
              Search Jobs
            </Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <Card key={index} className="hover:shadow-card transition-shadow bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <CardDescription className="flex flex-wrap items-center gap-4">
                      <span className="font-medium">{job.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <Badge variant="secondary">{job.type}</Badge>
                      <span className="text-green-600 font-medium">{job.salary}</span>
                    </CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {job.posted}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-accent rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Apply Now
                  </Button>
                  <Button variant="outline">
                    Save Job
                  </Button>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Jobs
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Workplace;