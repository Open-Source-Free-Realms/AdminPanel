import { TableRowTypes } from "./component.types";

const TableRow = ( { rowContent } : TableRowTypes) => {
    return (
        <tr>
            {rowContent && rowContent.map(rowCell => (
                <td key={rowCell.key}>{rowCell.content}</td>
            ))}
        </tr>
    )
}

export default TableRow;