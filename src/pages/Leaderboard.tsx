import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const Leaderboard = () => {
  const topUsers = [
    {
      rank: 1,
      name: "Shantanu Kharwar",
      role: "TEAM LEADER",
      college: "IIITDM J",
      location: "KANPUR",
      hackathons: 5,
      wins: 3,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      techStack: "HACKER Squashing"
    },
    {
      rank: 2,
      name: "Aishutosh Rana",
      role: "Member",
      college: "IIITDM J",
      location: "BANGLORE",
      hackathons: 0,
      wins: 0,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      techStack: "AI + FIGMA B.des"
    },
    {
      rank: 3,
      name: "Hari",
      role: "Member",
      college: "IIITDM J",
      location: "IIITDM J",
      hackathons: 0,
      wins: 0,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      techStack: "HTML B.2 cpl"
    },
    {
      rank: 4,
      name: "Dhairya",
      role: "Member",
      college: "IIITDM J",
      location: "Mumbai",
      hackathons: 2,
      wins: 1,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
      techStack: "AI / ML"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-lg font-bold">{rank}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-hackathon-green mb-8">LEADERBOARD</h1>
        
        <Card className="bg-card border-border shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Top Hackathon Participants</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Header */}
            <div className="hidden md:grid grid-cols-6 gap-4 mb-6 p-4 bg-hackathon-muted rounded-lg text-sm font-semibold">
              <div>Name</div>
              <div>Techstack</div>
              <div>College</div>
              <div>Past Hackathons</div>
              <div>Location</div>
              <div>Rank</div>
            </div>
            
            {/* Leaderboard Items */}
            <div className="space-y-4">
              {topUsers.map((user) => (
                <Card key={user.rank} className="bg-hackathon-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                      {/* Name & Avatar */}
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="bg-hackathon-purple text-white">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.role}</p>
                        </div>
                      </div>
                      
                      {/* Tech Stack */}
                      <div>
                        <Badge variant="secondary" className="bg-hackathon-green text-hackathon-dark">
                          {user.techStack}
                        </Badge>
                      </div>
                      
                      {/* College */}
                      <div>
                        <p className="font-medium">{user.college}</p>
                        <p className="text-sm text-muted-foreground">5th year</p>
                      </div>
                      
                      {/* Past Hackathons */}
                      <div className="text-center">
                        <p className="text-2xl font-bold text-hackathon-green">{user.hackathons}</p>
                        <p className="text-sm text-muted-foreground">hackathons</p>
                      </div>
                      
                      {/* Location */}
                      <div>
                        <p className="font-medium">{user.location}</p>
                      </div>
                      
                      {/* Rank */}
                      <div className="flex justify-center md:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 bg-hackathon-purple rounded-full">
                          {getRankIcon(user.rank)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Achievement Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-card border-border text-center">
            <CardContent className="p-6">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-hackathon-green mb-2">156</h3>
              <p className="text-muted-foreground">Total Winners</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border text-center">
            <CardContent className="p-6">
              <Medal className="w-12 h-12 text-hackathon-purple mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-hackathon-green mb-2">1,234</h3>
              <p className="text-muted-foreground">Active Participants</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border text-center">
            <CardContent className="p-6">
              <Award className="w-12 h-12 text-hackathon-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-hackathon-green mb-2">89</h3>
              <p className="text-muted-foreground">Hackathons Completed</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;