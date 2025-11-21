import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Library, Microscope, Dumbbell, Bus, Laptop, Users, Shield } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: Library,
      title: "Modern Library",
      description: "Extensive collection of books, journals, and digital resources",
    },
    {
      icon: Microscope,
      title: "Science Labs",
      description: "State-of-the-art laboratories for physics, chemistry, and biology",
    },
    {
      icon: Laptop,
      title: "Computer Labs",
      description: "High-tech computer labs with latest software and internet access",
    },
    {
      icon: Dumbbell,
      title: "Sports Complex",
      description: "Indoor and outdoor sports facilities for various athletic activities",
    },
    {
      icon: Wifi,
      title: "WiFi Campus",
      description: "Full campus WiFi coverage for digital learning and connectivity",
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "Safe and reliable school bus services covering extensive routes",
    },
    {
      icon: Users,
      title: "Activity Rooms",
      description: "Dedicated spaces for arts, music, drama, and extracurricular activities",
    },
    {
      icon: Shield,
      title: "Security",
      description: "24/7 security with CCTV monitoring for student safety",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            World-Class Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our campus is equipped with modern infrastructure and amenities designed to provide
            the best learning environment for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <Card
                key={index}
                className="border-border shadow-card hover:shadow-soft transition-all duration-300 group hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
