import "./dataTable.scss"
import {DataGrid, GridToolbar} from "@mui/x-data-grid";

    const DataTable = ({rows, columns, Link, props, handleDelete}) => {

        const actionColumn = {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params, ) => {
                return (
                    <div className="action">
                        <Link>
                            <img src="/Dashboard/view.svg" alt="" />
                        </Link>
                        <div className="delete">
                            <img src="/Dashboard/delete.svg" alt="" />
                        </div>
                    </div>
                );
            },
        }

    return (
        <div className="dataTable">
            <DataGrid
                className="dataGrid"
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />

        </div>
    )
}

export default DataTable