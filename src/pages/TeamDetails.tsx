import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Users, MapPin, Calendar, Trophy, Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { useToast } from "@/hooks/use-toast";

const TeamDetails = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock team data - in real app, would fetch by teamId
  const team = {
    id: 4,
    name: "TEAM GETALIFE ();",
    type: "TEAM LEADER",
    members: { current: 3, total: 5 },
    college: "IIITDM J",
    hackathons: 0,
    status: "VACCANT",
    statusColor: "text-hackathon-green",
    description: "Team get a life () is a group of passionate creators who believe in building complete, functional products within the time limit while enjoying the process. We don't overthink things but believe that solutions can come through simple solutions. Challenge, for us, hackathons are about experimentation, problem-solving, and the joy of creating something new together.",
    criteria: {
      students: "UG Students",
      location: "Jabalpur"
    },
    vacancies: ["Backend dev", "Cybersecurity"],
    members_list: [
      { 
        name: "Shantanu", 
        role: "Team Leader",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        skills: ["React", "Node.js", "Leadership"],
        github: "github.com/shantanu",
        linkedin: "linkedin.com/in/shantanu"
      },
      { 
        name: "Aishutosh", 
        role: "Frontend Developer",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        skills: ["React", "CSS", "UI/UX"],
        github: "github.com/aishutosh",
        linkedin: "linkedin.com/in/aishutosh"
      },
      { 
        name: "Hari", 
        role: "Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        skills: ["Python", "Django", "React"],
        github: "github.com/hari",
        linkedin: "linkedin.com/in/hari"
      },
    ],
    achievements: [
      "Winner - CodeFest 2023",
      "Runner up - HackIndia 2023",
      "Best Innovation Award - TechHack 2022"
    ],
    upcomingHackathons: [
      "Canyouhackit 2024",
      "Smart India Hackathon",
      "HackTheValley"
    ]
  };

  const handleJoinTeam = () => {
    toast({
      title: "Join Request Sent!",
      description: "Your request to join the team has been sent to the team leader.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4 text-hackathon-green hover:text-hackathon-green/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Teams
          </Button>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-hackathon-purple rounded-lg flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-hackathon-green">{team.name}</h1>
              <p className="text-xl text-muted-foreground">{team.college}</p>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant={team.status === "FULL" ? "destructive" : "default"} className="bg-hackathon-green text-hackathon-dark">
                  {team.status === "FULL" ? "Team Full" : "Accepting Members"}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {team.members.current}/{team.members.total} members
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-hackathon-green">About the Team</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {team.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Criteria</h4>
                    <div className="space-y-1 text-sm">
                      <p><span className="font-medium">Students:</span> {team.criteria.students}</p>
                      <p><span className="font-medium">Location:</span> {team.criteria.location}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Current Vacancies</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.vacancies.map((vacancy, index) => (
                        <Badge key={index} variant="secondary" className="bg-hackathon-purple text-white">
                          {vacancy}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-hackathon-green">Team Members</h3>
                <div className="space-y-4">
                  {team.members_list.map((member, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-hackathon-purple text-white text-lg">
                          {member.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-hackathon-purple font-medium">{member.role}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {member.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {/* Empty slots */}
                  {Array.from({ length: team.members.total - team.members.current }).map((_, index) => (
                    <div key={`empty-${index}`} className="flex items-center gap-4 p-4 rounded-lg bg-muted/10 border-2 border-dashed border-muted">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-muted">
                          <Users className="w-8 h-8 text-muted-foreground" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-muted-foreground">Open Position</p>
                        <p className="text-sm text-muted-foreground">Looking for team members</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Join Team Card */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Join This Team</h3>
                <Button 
                  onClick={handleJoinTeam}
                  className="w-full mb-3" 
                  variant="join"
                  disabled={team.status === "FULL"}
                >
                  {team.status === "FULL" ? "Team Full" : "Send Join Request"}
                </Button>
                <Button variant="outline" className="w-full">
                  Contact Team Leader
                </Button>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Team Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-hackathon-green" />
                    <span className="text-sm">{team.hackathons} Past Hackathons</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-hackathon-purple" />
                    <span className="text-sm">{team.members.current}/{team.members.total} Members</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm">{team.criteria.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Achievements</h3>
                <div className="space-y-2">
                  {team.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-hackathon-green" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Hackathons */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Upcoming Hackathons</h3>
                <div className="space-y-2">
                  {team.upcomingHackathons.map((hackathon, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-hackathon-purple" />
                      <span className="text-sm">{hackathon}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;