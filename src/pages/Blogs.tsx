import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, Heart, MessageCircle, Share } from "lucide-react";

const Blogs = () => {
  const articles = [
    {
      title: "10 Essential Tips for First-Time Dog Owners",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Dog Care",
      excerpt: "Bringing home your first dog is exciting but can be overwhelming. Here are the essential tips every new dog owner should know to ensure a smooth transition.",
      image: "🐕",
      likes: 234,
      comments: 18,
      tags: ["Dogs", "First-time", "Care Tips"]
    },
    {
      title: "Understanding Cat Behavior: Why Does My Cat Do That?",
      author: "Dr. Michael Chen",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Cat Behavior",
      excerpt: "Cats have unique behaviors that can puzzle their owners. Learn the science behind common feline behaviors and what your cat is trying to tell you.",
      image: "🐱",
      likes: 189,
      comments: 25,
      tags: ["Cats", "Behavior", "Understanding"]
    },
    {
      title: "The Complete Guide to Pet Nutrition",
      author: "Dr. Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Nutrition",
      excerpt: "Proper nutrition is fundamental to your pet's health. This comprehensive guide covers everything from choosing the right food to understanding nutritional needs.",
      image: "🥗",
      likes: 312,
      comments: 42,
      tags: ["Nutrition", "Health", "Diet"]
    },
    {
      title: "Emergency Pet Care: What Every Owner Should Know",
      author: "Dr. Robert Kim",
      date: "March 8, 2024",
      readTime: "8 min read",
      category: "Emergency Care",
      excerpt: "Emergencies can happen anytime. Learn how to recognize pet emergencies, provide first aid, and when to seek immediate veterinary care.",
      image: "🚨",
      likes: 156,
      comments: 33,
      tags: ["Emergency", "First Aid", "Safety"]
    },
    {
      title: "Creating a Pet-Friendly Home Environment",
      author: "Jessica Parker",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Home & Living",
      excerpt: "Transform your home into a safe, comfortable space for your pets. Tips on pet-proofing, creating cozy spaces, and choosing pet-safe products.",
      image: "🏠",
      likes: 278,
      comments: 19,
      tags: ["Home", "Safety", "Environment"]
    },
    {
      title: "The Benefits of Regular Exercise for Pets",
      author: "Mark Thompson",
      date: "March 3, 2024",
      readTime: "4 min read",
      category: "Exercise & Fitness",
      excerpt: "Just like humans, pets need regular exercise for optimal health. Learn about exercise requirements for different pets and fun activities to keep them active.",
      image: "🏃",
      likes: 145,
      comments: 12,
      tags: ["Exercise", "Health", "Activities"]
    }
  ];

  const categories = [
    "All Articles", "Dog Care", "Cat Care", "Exotic Pets", "Nutrition", "Health", "Behavior", "Training", "Emergency Care"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Pet Care Blog</h1>
          <p className="text-xl text-muted-foreground">
            Expert advice, tips, and insights for better pet care from veterinarians and pet professionals
          </p>
        </div>

        {/* Featured Article */}
        <Card className="mb-8 bg-gradient-hero text-white border-0">
          <CardContent className="p-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Featured Article
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              The Ultimate Guide to Pet Wellness in 2024
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Discover the latest trends in pet wellness, from nutrition innovations to mental health strategies that will keep your furry friends happy and healthy all year long.
            </p>
            <div className="flex items-center gap-4 text-sm opacity-80 mb-6">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                Dr. Amanda Foster
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                March 18, 2024
              </span>
              <span>12 min read</span>
            </div>
            <Button variant="secondary" size="lg">
              Read Full Article
            </Button>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
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
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search articles..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-card transition-shadow bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="text-4xl">{article.image}</div>
                </div>
                <CardTitle className="text-xl mb-2 hover:text-primary cursor-pointer">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {article.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {article.comments}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Share className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      Read More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 bg-gradient-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Pet Care Tips</h3>
            <p className="mb-6 opacity-90">
              Get weekly expert advice, health tips, and the latest pet care insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="text-primary">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;