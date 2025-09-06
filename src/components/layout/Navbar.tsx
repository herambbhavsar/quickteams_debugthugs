import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Users, UserCircle, LogOut } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate("/login");
  };
  
  return (
    <nav className="bg-hackathon-dark border-b border-hackathon-green/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-2xl font-bold text-hackathon-green cursor-pointer hover:text-hackathon-green/80 transition-colors"
          onClick={() => handleNavigation("/")}
        >
          QuickTeams
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Button 
            variant="ghost" 
            className={`text-white hover:text-hackathon-green ${location.pathname === '/hackathons' ? 'text-hackathon-green' : ''}`}
            onClick={() => handleNavigation("/hackathons")}
          >
            HACKATHONS
          </Button>
          <Button 
            variant="ghost" 
            className={`text-white hover:text-hackathon-green ${location.pathname === '/teams' ? 'text-hackathon-green' : ''}`}
            onClick={() => handleNavigation("/teams")}
          >
            <Users className="w-4 h-4 mr-2" />
            TEAMS
          </Button>
          <Button 
            variant="ghost" 
            className={`text-white hover:text-hackathon-green ${location.pathname === '/leaderboard' ? 'text-hackathon-green' : ''}`}
            onClick={() => handleNavigation("/leaderboard")}
          >
            <Trophy className="w-4 h-4 mr-2" />
            LEADERBOARD
          </Button>
        </nav>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <Avatar 
            className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-hackathon-green transition-all"
            onClick={() => handleNavigation("/profile")}
          >
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-white hover:text-hackathon-green ${location.pathname === '/profile' ? 'text-hackathon-green' : ''}`}
            onClick={() => handleNavigation("/profile")}
          >
            <UserCircle className="w-4 h-4 mr-2" />
            Profile
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:text-red-400"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;