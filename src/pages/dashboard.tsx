// src/components/Dashboard.tsx
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import supabase from "../integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { user } = useUser();

  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from("users").select("*");

      if (error) console.error("Supabase Error:", error.message);
      else console.log("Supabase Connected ✅", data);
    };

    testConnection();
  }, []);

  useEffect(() => {
    const syncUser = async () => {
      if (!user) return;

      const { error } = await supabase
        .from("users")
        .upsert([
          {
            id: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            name: user.fullName,
          },
        ]);

      if (error) {
        console.error("Supabase sync error:", error);
      }
    };

    syncUser();
  }, [user]);

  return (
    <div className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Welcome card */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Welcome, {user?.firstName}!</CardTitle>
            <CardDescription>
              You’re logged in to your pet care dashboard. Manage your activity, appointments, and more.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Email: <span className="font-medium">{user?.primaryEmailAddress?.emailAddress}</span>
            </p>
            <p className="text-muted-foreground">
              Full Name: <span className="font-medium">{user?.fullName}</span>
            </p>
            <Badge variant="outline" className="gap-1">
              <CheckCircle className="h-4 w-4" />
              Verified User
            </Badge>
          </CardContent>
        </Card>

        {/* Info / trust indicators */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-muted/50">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-medium">Secure Account</p>
              <p className="text-sm text-muted-foreground">Your data is safely synced with Supabase.</p>
            </CardContent>
          </Card>
          <Card className="bg-muted/50">
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 mx-auto mb-2 text-red-500" />
              <p className="font-medium">Pet-Centric Platform</p>
              <p className="text-sm text-muted-foreground">Personalized care features built for your pets.</p>
            </CardContent>
          </Card>
          <Card className="bg-muted/50">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="font-medium">Verified Services</p>
              <p className="text-sm text-muted-foreground">Only trusted vets and shops are listed.</p>
            </CardContent>
          </Card>
        </div>

        {/* Action buttons (example) */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline">Manage Appointments</Button>
          <Button variant="outline">Edit Profile</Button>
          <Button variant="outline">View Pet Records</Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
