import { SignUp } from '@clerk/clerk-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  UserPlus,
  Heart,
  Shield,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
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
          {/* Left Column (mobile-first order) */}
          <div className="space-y-6 order-1">
            {/* Welcome Message */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h2 className="text-2xl font-bold mb-4">Welcome to ClosetPet!</h2>
                <p className="text-lg opacity-90">
                  Join thousands of pet owners who trust us with their furry family members' care.
                </p>
              </CardContent>
            </Card>

            {/* Sign Up Form */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <UserPlus className="h-6 w-6" />
                  Join ClosetPet
                </CardTitle>
                <CardDescription>
                  Create your account to access personalized pet care services
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex justify-center">
                  <SignUp
                    afterSignUpUrl="/dashboard"
                    afterSignInUrl="/dashboard"
                    appearance={{
                      elements: {
                        formButtonPrimary:
                          "bg-gradient-primary hover:opacity-90 text-primary-foreground",
                        card: "shadow-none border-none bg-transparent",
                        headerTitle: "hidden",
                        headerSubtitle: "hidden",
                        socialButtonsBlockButton: "border-border hover:bg-muted",
                        formFieldInput: "border-border focus:border-primary",
                        footerActionLink:
                          "text-primary hover:text-primary/80",
                      },
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Already Have Account */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Already have an account?
                </p>
                <Link to="/sign-in">
                  <Button variant="outline" className="w-full">
                    Sign In Instead
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Right Column (benefits section for large screens) */}
          <div className="space-y-6 order-2">
            {/* Benefits */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Why Join ClosetPet?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Find Trusted Pet Services</p>
                      <p className="text-sm text-muted-foreground">
                        Access verified veterinarians, pet stores, and care providers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Book Appointments Easily</p>
                      <p className="text-sm text-muted-foreground">
                        Schedule vet visits and services with just a few clicks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Expert Pet Care Advice</p>
                      <p className="text-sm text-muted-foreground">
                        Get tips and insights from veterinary professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Personalized Recommendations</p>
                      <p className="text-sm text-muted-foreground">
                        Services tailored to your pet's specific needs
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="gap-1">
                <Shield className="h-3 w-3" />
                Secure
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Heart className="h-3 w-3" />
                Pet-Focused
              </Badge>
              <Badge variant="outline" className="gap-1">
                <CheckCircle className="h-3 w-3" />
                Verified
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUpPage;
