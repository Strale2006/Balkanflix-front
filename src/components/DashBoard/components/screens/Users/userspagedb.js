import './userspagedb.scss';
import DataTable from '../../dataTable/DataTable'
import {userRows} from "../../../data";

const Userspagedb = () => {

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "img",
            headerName: "Avatar",
            width: 100,
            renderCell: (params) => {
                return <img src={params.row.img || "/noavatar.png"} alt="" />;
            },
        },
        {
            field: "firstName",
            type: "string",
            headerName: "First name",
            width: 150,
        },
        {
            field: "lastName",
            type: "string",
            headerName: "Last name",
            width: 150,
        },
        {
            field: "email",
            type: "string",
            headerName: "Email",
            width: 200,
        },
        {
            field: "phone",
            type: "string",
            headerName: "Phone",
            width: 200,
        },
        {
            field: "createdAt",
            headerName: "Created At",
            width: 200,
            type: "string",
        },
        {
            field: "verified",
            headerName: "Verified",
            width: 150,
            type: "boolean",
        },
    ];

    const rows = [
        { id: 1, lastName: 'Popovic', firstName: 'Strahinja', age: 3 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        { id: 4, lastName: 'Golocevac', firstName: 'Mijat', age: 17 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];


    return (
        <div className='usersdb'>
            <div className="info">
                <h1>USERS</h1>
                <button>Add New User</button></div>
            <DataTable columns={columns} rows={userRows}/>
        </div>
    );
}

export default Userspagedb;