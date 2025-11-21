import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Beaker, Calculator, Globe, Palette, Music } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "English & Literature",
      description: "Comprehensive language skills development with creative writing and critical analysis",
      color: "bg-blue-500",
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Advanced mathematical concepts from algebra to calculus with practical applications",
      color: "bg-green-500",
    },
    {
      icon: Beaker,
      title: "Science & Technology",
      description: "Hands-on learning in physics, chemistry, biology, and computer science",
      color: "bg-purple-500",
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "History, geography, civics and understanding of global cultures and societies",
      color: "bg-orange-500",
    },
    {
      icon: Palette,
      title: "Arts & Design",
      description: "Creative expression through visual arts, digital design, and graphic media",
      color: "bg-pink-500",
    },
    {
      icon: Music,
      title: "Music & Drama",
      description: "Develop artistic talents through vocal training, instruments, and theatrical performance",
      color: "bg-indigo-500",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive curriculum designed to develop academic excellence and practical skills
            across diverse subjects for holistic student development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card
                key={index}
                className="border-border shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-accent text-secondary-foreground hover:opacity-90 transition-opacity shadow-soft">
            View Complete Curriculum
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
