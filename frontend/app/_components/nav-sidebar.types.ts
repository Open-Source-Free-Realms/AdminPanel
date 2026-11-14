import { Dispatch, SetStateAction } from "react";
import { SideBarTitles, SideBarChildrenTitles } from "./constants";

export interface SideBarSection {
    title: SideBarTitles;
    children: SideBarChildrenTitles[];
}

export interface NavSidebarTypes {
    handleSelection: Dispatch<SetStateAction<SideBarChildrenTitles>>;
}
