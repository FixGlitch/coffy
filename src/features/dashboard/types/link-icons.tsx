import {
  Home,
  BarChart,
  ShoppingCart,
  TrendingUp,
  Box,
  Users,
  UserCog,
  ShieldCheck,
  FileText,
  BarChart2,
  Gift,
  Shield,
  Monitor,
  Store,
  Link2,
  ShoppingBag,
  Edit,
  Tag,
  Layers,
  DollarSign,
  Bell,
  MessageCircle,
  Clock,
  Key,
  Leaf,
  CreditCard,
  RefreshCcw,
} from "lucide-react";

export const SubIcons: { [key: string]: JSX.Element } = {
  // Dashboard
  "/dashboard": <Home className="h-5 w-5" />,

  // Sales
  "/dashboard/sales/daily-sales": <BarChart className="h-5 w-5" />,
  "/dashboard/sales/top-selling": <TrendingUp className="h-5 w-5" />,
  "/dashboard/sales/performance": <BarChart2 className="h-5 w-5" />,
  "/dashboard/sales/revenue": <ShoppingCart className="h-5 w-5" />,
  "/dashboard/sales/trend-analysis": <TrendingUp className="h-5 w-5" />,

  // Inventory
  "/dashboard/inventory/overview": <Box className="h-5 w-5" />,
  "/dashboard/inventory/updates": <Edit className="h-5 w-5" />,
  "/dashboard/inventory/low-stock-alerts": <Bell className="h-5 w-5" />,
  "/dashboard/inventory/forecasting": <BarChart className="h-5 w-5" />,

  // User Management
  "/dashboard/users/user-list": <Users className="h-5 w-5" />,
  "/dashboard/users/permissions": <Shield className="h-5 w-5" />,
  "/dashboard/users/activity-logs": <FileText className="h-5 w-5" />,
  "/dashboard/users/session-management": <Monitor className="h-5 w-5" />,

  // Employee Management
  "/dashboard/employees/employee-list": <Users className="h-5 w-5" />,
  "/dashboard/employees/schedules": <Clock className="h-5 w-5" />,
  "/dashboard/employees/payroll": <DollarSign className="h-5 w-5" />,
  "/dashboard/employees/performance": <UserCog className="h-5 w-5" />,

  // Product Management
  "/dashboard/products/catalog": <ShoppingBag className="h-5 w-5" />,
  "/dashboard/products/pricing": <Tag className="h-5 w-5" />,
  "/dashboard/products/stock": <Layers className="h-5 w-5" />,

  // Customer Management
  "/dashboard/customers/customer-list": <Users className="h-5 w-5" />,
  "/dashboard/customers/loyalty-program": <Gift className="h-5 w-5" />,
  "/dashboard/customers/feedback": <MessageCircle className="h-5 w-5" />,

  // Vendor Management
  "/dashboard/vendors/vendor-list": <Users className="h-5 w-5" />,
  "/dashboard/vendors/orders": <ShoppingBag className="h-5 w-5" />,
  "/dashboard/vendors/performance": <TrendingUp className="h-5 w-5" />,

  // Store Management
  "/dashboard/store/info": <Store className="h-5 w-5" />,
  "/dashboard/store/performance": <TrendingUp className="h-5 w-5" />,
  "/dashboard/store/integrations": <Link2 className="h-5 w-5" />,

  // Analytics
  "/dashboard/analytics/sales": <BarChart className="h-5 w-5" />,
  "/dashboard/analytics/inventory": <Box className="h-5 w-5" />,
  "/dashboard/analytics/employees": <UserCog className="h-5 w-5" />,
  "/dashboard/analytics/business-insights": <FileText className="h-5 w-5" />,

  // Settings
  "/dashboard/settings/access-control": <ShieldCheck className="h-5 w-5" />,
  "/dashboard/settings/authentication": <Key className="h-5 w-5" />,
  "/dashboard/settings/logs": <FileText className="h-5 w-5" />,
  "/dashboard/settings/sustainability": <Leaf className="h-5 w-5" />,

  // POS
  "/dashboard/pos/transactions": <CreditCard className="h-5 w-5" />,
  "/dashboard/pos/history": <ShoppingCart className="h-5 w-5" />,
  "/dashboard/pos/returns": <RefreshCcw className="h-5 w-5" />,
};
