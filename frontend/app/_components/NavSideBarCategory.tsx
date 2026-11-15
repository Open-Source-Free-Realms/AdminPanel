import { NavSideBarCategoryTypes } from "./component.types";
import Text from "./Text";

const NavSideBarCategory = ( { title, items, handleSelection } : NavSideBarCategoryTypes) => {
    return (
        <div>
            <Text>{title}</Text>
            <ul>
                {items.map(item => (
                    <li key={item}>
                        <button type="button" onClick={() => handleSelection(item)}>{item}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavSideBarCategory;