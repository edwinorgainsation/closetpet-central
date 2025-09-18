import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Heart, 
  MessageCircle, 
  Share,
  Clock,
  Tag
} from "lucide-react";
import { getArticleById } from "@/data/blogArticles";
import { authors } from "@/data/authors";

const BlogDetails = () => {
  const { id } = useParams();
  const article = getArticleById(id || "");

  const getInitialsFromName = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  const getAuthorById = (authorId: string) => {
    return authors.find(author => author.id === authorId);
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-8">
          <Card className="text-center">
            <CardContent className="p-8">
              <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The requested blog article could not be found.
              </p>
              <Link to="/blogs">
                <Button>Back to Blog</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const author = getAuthorById(article.authorId);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/blogs">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <Card className="bg-gradient-card border-border/50 mb-8">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4">{article.category}</Badge>
                  <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                  <p className="text-xl text-muted-foreground mb-6">{article.excerpt}</p>
                </div>

                {/* Article Meta */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {author && (
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage className="object-cover" src={author.avatar} alt={author.name} />
                          <AvatarFallback>{getInitialsFromName(author.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{author.name}</p>
                          <p className="text-sm text-muted-foreground">Author</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{article.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{article.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-8">
                  <Button variant="outline" className="gap-2">
                    <Heart className="h-4 w-4" />
                    Like ({article.likes})
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Share className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Comment ({article.comments})
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article Content */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  {article.content.split('\n').map((paragraph, index) => {
                    if (paragraph.trim() === '') return <br key={index} />;
                    
                    if (paragraph.startsWith('# ')) {
                      return <h1 key={index} className="text-3xl font-bold mb-6 mt-8">{paragraph.slice(2)}</h1>;
                    }
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={index} className="text-2xl font-bold mb-4 mt-6">{paragraph.slice(3)}</h2>;
                    }
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={index} className="text-xl font-semibold mb-3 mt-4">{paragraph.slice(4)}</h3>;
                    }
                    if (paragraph.startsWith('- ')) {
                      return <li key={index} className="mb-2">{paragraph.slice(2)}</li>;
                    }
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return <p key={index} className="font-semibold mb-4">{paragraph.slice(2, -2)}</p>;
                    }
                    
                    return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Author Bio */}
            {author && (
              <Card className="mt-8 bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">About the Author</h3>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage className="object-cover" src={author.avatar} alt={author.name} />
                      <AvatarFallback>{getInitialsFromName(author.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{author.name}</h4>
                      <p className="text-muted-foreground">{author.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Articles */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Related Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* This would be populated with related articles in a real app */}
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-sm">Essential Dog Care Guide</h4>
                    <p className="text-xs text-muted-foreground">Everything new pet owners need to know</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-sm">Cat Nutrition Basics</h4>
                    <p className="text-xs text-muted-foreground">Understanding your feline's dietary needs</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-sm">Puppy Training Fundamentals</h4>
                    <p className="text-xs text-muted-foreground">Building a well-behaved companion</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Stay Updated</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest pet care tips delivered to your inbox.
                </p>
                <Button variant="secondary" className="text-primary w-full">
                  Subscribe
                </Button>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Dog Care", "Cat Care", "Nutrition", "Health", "Training", "Emergency Care"].map((category) => (
                    <div key={category} className="flex items-center justify-between text-sm">
                      <span>{category}</span>
                      <Badge variant="outline" className="text-xs">
                        {Math.floor(Math.random() * 10) + 1}
                      </Badge>
                    </div>
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

export default BlogDetails;
