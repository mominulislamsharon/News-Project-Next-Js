import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl flex justify-between items-center mx-auto px-4  sm:px-6 lg:px-8">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center space-x-8">
            {/* News */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/news" className="hover:text-red-500">
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services dropdown */}
            <NavigationMenuItem className="hover:text-red-500 text-lg ">
              <NavigationMenuTrigger className="text-gray-700">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
                  <li>
                    <NavigationMenuLink href="/services/web">
                      Web Development
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/apps">
                      Mobile Apps
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/seo">
                      SEO
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="hover:text-red-500">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="hover:text-red-500"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center ">
            <span className="mr-2">Dark Mode</span>
            <Switch/>
          </div>
          <Button variant="default">Login</Button>
        </div>
        {/* mobile hamber menu */}
        <div className="lg:hidden">
          <Button variant="outline">
            <AiOutlineMenu size={24} />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
