import { navSidebarContents } from "./constants";


const NavSideBar = () => {
    return (
        <div>
            {
                navSidebarContents.map(section => (
                    <div>
                        <h5>{section.title}</h5>
                        <ul>
                            {
                                section.children.map(subsection => (
                                    <li>{subsection}</li>
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