// src/pages/dashboard.tsx
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import supabase from "../integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  ClipboardList,
  Bell,
  PawPrint,
  CheckCircle,
  Shield,
  User,
  Clock,
} from "lucide-react";

const Dashboard = () => {
  const { user } = useUser();
  const firstName =
    user?.firstName || user?.fullName?.split(" ")[0] || "there";

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
      const { error } = await supabase.from("users").upsert([
        {
          id: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          name: user.fullName,
        },
      ]);
      if (error) console.error("Supabase sync error:", error);
    };
    syncUser();
  }, [user]);

  const upcomingAppointments = [
    {
      id: 1,
      pet: "Bella",
      vet: "Dr. Walsh",
      date: "2025-10-02",
      time: "09:30",
      status: "Scheduled",
    },
    {
      id: 2,
      pet: "Max",
      vet: "Dr. Park",
      date: "2025-10-05",
      time: "14:00",
      status: "Scheduled",
    },
    {
      id: 3,
      pet: "Luna",
      vet: "Dr. Patel",
      date: "2025-10-12",
      time: "11:15",
      status: "Pending",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: "Vaccination updated",
      detail: "Bella - Rabies booster",
      when: "2d ago",
    },
    {
      id: 2,
      title: "Appointment booked",
      detail: "Max - General checkup",
      when: "5d ago",
    },
    {
      id: 3,
      title: "New vet added",
      detail: "Dr. Park to favorites",
      when: "1w ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8 space-y-8">
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome back, {firstName} 👋
            </h1>
            <p className="text-muted-foreground">
              Here’s what’s happening with your pets today.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/vets-care">
              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                <Calendar className="h-4 w-4 mr-2" />
                New Appointment
              </Button>
            </Link>
            <Link to="/shops">
              <Button variant="outline">
                <PawPrint className="h-4 w-4 mr-2" />
                Find Services
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader className="pb-2">
              <CardDescription className="uppercase tracking-wide">
                Upcoming
              </CardDescription>
              <CardTitle className="text-3xl">3</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> Appointments
              scheduled
            </CardContent>
          </Card>
          <Card className="bg-muted/40">
            <CardHeader className="pb-2">
              <CardDescription className="uppercase tracking-wide">
                Pets
              </CardDescription>
              <CardTitle className="text-3xl">2</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground flex items-center gap-2">
              <PawPrint className="h-4 w-4 text-primary" /> Active profiles
            </CardContent>
          </Card>
          <Card className="bg-muted/40">
            <CardHeader className="pb-2">
              <CardDescription className="uppercase tracking-wide">
                Notifications
              </CardDescription>
              <CardTitle className="text-3xl">4</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground flex items-center gap-2">
              <Bell className="h-4 w-4 text-primary" /> New updates
            </CardContent>
          </Card>
          <Card className="bg-muted/40">
            <CardHeader className="pb-2">
              <CardDescription className="uppercase tracking-wide">
                Completed
              </CardDescription>
              <CardTitle className="text-3xl">12</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" /> Vet visits
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                Your Activity
              </CardTitle>
              <CardDescription>
                Keep track of upcoming appointments and recent changes.
              </CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Tabs defaultValue="appointments" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="appointments">Upcoming</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>

                <TabsContent value="appointments" className="mt-4">
                  <div className="w-full overflow-x-auto">
                    <Table className="min-w-max w-full text-sm">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Pet</TableHead>
                          <TableHead>Vet</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {upcomingAppointments.map((a) => (
                          <TableRow key={a.id}>
                            <TableCell className="whitespace-nowrap">
                              {a.pet}
                            </TableCell>
                            <TableCell className="whitespace-nowrap">
                              {a.vet}
                            </TableCell>
                            <TableCell className="whitespace-nowrap">
                              <Badge variant="outline" className="capitalize">
                                {a.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link to="/vets-care">
                      <Button variant="outline" size="sm">
                        View all
                      </Button>
                    </Link>
                  </div>
                </TabsContent>

                <TabsContent value="activity" className="mt-4">
                  <div className="space-y-4">
                    {recentActivity.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start gap-3 sm:gap-4"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="font-medium truncate">{item.title}</p>
                          <p className="text-sm text-muted-foreground break-words">
                            {item.detail}
                          </p>
                          <p className="sm:hidden text-xs text-muted-foreground mt-1">
                            {item.when}
                          </p>
                        </div>
                        <span className="ml-2 sm:ml-auto text-xs text-muted-foreground hidden sm:inline">
                          {item.when}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-muted/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" /> Profile
                </CardTitle>
                <CardDescription>Your account overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground w-24">Name</span>
                  <span className="font-medium">{user?.fullName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground w-24">Email</span>
                  <span className="font-medium">
                    {user?.primaryEmailAddress?.emailAddress}
                  </span>
                </div>
                <Badge variant="outline" className="gap-1">
                  <CheckCircle className="h-3.5 w-3.5" /> Verified
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Jump to common tasks</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link to="/vets-care">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" /> Book appointment
                  </Button>
                </Link>
                <Link to="/shops">
                  <Button variant="outline" className="w-full justify-start">
                    <PawPrint className="h-4 w-4 mr-2" /> Find services
                  </Button>
                </Link>
                <Link to="/blogs">
                  <Button variant="outline" className="w-full justify-start">
                    <ClipboardList className="h-4 w-4 mr-2" /> Read blog
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" /> Contact support
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="font-medium">Your data is safe</p>
                <p className="text-sm text-muted-foreground">
                  Securely synced with Supabase
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
