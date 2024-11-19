interface NavItem {
  href: string;
  label: string;
}

interface SidebarItem {
  label?: string;
  value?: string;
}

const categoryItems: NavItem[] = [
  { href: "/ecommerce/category/espresso", label: "Espresso" },
  { href: "/ecommerce/category/latte", label: "Latte" },
  { href: "/ecommerce/category/cappuccino", label: "Cappuccino" },
  { href: "/ecommerce/category/americano", label: "Americano" },
  { href: "/ecommerce/category/macchiato", label: "Macchiato" },
  { href: "/ecommerce/category/mocha", label: "Mocha" },
];

const roastTypeItems: SidebarItem[] = [
  { label: "Light Roast", value: "light" },
  { label: "Medium Roast", value: "medium" },
  { label: "Dark Roast", value: "dark" },
  { label: "Espresso Roast", value: "espresso" },
];

const originItems: SidebarItem[] = [
  { label: "Colombia", value: "colombia" },
  { label: "Ethiopia", value: "ethiopia" },
  { label: "Brazil", value: "brazil" },
  { label: "Kenya", value: "kenya" },
  { label: "Costa Rica", value: "costa-rica" },
];

const sizeItems: SidebarItem[] = [
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" },
];

export interface PriceRange {
  min: number;
  max: number;
}

const priceFilter: PriceRange = {
  min: 2,
  max: 20,
};

export { categoryItems, roastTypeItems, originItems, sizeItems, priceFilter };
