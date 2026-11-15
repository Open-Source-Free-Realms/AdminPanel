import { SideBarSection } from "./_components/component.types";

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
        items: [SideBarChildrenTitles.guilds, SideBarChildrenTitles.nameChanges]
    },
    {
        title: SideBarTitles.requests,
        items: [SideBarChildrenTitles.searchMembers, SideBarChildrenTitles.manageMembers]
    },
    {
        title: SideBarTitles.moderators,
        items: [SideBarChildrenTitles.manageGuilds, SideBarChildrenTitles.manageMods]
    },
    {
        title: SideBarTitles.chatSettings,
        items: [SideBarChildrenTitles.searchChatLogs, SideBarChildrenTitles.manageFilters]
    }
];

export const guildRequestsLabels : string[] = [
    "Requested Guild",
    "Owner IGN"
];

export const nameRequestsLabels : string[] = [
    "Requested Name",
    "Original Name",
    "Username"
];
