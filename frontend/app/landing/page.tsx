"use client";

import { ComponentType, useState } from "react";
import NavSideBar from "../_components/NavSideBar";
import { SideBarChildrenTitles } from "../constants";
import { selectionToComponent } from "./view-to-component";

function LandingPage() {
    const [currentSelection, setCurrentSelection] = useState<SideBarChildrenTitles>(SideBarChildrenTitles.guilds);
    const SelectedView : ComponentType = selectionToComponent[currentSelection];
    return (
        <div>
            <NavSideBar handleSelection={setCurrentSelection} />
            <SelectedView />
        </div>
        
    )
}

export default LandingPage;