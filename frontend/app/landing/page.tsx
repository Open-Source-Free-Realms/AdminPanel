"use client";

import { useState } from "react";
import NavSideBar from "../_components/NavSideBar";
import { SideBarChildrenTitles } from "../_components/constants";
import { selectionToComponent } from "./view-to-component";

function LandingPage() {
    const [currentSelection, setCurrentSelection] = useState<SideBarChildrenTitles>(SideBarChildrenTitles.guilds);
    const SelectedView = selectionToComponent[currentSelection];
    return (
        <div>
            <NavSideBar handleSelection={setCurrentSelection} />
            <SelectedView />
        </div>
        
    )
}

export default LandingPage;