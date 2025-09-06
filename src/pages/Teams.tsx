import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Users, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filterOptions = ["Location", "Duration", "Date", "Mode", "Fees", "Prize"];
  
  const teams = [
    {
      id: 1,
      name: "HTML CODERS",
      type: "TEAM LEADER",
      members: { current: 4, total: 5 },
      college: "IIITDM J",
      hackathons: 5,
      status: "VACCANT",
      statusColor: "text-hackathon-green",
      members_list: [
        { name: "John", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" },
        { name: "Sarah", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" },
        { name: "Mike", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
        { name: "Alex", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" },
      ]
    },
    {
      id: 2,
      name: "DEBUG THUGS",
      type: "Member",
      members: { current: 5, total: 5 },
      college: "IIITDM J",
      hackathons: 0,
      status: "FULL",
      statusColor: "text-red-500",
      members_list: [
        { name: "Emma", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" },
        { name: "David", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" },
        { name: "Lisa", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" },
        { name: "Tom", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
        { name: "Kate", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" },
      ]
    },
    {
      id: 3,
      name: "RUNTIME TERROR",
      type: "Member",
      members: { current: 4, total: 5 },
      college: "IIITDM J",
      hackathons: 0,
      status: "VACCANT",
      statusColor: "text-hackathon-green",
      members_list: [
        { name: "Chris", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" },
        { name: "Anna", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" },
        { name: "Ben", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
        { name: "Zoe", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" },
      ]
    },
    {
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
        { name: "Shantanu", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" },
        { name: "Aishutosh", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" },
        { name: "Hari", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-5xl font-bold text-hackathon-green">TEAMS</h1>
            <span className="text-2xl text-hackathon-purple">Canyouhackit ( IIITDMJ )</span>
          </div>
          
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
              <Button key={filter} variant="filter" size="sm">
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Teams Grid */}
        <div className="space-y-6">
          {teams.map((team) => (
            <Card key={team.id} className="bg-card border-border hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Team Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-hackathon-purple rounded-lg flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Team Info */}
                  <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
                      {/* Name */}
                      <div className="md:col-span-1">
                        <h3 className="font-bold text-lg">{team.name}</h3>
                        <p className="text-sm text-muted-foreground">{team.type}</p>
                      </div>
                      
                      {/* Members */}
                      <div className="md:col-span-1">
                        <p className="text-sm text-muted-foreground mb-1">Members</p>
                        <p className="font-semibold">{team.members.current}/{team.members.total}</p>
                        <p className="text-xs text-muted-foreground">{team.status === "FULL" ? "Full" : "Vacant"}</p>
                      </div>
                      
                      {/* College */}
                      <div className="md:col-span-1">
                        <p className="text-sm text-muted-foreground mb-1">College</p>
                        <p className="font-semibold">{team.college}</p>
                      </div>
                      
                      {/* Past Hackathons */}
                      <div className="md:col-span-1">
                        <p className="text-sm text-muted-foreground mb-1">Past Hackathons</p>
                        <p className="font-semibold">{team.hackathons}</p>
                      </div>
                      
                      {/* Status */}
                      <div className="md:col-span-1">
                        <p className="text-sm text-muted-foreground mb-1">Status</p>
                        <p className={`font-semibold ${team.statusColor}`}>{team.status}</p>
                        <Button 
                          size="sm" 
                          className="mt-2" 
                          variant={team.status === "FULL" ? "outline" : "join"}
                          disabled={team.status === "FULL"}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Expanded Content for Team 4 */}
                    {team.id === 4 && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="grid lg:grid-cols-2 gap-6">
                          {/* About */}
                          <div>
                            <h4 className="font-semibold mb-2 text-hackathon-green">About</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {team.description}
                            </p>
                            
                            <h4 className="font-semibold mt-4 mb-2 text-hackathon-green">Criteria</h4>
                            <p className="text-sm">
                              <span className="font-medium">{team.criteria?.students}</span><br />
                              <span className="font-medium">Location:</span> {team.criteria?.location}
                            </p>
                          </div>
                          
                          {/* Vacancies */}
                          <div>
                            <h4 className="font-semibold mb-4 text-hackathon-purple">VACANCY</h4>
                            <div className="space-y-2 mb-4">
                              {team.vacancies?.map((vacancy, index) => (
                                <Badge key={index} variant="secondary" className="bg-hackathon-purple text-white mr-2">
                                  {vacancy}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="join" className="w-full">
                              JOIN
                            </Button>
                            <Button variant="ghost" className="w-full mt-2 text-hackathon-green">
                              Know More
                            </Button>
                          </div>
                        </div>
                        
                        {/* Team Members */}
                        <div className="mt-6">
                          <div className="flex items-center gap-4">
                            {team.members_list.map((member, index) => (
                              <Avatar key={index} className="h-12 w-12">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback className="bg-hackathon-purple text-white">
                                  {member.name[0]}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                            {/* Empty slots */}
                            {Array.from({ length: team.members.total - team.members.current }).map((_, index) => (
                              <Avatar key={`empty-${index}`} className="h-12 w-12">
                                <AvatarFallback className="bg-muted">
                                  <Users className="w-6 h-6 text-muted-foreground" />
                                </AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;