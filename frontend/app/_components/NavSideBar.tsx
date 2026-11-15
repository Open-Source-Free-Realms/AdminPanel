import { NavSidebarTypes } from "./component.types";
import { navSidebarContents } from "../constants";
import NavSideBarCategory from "./NavSideBarCategory";

const NavSideBar = ( { handleSelection } : NavSidebarTypes) => {
    return (
        <div>
            {
                navSidebarContents.map(section => (
                    <NavSideBarCategory 
                        key={section.title}
                        title={section.title}
                        items={section.items}
                        handleSelection={handleSelection}
                    />
                ))
            }
        
        </div>
    )
}

export default NavSideBar;