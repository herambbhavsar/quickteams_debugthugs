import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Users, Trophy } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import heroBackground from "@/assets/hero-background.jpg";

const Home = () => {
  const howItWorksSteps = [
    {
      icon: UserPlus,
      title: "Create Profile",
      description: "Add skills, interests, availability",
    },
    {
      icon: Users,
      title: "Find Matches",
      description: "Browse teams or suggested teammates",
    },
    {
      icon: Trophy,
      title: "Team Up",
      description: "Collaborate and join events together",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">QUICKTEAMS</h1>
          <p className="text-xl md:text-2xl mb-8 text-hackathon-green font-medium">
            "Find Your Missing Piece. Team up for hackathons."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="join" asChild>
              <Link to="/teams">Join Team</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/hackathons">Create Team</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-hackathon-card border-border shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-center mb-12">HOW IT WORKS ?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {howItWorksSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-hackathon-purple rounded-full flex items-center justify-center mx-auto">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-hackathon-green rounded-full flex items-center justify-center">
                        <span className="text-hackathon-dark text-lg font-bold">+</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" asChild>
                  <Link to="/login">Sign up</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Hackathons Preview */}
      <section className="py-20 px-4 bg-hackathon-dark/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-hackathon-green">HACKATHONS</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover amazing hackathons and find your perfect team
          </p>
          <Button size="lg" variant="join" asChild>
            <Link to="/hackathons">View All Hackathons</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;