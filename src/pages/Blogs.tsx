import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, Heart, MessageCircle, Share } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authors } from "@/data/authors";

const Blogs = () => {
  const articles = [
    // [Same article objects as before — not repeated here to save space]
    // Just reuse the same article list you already have.
  ];

  const categories = [
    "All Articles", "Dog Care", "Cat Care", "Exotic Pets", "Nutrition", "Health", "Behavior", "Training", "Emergency Care"
  ];

  const getInitialsFromName = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

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
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-card transition-shadow bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                  />
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

        {/* Meet Our Team */}
        <Card className="mt-12 bg-gradient-card border-border/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Meet Our Development Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authors.map((author) => {
                const imageSrc = author.avatar;
                return (
                  <div className="text-center" key={author.id}>
                    <Avatar className="h-20 w-20 mx-auto mb-4">
                      <AvatarImage className="object-cover" src={imageSrc} alt={`${author.name} - ${author.role}`} />
                      <AvatarFallback>{getInitialsFromName(author.name)}</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold text-lg">{author.name}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{author.role}</p>
                    <p className="text-xs text-muted-foreground">{author.bio}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Our team is dedicated to connecting pet owners with the best local services through innovative technology.
              </p>
              <Button variant="outline">Join Our Team</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
