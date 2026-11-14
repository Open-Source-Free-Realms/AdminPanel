import { SideBarSection } from "./nav-sidebar.types";

export const navSidebarContents : SideBarSection[] = [
    {
        title: "Requests",
        children: ["Guilds", "Name Changes"]
    },
    {
        title: "Members",
        children: ["Search Members", "Manage Members"]
    },
    {
        title: "Moderators",
        children: ["Guilds", "Manage Moderators"]
    },
    {
        title: "Chat Settings",
        children: ["Search Chat Logs", "Manage Filters"]
    }
]
