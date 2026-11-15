import { Dispatch, ReactNode, SetStateAction } from "react";
import { SideBarTitles, SideBarChildrenTitles } from "../constants";

export interface SideBarSection {
    title: SideBarTitles;
    items: SideBarChildrenTitles[];
}

export interface NavSidebarTypes {
    handleSelection: Dispatch<SetStateAction<SideBarChildrenTitles>>;
}

export interface TextTypes {
    children: ReactNode;
}

export interface NavSideBarCategoryTypes {
    title: SideBarTitles;
    items: SideBarChildrenTitles[];
    handleSelection: Dispatch<SetStateAction<SideBarChildrenTitles>>;
}

export interface TableCell {
    key: string;
    content: ReactNode;
}

export interface TableLabelTypes {
    labels: TableCell[];
}

export interface TableRowTypes {
    rowContent: TableCell[] | undefined;
}

export interface TableColumn<T> {
    key: string;
    header: ReactNode;
    render: (row: T) => ReactNode;

}
export interface TableTypes<T> {
    rows: T[];
    tableTitle?: string;
    columns?: TableColumn<T>[];
    getRowKey: (row: T) => string;
}
