export const dashboardPath = (pathname: string): boolean => {
  const basePath = "/dashboard";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const userManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/user-management";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const storeManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/store-management";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const productManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/product-management";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const priceManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/price-management";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const vendorManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/vendor-management";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const inventoryManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/inventory-management";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const procurementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/procurement";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const posPath = (pathname: string): boolean => {
  const basePath = "/dashboard/pos";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const customerManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/customer-management";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const employeeManagementPath = (pathname: string): boolean => {
  const basePath = "/dashboard/employee-management";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

export const reportsPath = (pathname: string): boolean => {
  const basePath = "/dashboard/reports";
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};
