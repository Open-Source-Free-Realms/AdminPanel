import { ComponentType } from "react";
import { SideBarSection } from "./nav-sidebar.types";
import GuildRequests from "../landing/_views/GuildRequests";
import NameChangeRequests from "../landing/_views/NameChangeRequests";
import SearchMembers from "../landing/_views/SearchMembers";
import ManageGuilds from "../landing/_views/ManageGuilds";
import ManageMembers from "../landing/_views/ManageMembers";
import ManageModerators from "../landing/_views/ManageModerators";
import SearchChatLogs from "../landing/_views/SearchChatLogs";
import ManageFilters from "../landing/_views/ManageFilters";

export enum SideBarTitles {
    requests = "Requests",
    moderators = "Moderators",
    members = "Members",
    chatSettings = "Chat Settings"
}

export enum SideBarChildrenTitles {
    nameChanges = "Name Changes",
    guilds = "Guilds",
    searchMembers = "Search Members",
    manageGuilds = "Manage Guilds",
    manageMembers = "Manage Members",
    manageMods = "Manage Moderators",
    searchChatLogs = "Search Chat Logs",
    manageFilters = "Manage Filters"
}

export const navSidebarContents : SideBarSection[] = [
    {
        title: SideBarTitles.requests,
        children: [SideBarChildrenTitles.guilds, SideBarChildrenTitles.nameChanges]
    },
    {
        title: SideBarTitles.requests,
        children: [SideBarChildrenTitles.searchMembers, SideBarChildrenTitles.manageMembers]
    },
    {
        title: SideBarTitles.moderators,
        children: [SideBarChildrenTitles.manageGuilds, SideBarChildrenTitles.manageMods]
    },
    {
        title: SideBarTitles.chatSettings,
        children: [SideBarChildrenTitles.searchChatLogs, SideBarChildrenTitles.manageFilters]
    }
]
