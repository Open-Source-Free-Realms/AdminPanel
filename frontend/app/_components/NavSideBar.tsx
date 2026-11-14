import { navSidebarContents } from "./constants";
import { NavSidebarTypes } from "./nav-sidebar.types";

const NavSideBar = ( { handleSelection } : NavSidebarTypes) => {
    return (
        <div>
            {
                navSidebarContents.map(section => (
                    <div>
                        <h5 key={section.title}>{section.title}</h5>
                        <ul>
                            {
                                section.children.map(subsection => (
                                    <li key={subsection} onClick={() => handleSelection(subsection)}>{subsection}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        
        </div>
    )
}

export default NavSideBar;