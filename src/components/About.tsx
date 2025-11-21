import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "2,000+", label: "Active Students" },
    { icon: BookOpen, value: "50+", label: "Expert Teachers" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: Target, value: "25+", label: "Years of Excellence" },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Our School
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Committed to providing world-class education that empowers students to excel
            academically, socially, and personally in an ever-changing world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="border-border shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                To nurture young minds and prepare them for global challenges through innovative
                teaching methods, state-of-the-art facilities, and a commitment to holistic development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in creating an inclusive learning environment where every student
                can discover their passion, develop critical thinking skills, and build
                character for lifelong success.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                To be a leading educational institution recognized for academic excellence,
                innovation, and producing well-rounded individuals who contribute positively
                to society.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where our students become confident leaders, critical
                thinkers, and compassionate global citizens who drive positive change in their
                communities and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
