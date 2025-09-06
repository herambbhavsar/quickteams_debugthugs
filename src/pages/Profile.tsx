import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const Profile = () => {
  const userProfile = {
    name: "Ashutosh Rana",
    role: "UI/UX DESIGNER",
    gender: "Male",
    college: "PDPM IIITDMJ",
    location: "Jabalpur",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    stats: {
      hackathonsCompleted: 10,
      hackathonsWinner: 5,
      totalHackathons: 10
    },
    skills: [
      "#UI/UX", "#Design", "#IoT", "#Figma", "#B.des", "#B.des",
      "#FrontendDevelopment", "#CPP", "#RapidPrototyping", "#Innovation"
    ],
    about: "I'm Ashutosh Rana, a B.Des student at IIITDM Jabalpur with a passion for UI/UX design and building intuitive user experiences. I work extensively with Figma and the Adobe Creative Suite, and my design philosophy is to design interfaces that feel both intuitive and engaging.",
    techDetails: "Beyond design, I'm also experienced in Frontend technology. I enjoy building me to connect design concepts with real-world implementation. I collaborate with Vivek Coding on projects that integrate design and development, giving me exposure to multidisciplinary teamwork.",
    hackathonExperience: "I've participated in multiple hackathons, where I honed my skills in rapid prototyping, user research, and problem-solving under time constraints. These experiences have shaped me into a designer who not only focuses on aesthetics but also ensures functionality, scalability, and impact.",
    goal: "To innovate, collaborate, and rapidly prototype impactful solutions that solve real-world problems.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ashutoshrana",
      github: "https://github.com/ashutoshrana",
      behance: "https://behance.net/ashutoshrana"
    }
  };

  const softwareUsed = [
    { name: "LinkedIn", icon: Linkedin, color: "bg-blue-600" },
    { name: "GitHub", icon: Github, color: "bg-gray-800" },
    { name: "Behance", icon: "B", color: "bg-blue-500" },
  ];

  const designTools = [
    { name: "Figma", color: "bg-purple-500" },
    { name: "Figma", color: "bg-purple-500" },
    { name: "Figma", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Card className="bg-card border-border shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-hackathon-green to-hackathon-green/80 p-8">
              <div className="absolute top-4 left-4">
                <div className="w-8 h-8 bg-hackathon-green rounded-full"></div>
              </div>
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Avatar */}
                <Avatar className="w-48 h-48 border-4 border-white shadow-xl">
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                  <AvatarFallback className="text-4xl bg-hackathon-purple text-white">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                {/* User Info */}
                <div className="flex-1 text-white">
                  <h1 className="text-4xl font-bold mb-2">{userProfile.name.toUpperCase()}</h1>
                  
                  {/* Stats */}
                  <div className="flex gap-6 mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-hackathon-purple rounded-lg flex items-center justify-center mb-2">
                        <span className="text-2xl font-bold">{userProfile.stats.hackathonsCompleted}</span>
                      </div>
                      <p className="text-sm">HACKATHONS COMPLETED</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-hackathon-purple rounded-lg flex items-center justify-center mb-2">
                        <span className="text-2xl font-bold">{userProfile.stats.hackathonsWinner}</span>
                      </div>
                      <p className="text-sm">HACKATHONS WINNER</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-hackathon-purple rounded-lg flex items-center justify-center mb-2">
                        <span className="text-2xl font-bold">{userProfile.stats.totalHackathons}</span>
                      </div>
                      <p className="text-sm">HACKATHONS COMPLETED</p>
                    </div>
                  </div>
                  
                  {/* Role Badge */}
                  <Badge className="bg-hackathon-green text-hackathon-dark text-lg px-4 py-2 font-bold">
                    {userProfile.role}
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Basic Info */}
                  <div className="bg-hackathon-card p-6 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-hackathon-purple font-semibold">NAME:</span>
                        <span className="ml-2">{userProfile.name}</span>
                      </div>
                      <div>
                        <span className="text-hackathon-purple font-semibold">GENDER:</span>
                        <span className="ml-2">{userProfile.gender}</span>
                      </div>
                      <div>
                        <span className="text-hackathon-purple font-semibold">COLLEGE:</span>
                        <span className="ml-2">{userProfile.college}</span>
                      </div>
                      <div>
                        <span className="text-hackathon-purple font-semibold">Location:</span>
                        <span className="ml-2">{userProfile.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {userProfile.skills.map((skill, index) => (
                        <Badge 
                          key={index} 
                          className="bg-hackathon-green text-hackathon-dark font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Software Used */}
                  <div>
                    <h3 className="font-bold mb-4">SOFTWARE USED</h3>
                    <div className="flex gap-3 mb-6">
                      {softwareUsed.map((software, index) => (
                        <div 
                          key={index}
                          className={`w-12 h-12 ${software.color} rounded-lg flex items-center justify-center`}
                        >
                          {typeof software.icon === 'string' ? (
                            <span className="text-white font-bold text-lg">{software.icon}</span>
                          ) : (
                            <software.icon className="w-6 h-6 text-white" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Design Tools */}
                  <div>
                    <h3 className="font-bold mb-4">SOFTWARE USED</h3>
                    <div className="flex gap-3">
                      {designTools.map((tool, index) => (
                        <div 
                          key={index}
                          className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center`}
                        >
                          <span className="text-white font-bold">F</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* About */}
                  <div>
                    <h3 className="font-bold mb-4 text-hackathon-green">ABOUT</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {userProfile.about}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {userProfile.techDetails}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {userProfile.hackathonExperience}
                    </p>
                  </div>
                  
                  {/* Goal */}
                  <div>
                    <h3 className="font-bold mb-4 text-hackathon-green">GOAL</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      "{userProfile.goal}"
                    </p>
                  </div>
                  
                  {/* Contact */}
                  <div className="bg-hackathon-green p-6 rounded-lg">
                    <h3 className="font-bold mb-4 text-hackathon-dark">Contact</h3>
                    <p className="text-hackathon-dark leading-relaxed">
                      "To innovate, collaborate, and rapidly prototype impactful solutions that solve real-world problems."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;