// icons
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from '@mui/icons-material/Business';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import WorkIcon from '@mui/icons-material/Work';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DescriptionIcon from '@mui/icons-material/Description';
import StoreIcon from '@mui/icons-material/Store';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';

// routes data
export const sidebarData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Company",
    icon: <BusinessIcon />,
    link: "/company",
  },
  {
    title: "Employee",
    icon: <BadgeIcon />,
    link: "/empoloyee",
  },
  {
    title: "Customer",
    icon: <PersonIcon />,
    link: "/customer",
  },
  {
    title: "Fleet",
    icon: <AirportShuttleIcon />,
    link: "/fleet",
  },
  {
    title: "Works Service",
    icon: <InsertDriveFileIcon />,
    link: "/works-service",
  },
  {
    title: "Workday",
    icon: <WorkIcon />,
    link: "/workday",
  },
  {
    title: "Invoices",
    icon: <ReceiptIcon />,
    link: "/invoices",
  },
  {
    title: "Quotation",
    icon: <DescriptionIcon />,
    link: "/quotation",
  },
  {
    title: "Owner",
    icon: <StoreIcon />,
    link: "/owner",
  },
  {
    title: "Log History",
    icon: <HistoryIcon />,
    link: "/log-history",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
  {
    title: "Login",
    icon: <LoginIcon />,
    link: "/login",
  },
];
