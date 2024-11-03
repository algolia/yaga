import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";

import React from "react";
import {useRefinementList, UseRefinementListProps} from "react-instantsearch";



  function NavBar(props: UseRefinementListProps) {
    const {
      items,
      refine,
    } = useRefinementList(props);
    return (
        <div>
          <NavigationMenu className="hidden md:flex justify-center w-full">
            <NavigationMenuList className="space-x-4">
              {items.map(item => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => refine(item.value)}>
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
    );
  }
  
  export default NavBar;
  