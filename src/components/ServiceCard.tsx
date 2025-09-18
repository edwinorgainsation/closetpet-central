import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

const ServiceCard = ({ title, description, icon: Icon, onClick }: ServiceCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-card hover:-translate-y-1 bg-gradient-card border-border/50">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 rounded-full bg-gradient-primary p-3 w-fit">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <Button 
          onClick={onClick}
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
        >
          Explore {title}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;