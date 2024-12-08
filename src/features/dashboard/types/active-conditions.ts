export const dashboardPath = (pathname: string): boolean => {
  const basePath = "/dashboard";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const salesPath = (pathname: string): boolean => {
  const basePath = "/dashboard/sales";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const inventoryPath = (pathname: string): boolean => {
  const basePath = "/dashboard/inventory";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const userManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/users";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const employeeManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/employees";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const productManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/products";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const customerManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/customers";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const vendorManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/vendors";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const storeManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/store";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const analyticsPath = (pathname: string): boolean => {
  const basePath = "/dashboard/analytics";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const settingsPath = (pathname: string): boolean => {
  const basePath = "/dashboard/settings";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const posPath = (pathname: string): boolean => {
  const basePath = "/dashboard/pos";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};
