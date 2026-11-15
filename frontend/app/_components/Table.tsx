import { ReactNode } from "react";
import { TableCell, TableTypes } from "./component.types";
import TableLabels from "./TableLabels";
import TableRow from "./TableRow";

const Table = <T,>({ rows, tableTitle, columns, getRowKey } : TableTypes<T>) => {
    const tableLabels : TableCell[] | undefined = columns?.map(col => ({key: col.key, content: col.header}));
    const getRowContent = (row : T) => {
        const createRowBody : TableCell[] | undefined = columns?.map(col => (
            {
                key: col.key, 
                content: col.render(row)
            }
        ))
        return createRowBody;
    };
    
    return (
        <div>
            <table>
                {tableTitle && <caption>{tableTitle}</caption>}
                {tableLabels && <TableLabels labels={tableLabels} />}
                <tbody>
                    {rows.map(r => (
                        <TableRow 
                            key={getRowKey(r)}
                            rowContent={getRowContent(r)}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;