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
  Leaf,
  GitPullRequest,
  User,
  Shield,
  Key,
  LogIn,
  Monitor,
  Lock,
  Store,
  Wrench,
  Truck,
  Link2,
  Code,
  ShoppingBag,
  Edit,
  Tag,
  Layers,
  DollarSign,
  Activity,
  Bell,
  AlertCircle,
  CreditCard,
  RefreshCcw,
  Star,
  MessageCircle,
  Clock,
  BookOpen,
} from "lucide-react";

export const SubIcons: { [key: string]: JSX.Element } = {
  // Mapeo de iconos para la gestión del dashboard
  "/dashboard/home": <Home className="h-5 w-5" />,
  "/dashboard/home/daily-sales": <BarChart className="h-5 w-5" />,
  "/dashboard/home/daily-revenue": <ShoppingCart className="h-5 w-5" />,
  "/dashboard/home/top-selling-products": <TrendingUp className="h-5 w-5" />,
  "/dashboard/home/sales-performance": <BarChart2 className="h-5 w-5" />,
  "/dashboard/home/trend-analysis": <TrendingUp className="h-5 w-5" />,
  "/dashboard/home/inventory-status": <Box className="h-5 w-5" />,
  "/dashboard/home/employee-performance": <UserCog className="h-5 w-5" />,
  "/dashboard/home/customer-analysis": <Users className="h-5 w-5" />,
  "/dashboard/home/customer-segmentation": <Users className="h-5 w-5" />,
  "/dashboard/home/customer-loyalty-dashboard": <Gift className="h-5 w-5" />,
  "/dashboard/home/actionable-insights": <FileText className="h-5 w-5" />,
  "/dashboard/home/predictive-analytics": <BarChart2 className="h-5 w-5" />,
  "/dashboard/home/audit-logs": <FileText className="h-5 w-5" />,
  "/dashboard/home/access-control": <ShieldCheck className="h-5 w-5" />,
  "/dashboard/home/two-factor-authentication": <ShieldCheck className="h-5 w-5" />,
  "/dashboard/home/sustainability-metrics": <Leaf className="h-5 w-5" />,
  "/dashboard/home/social-responsibility-initiatives": (
    <GitPullRequest className="h-5 w-5" />
  ),
  
  // Mapeo de iconos para la gestión de usuarios
  "/dashboard/user-management/user-list": <Users className="h-5 w-5" />,
  "/dashboard/user-management/user-details": <User className="h-5 w-5" />,
  "/dashboard/user-management/user-permissions": <Shield className="h-5 w-5" />,
  "/dashboard/user-management/role-management": <Key className="h-5 w-5" />,
  "/dashboard/user-management/assign-roles": <Key className="h-5 w-5" />,
  "/dashboard/user-management/login-activity": <LogIn className="h-5 w-5" />,
  "/dashboard/user-management/session-management": (
    <Monitor className="h-5 w-5" />
  ),
  "/dashboard/user-management/password-reset": <Lock className="h-5 w-5" />,
  "/dashboard/user-management/user-activity-logs": (
    <FileText className="h-5 w-5" />
  ),
  "/dashboard/store-management/store-info": <Store className="h-5 w-5" />,
  "/dashboard/store-management/inventory-management": (
    <Box className="h-5 w-5" />
  ),
  "/dashboard/store-management/sales-report": <BarChart className="h-5 w-5" />,
  "/dashboard/store-management/store-performance": (
    <TrendingUp className="h-5 w-5" />
  ),
  "/dashboard/store-management/maintenance-logs": (
    <Wrench className="h-5 w-5" />
  ),
  "/dashboard/store-management/supplier-performance": (
    <Truck className="h-5 w-5" />
  ),
  "/dashboard/store-management/external-system-integrations": (
    <Link2 className="h-5 w-5" />
  ),
  "/dashboard/store-management/api-management": <Code className="h-5 w-5" />,

  // Mapeo de iconos para la gestión de productos
  "/dashboard/product-management/product-list": (
    <ShoppingBag className="h-5 w-5" />
  ),
  "/dashboard/product-management/product-details": <Edit className="h-5 w-5" />,
  "/dashboard/product-management/product-pricing": <Tag className="h-5 w-5" />,
  "/dashboard/product-management/product-stock": <Layers className="h-5 w-5" />,
  "/dashboard/product-management/product-categories": (
    <Tag className="h-5 w-5" />
  ),
  "/dashboard/product-management/product-variants": <Box className="h-5 w-5" />,

  // Mapeo de iconos para la gestión de precios
  "/dashboard/price-management/price-update": (
    <DollarSign className="h-5 w-5" />
  ),
  "/dashboard/price-management/discounts": <Tag className="h-5 w-5" />,
  "/dashboard/price-management/pricing-history": (
    <FileText className="h-5 w-5" />
  ),

  // Mapeo de iconos para la gestión de proveedores
  "/dashboard/vendor-management/vendor-list": <Users className="h-5 w-5" />,
  "/dashboard/vendor-management/vendor-details": <Edit className="h-5 w-5" />,
  "/dashboard/vendor-management/vendor-orders": (
    <ShoppingBag className="h-5 w-5" />
  ),
  "/dashboard/vendor-management/vendor-performance": (
    <TrendingUp className="h-5 w-5" />
  ),
  "/dashboard/vendor-management/vendor-communication": (
    <Activity className="h-5 w-5" />
  ),

  // Mapeo de iconos para la gestión de inventarios
  "/dashboard/inventory-management/inventory-list": <Box className="h-5 w-5" />,
  "/dashboard/inventory-management/inventory-update": (
    <Edit className="h-5 w-5" />
  ),
  "/dashboard/inventory-management/inventory-status": (
    <Box className="h-5 w-5" />
  ),
  "/dashboard/inventory-management/low-stock-alerts": (
    <Bell className="h-5 w-5" />
  ),
  "/dashboard/inventory-management/inventory-forecasting": (
    <BarChart className="h-5 w-5" />
  ),

  // Mapeo de iconos para la gestión de compras
  "/dashboard/procurement/purchase-orders": <ShoppingBag className="h-5 w-5" />,
  "/dashboard/procurement/create-order": <Edit className="h-5 w-5" />,
  "/dashboard/procurement/order-tracking": <Box className="h-5 w-5" />,
  "/dashboard/procurement/purchase-history": <FileText className="h-5 w-5" />,
  "/dashboard/procurement/order-status-alerts": (
    <AlertCircle className="h-5 w-5" />
  ),

  // Mapeo de iconos para la gestión de punto de venta
  "/dashboard/pos/sales-transactions": <DollarSign className="h-5 w-5" />,
  "/dashboard/pos/sales-history": <FileText className="h-5 w-5" />,
  "/dashboard/pos/payment-methods": <CreditCard className="h-5 w-5" />,
  "/dashboard/pos/daily-sales-summary": <BarChart className="h-5 w-5" />,
  "/dashboard/pos/returns-management": <RefreshCcw className="h-5 w-5" />,

  // Mapeo de iconos para la gestión de clientes
  "/dashboard/customer-management/customer-list": <Users className="h-5 w-5" />,
  "/dashboard/customer-management/customer-history": (
    <FileText className="h-5 w-5" />
  ),
  "/dashboard/customer-management/customer-promotions": (
    <Tag className="h-5 w-5" />
  ),
  "/dashboard/customer-management/loyalty-program": (
    <Star className="h-5 w-5" />
  ),
  "/dashboard/customer-management/customer-feedback": (
    <MessageCircle className="h-5 w-5" />
  ),

  // Mapeo de iconos para la gestión de empleados
  "/dashboard/employee-management/employee-list": <Users className="h-5 w-5" />,
  "/dashboard/employee-management/employee-details": (
    <Edit className="h-5 w-5" />
  ),
  "/dashboard/employee-management/employee-performance": (
    <TrendingUp className="h-5 w-5" />
  ),
  "/dashboard/employee-management/employee-schedule": (
    <Clock className="h-5 w-5" />
  ),
  "/dashboard/employee-management/payroll-management": (
    <DollarSign className="h-5 w-5" />
  ),
  "/dashboard/employee-management/staff-training": (
    <BookOpen className="h-5 w-5" />
  ),

  // Mapeo de iconos para los informes
  "/dashboard/reports/sales-reports": <BarChart className="h-5 w-5" />,
  "/dashboard/reports/inventory-reports": <Box className="h-5 w-5" />,
  "/dashboard/reports/employee-performance-reports": (
    <TrendingUp className="h-5 w-5" />
  ),
  "/dashboard/reports/product-analysis": <Tag className="h-5 w-5" />,
  "/dashboard/reports/financial-reports": <DollarSign className="h-5 w-5" />,
  "/dashboard/reports/operational-reports": <Activity className="h-5 w-5" />,
  "/dashboard/reports/business-intelligence": <Layers className="h-5 w-5" />,
  "/dashboard/reports/marketing-reports": <BarChart className="h-5 w-5" />,
};
