import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Star,
  Shield
} from "lucide-react";

const BookAppointment = () => {
  const { vetId } = useParams();
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    petAge: "",
    ownerName: "",
    phone: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
    notes: ""
  });

  const [selectedService, setSelectedService] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment booking:", { ...formData, selectedService, isEmergency });
    // Handle appointment booking here
    alert("Appointment request submitted! We'll contact you to confirm.");
  };

  // Mock vet data - in a real app, this would come from an API
  const getVetData = () => {
    const vets = {
      "dr-sarah-johnson": {
        name: "Dr. Sarah Johnson",
        clinic: "Compassionate Animal Clinic",
        rating: 4.9,
        specialty: "General Practice",
        phone: "(555) 123-4567",
        address: "456 Animal Care Blvd, Pet City, PC 54321",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx2ZXRlcmluYXJpYW4lMjBkb2N0b3IlMjBwZXQlMjBjYXJlJTIwY2xpbmljfGVufDB8MHx8fDE3NTgyMDQ5NDd8MA&ixlib=rb-4.1.0&q=85"
      },
      "dr-michael-chen": {
        name: "Dr. Michael Chen",
        clinic: "City Pet Hospital",
        rating: 4.8,
        specialty: "Exotic Animals",
        phone: "(555) 987-6543",
        address: "789 Pet Care Ave, Animal City, AC 12345",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx2ZXRlcmluYXJpYW4lMjBkb2N0b3IlMjBwZXQlMjBjYXJlJTIwY2xpbmljfGVufDB8MHx8fDE3NTgyMDQ5NDd8MA&ixlib=rb-4.1.0&q=85"
      }
    };
    return vets[vetId as keyof typeof vets] || vets["dr-sarah-johnson"];
  };

  const vetData = getVetData();

  const services = [
    "General Checkup",
    "Vaccination",
    "Dental Cleaning",
    "Surgery Consultation",
    "Emergency Care",
    "Behavioral Consultation",
    "Nutrition Counseling",
    "Grooming"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container px-4  py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to={`/details/vet/${vetId}`}>
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Vet Details
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </CardTitle>
                <CardDescription>
                  Fill out the form below to request an appointment with {vetData.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Pet Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Pet Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="petName" className="text-sm font-medium mb-2 block">
                          Pet Name *
                        </label>
                        <Input
                          id="petName"
                          name="petName"
                          value={formData.petName}
                          onChange={handleInputChange}
                          placeholder="Enter pet's name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="petType" className="text-sm font-medium mb-2 block">
                          Pet Type *
                        </label>
                        <select
                          id="petType"
                          name="petType"
                          value={formData.petType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                          required
                        >
                          <option value="">Select pet type</option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="bird">Bird</option>
                          <option value="rabbit">Rabbit</option>
                          <option value="reptile">Reptile</option>
                          <option value="fish">Fish</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="petAge" className="text-sm font-medium mb-2 block">
                        Pet Age
                      </label>
                      <Input
                        id="petAge"
                        name="petAge"
                        value={formData.petAge}
                        onChange={handleInputChange}
                        placeholder="e.g., 2 years, 6 months"
                      />
                    </div>
                  </div>

                  {/* Owner Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Owner Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="ownerName" className="text-sm font-medium mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          id="ownerName"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Appointment Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="appointmentDate" className="text-sm font-medium mb-2 block">
                          Preferred Date *
                        </label>
                        <Input
                          id="appointmentDate"
                          name="appointmentDate"
                          type="date"
                          value={formData.appointmentDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="appointmentTime" className="text-sm font-medium mb-2 block">
                          Preferred Time *
                        </label>
                        <select
                          id="appointmentTime"
                          name="appointmentTime"
                          value={formData.appointmentTime}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                          required
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="selectedService" className="text-sm font-medium mb-2 block">
                        Service Needed *
                      </label>
                      <select
                        id="selectedService"
                        name="selectedService"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                        required
                      >
                        <option value="">Select service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="reason" className="text-sm font-medium mb-2 block">
                        Reason for Visit *
                      </label>
                      <Textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        placeholder="Describe the reason for the appointment..."
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="notes" className="text-sm font-medium mb-2 block">
                        Additional Notes
                      </label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Any additional information..."
                        rows={2}
                      />
                    </div>
                  </div>

                  {/* Emergency Checkbox */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isEmergency"
                      checked={isEmergency}
                      onChange={(e) => setIsEmergency(e.target.checked)}
                      className="rounded border-input"
                    />
                    <label htmlFor="isEmergency" className="text-sm font-medium">
                      This is an emergency appointment
                    </label>
                  </div>

                  {isEmergency && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
                      <div className="flex items-center gap-2 text-destructive">
                        <AlertCircle className="h-4 w-4" />
                        <span className="font-medium">Emergency Appointment</span>
                      </div>
                      <p className="text-sm text-destructive mt-1">
                        For emergencies, please call {vetData.phone} immediately or visit the nearest emergency clinic.
                      </p>
                    </div>
                  )}

                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                    <Calendar className="h-4 w-4 mr-2" />
                    Request Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Vet Info */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Appointment with</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={vetData.image}
                    alt={vetData.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{vetData.name}</h3>
                    <p className="text-sm text-muted-foreground">{vetData.clinic}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{vetData.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{vetData.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{vetData.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Info */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Appointment Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Appointment requests are reviewed within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Confirmation will be sent via phone/email</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Free cancellation up to 24 hours before</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span>All pets must be up-to-date on vaccinations</span>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-card border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  For urgent medical emergencies outside business hours:
                </p>
                <Button variant="destructive" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookAppointment;
