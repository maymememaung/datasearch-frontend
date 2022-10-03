import Table from 'react-bootstrap/Table';
// import sort_arrows from '../sort-arrows.svg'
import arrow_up from '../arrow_up.svg'
import arrow_down from '../arrow_down.svg'

export const MainTable = (props) => {
    return (
        <Table id="main-table" responsive bordered hover variant='dark'>
            <thead>
                <tr className="table-primary">
                    {
                        props.headers ? props.headers.map((header) => {
                            return <th> {header} <img src={arrow_up} onClick={props.sortDsc}></img><img src={arrow_down} onClick={props.sortAsc}></img></th>
                        }) : null
                    }</tr>
            </thead>
            <tbody>{
                props.data && props.data.length > 0 ? props.data.map((record) => {
                    return (
                        <tr key={record.id}>{
                            Object.values(record).map((val, i) => {
                                return <td>{val}</td>
                            })
                        }</tr>
                    )
                }) : <tr><td colSpan={5}>No matching records found.</td></tr>
            }</tbody>
        </Table>
    );
}
