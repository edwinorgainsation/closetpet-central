import { SignIn } from '@clerk/clerk-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LogIn,
  Heart,
  Shield,
  CheckCircle,
  ArrowLeft,
  UserPlus
} from "lucide-react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Always First on Mobile */}
          <div className="space-y-6 order-1">
            {/* Welcome Card */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
                <p className="text-lg opacity-90">
                  Continue your pet care journey with personalized services and expert advice.
                </p>
              </CardContent>
            </Card>

            {/* Sign In Form (comes after welcome in mobile) */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <LogIn className="h-6 w-6" />
                  Sign In
                </CardTitle>
                <CardDescription>
                  Access your personalized pet care dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex justify-center">
                  <SignIn
                    afterSignInUrl="/dashboard"
                    appearance={{
                      elements: {
                        formButtonPrimary: "bg-gradient-primary hover:opacity-90 text-primary-foreground",
                        card: "shadow-none border-none bg-transparent",
                        headerTitle: "hidden",
                        headerSubtitle: "hidden",
                        socialButtonsBlockButton: "border-border hover:bg-muted",
                        formFieldInput: "border-border focus:border-primary",
                        footerActionLink: "text-primary hover:text-primary/80"
                      }
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Don't Have Account */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground mb-4">
                  New to ClosetPet?
                </p>
                <Link to="/sign-up">
                  <Button variant="outline" className="w-full gap-2">
                    <UserPlus className="h-4 w-4" />
                    Create Account
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Only seen as sidebar on larger screens */}
          <div className="space-y-6 order-2">
            {/* Features */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Your Pet Care Hub
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Manage Appointments</p>
                      <p className="text-sm text-muted-foreground">
                        View and reschedule your pet's upcoming visits
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Pet Profiles</p>
                      <p className="text-sm text-muted-foreground">
                        Keep track of your pets' health records and preferences
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Service History</p>
                      <p className="text-sm text-muted-foreground">
                        Access past appointments and care recommendations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Personalized Recommendations</p>
                      <p className="text-sm text-muted-foreground">
                        Get tailored suggestions based on your pet's needs
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Access */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-center">Quick Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/vets-care">
                    <Button variant="outline" className="w-full text-sm">
                      Find Vets
                    </Button>
                  </Link>
                  <Link to="/shops">
                    <Button variant="outline" className="w-full text-sm">
                      Pet Stores
                    </Button>
                  </Link>
                  <Link to="/blogs">
                    <Button variant="outline" className="w-full text-sm">
                      Pet Blog
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full text-sm">
                      Support
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="gap-1">
                <Shield className="h-3 w-3" />
                Secure Login
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Heart className="h-3 w-3" />
                Pet-Focused
              </Badge>
              <Badge variant="outline" className="gap-1">
                <CheckCircle className="h-3 w-3" />
                Trusted
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignInPage;
