import {
  Home,
  Coins,
  ShoppingCart,
  Calendar,
  User,
  FileText,
  Table,
  Settings,
  PieChart,
  AlertCircle,
  Circle,
  LogIn,
  Bot,
} from "lucide-react";

type NavItem = {
  title: string;
  icon: React.ReactNode;
  url: string;
  items: NavSubItem[];
};

type NavSubItem = {
  title: string;
  url: string;
};

type NavSection = {
  label: string;
  items: NavItem[];
};

export const NAV_DATA: NavSection[] = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: <Home className="size-6" />,
        url: "/",
        items: [],
      },
      {
        title: "Coins",
        icon: <Coins className="size-6" />,
        url: "/coins",
        items: [],
      },
      {
        title: "Marketplace",
        icon: <ShoppingCart className="size-6" />,
        url: "/marketplace",
        items: [],
      },
      {
        title: "Chatbot",
        icon: <Bot className="size-6" />,
        url: "/chat",
        items: [],
      },

      {
        title: "Profile",
        icon: <User className="size-6" />,
        url: "/profile",
        items: [],
      },
    ],
  },
];
