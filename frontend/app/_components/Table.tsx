import { TableTypes } from "./component.types";
import TableLabels from "./TableLabels";
import TableRow from "./TableRow";

const Table = <T,>({ rows, tableTitle, columns, getRowKey } : TableTypes<T>) => {
    return (
        <div>
            <table>
                {tableTitle && <caption>{tableTitle}</caption>}
                <TableLabels></TableLabels>
                <tbody>
                    <TableRow></TableRow>
                </tbody>
            </table>
        </div>
    )
}

export default Table;