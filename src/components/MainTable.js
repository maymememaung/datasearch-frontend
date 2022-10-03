import Table from 'react-bootstrap/Table';

export const MainTable = (props) => {
    return (
        <Table id="main-table" responsive bordered hover variant='dark'>
            <thead>
                <tr className="table-primary">
                    {
                        props.headers ? props.headers.map((header) => {
                            return <th onClick={props.sortFunc}> {header} </th>
                        }) : null
                    }</tr>
            </thead>
            <tbody>{
                props.data ? props.data.map((record) => {
                    return (
                        <tr key={record.id}>{
                            Object.values(record).map((val, i) => {
                                return <td>{val}</td>
                            })
                        }</tr>
                    )
                }) : null
            }</tbody>
        </Table>
    );
}
