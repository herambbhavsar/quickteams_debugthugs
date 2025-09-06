import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Calendar, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";

const Hackathons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const filterOptions = ["Location", "Duration", "Date", "Mode", "Fees", "Prize"];

  const handleFilterToggle = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const handleJoinHackathon = (hackathonTitle: string) => {
    toast({
      title: "Joined Successfully!",
      description: `You've joined "${hackathonTitle}". Check your profile for details.`,
    });
    navigate("/teams");
  };
  
  const hackathons = [
    {
      id: 1,
      title: "Forge the Future",
      organizer: "TechCorp",
      participants: 7841,
      timeLeft: "02:07:02",
      status: "HACKATHON",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop",
    },
    {
      id: 2,
      title: "India Connected: APIs for Digital Transformation", 
      organizer: "GSMA",
      participants: 433,
      timeLeft: "23:06:59",
      status: "HACKATHON",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop",
    },
    {
      id: 3,
      title: "MariaDB Python Hackathon",
      organizer: "MariaDB",
      participants: 2158,
      timeLeft: "25:06:58",
      status: "HACKATHON",
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=200&fit=crop",
    },
    {
      id: 4,
      title: "AI Innovation Challenge",
      organizer: "InnovateTech", 
      participants: 1250,
      timeLeft: "15:04:30",
      status: "HACKATHON",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
    },
  ];

  // Filter hackathons based on search term
  const filteredHackathons = hackathons.filter(hackathon =>
    hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hackathon.organizer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const suggestedHackathons = filteredHackathons.slice(0, 3);
  const allOpportunities = [...filteredHackathons, ...filteredHackathons.slice(0, 2)];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-hackathon-green mb-4">HACKATHONS</h1>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {filterOptions.map((filter) => (
              <Button 
                key={filter} 
                variant={activeFilters.includes(filter) ? "default" : "filter"} 
                size="sm"
                onClick={() => handleFilterToggle(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Suggested Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-hackathon-purple mb-6">SUGGESTED</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {suggestedHackathons.map((hackathon) => (
              <Card key={hackathon.id} className="bg-card border-border hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-hackathon-purple text-white">
                      {hackathon.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{hackathon.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Users className="w-4 h-4" />
                    <span>{hackathon.participants.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{hackathon.timeLeft}</span>
                  </div>
                  <Button 
                    variant="join" 
                    className="w-full"
                    onClick={() => handleJoinHackathon(hackathon.title)}
                  >
                    JOIN
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Opportunities Section */}
        <section>
          <h2 className="text-2xl font-bold text-hackathon-purple mb-6">OPPORTUNITIES</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {allOpportunities.map((hackathon, index) => (
              <Card key={`${hackathon.id}-${index}`} className="bg-card border-border hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-hackathon-purple text-white">
                      {hackathon.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{hackathon.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Users className="w-4 h-4" />
                    <span>{hackathon.participants.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{hackathon.timeLeft}</span>
                  </div>
                  <Button 
                    variant="join" 
                    className="w-full"
                    onClick={() => handleJoinHackathon(hackathon.title)}
                  >
                    JOIN
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hackathons;