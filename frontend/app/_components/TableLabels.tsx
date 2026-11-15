import { TableLabelTypes } from "./component.types";

const TableLabels = ( { labels } : TableLabelTypes ) => {
    return (
        <thead>
            <tr>
                {labels.map(label => (
                    <th key={label.key}>{label.content}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableLabels;