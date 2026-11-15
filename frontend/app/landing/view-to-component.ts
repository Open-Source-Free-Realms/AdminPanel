import { ComponentType } from "react";
import { SideBarChildrenTitles } from "../constants";
import GuildRequests from "./_views/GuildRequests";
import ManageFilters from "./_views/ManageFilters";
import ManageGuilds from "./_views/ManageGuilds";
import ManageMembers from "./_views/ManageMembers";
import ManageModerators from "./_views/ManageModerators";
import NameChangeRequests from "./_views/NameChangeRequests";
import SearchChatLogs from "./_views/SearchChatLogs";
import SearchMembers from "./_views/SearchMembers";

export const selectionToComponent : Record<SideBarChildrenTitles, ComponentType> = {
    [SideBarChildrenTitles.guilds] : GuildRequests,
    [SideBarChildrenTitles.nameChanges]: NameChangeRequests,
    [SideBarChildrenTitles.searchMembers]: SearchMembers,
    [SideBarChildrenTitles.manageGuilds]: ManageGuilds,
    [SideBarChildrenTitles.manageMembers]: ManageMembers,
    [SideBarChildrenTitles.manageMods]: ManageModerators,
    [SideBarChildrenTitles.searchChatLogs]: SearchChatLogs,
    [SideBarChildrenTitles.manageFilters]: ManageFilters,
}