import React, { useState } from 'react'
import './allTasklist.css'
import { DataGrid } from '@mui/x-data-grid';
import { taskList } from './columnsData'
import { Link } from 'react-router-dom';
import { DeleteForever } from '@material-ui/icons'
import { useSelector } from 'react-redux';
import EditTask from '../EditTask/EditTask';


export default function AllTaskList() {
    const storageItems = localStorage.getItem('task')
    const allData = useSelector(state => state.repo.obj)
    const [data, setData] = useState(JSON.parse(storageItems))

  
   
    console.log(storageItems)


    const deleteTask = (id) => {
        const removData = data.filter(ele => ele.id !== id)
        setData(removData)
        localStorage.setItem("task",JSON.stringify(removData))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'Taskname',
            headerName: 'Taskname',
            width: 150,
            editable: true,
        },
        {
            field: 'Created',
            headerName: 'Created On',
            width: 200,
            editable: true,
        },
        {
            field: 'Deadline',
            headerName: 'Deadline',
            // type: 'number',
            width: 170,
            editable: true,
        },
        {
            field: 'Status',
            headerName: 'Status',

            // description: 'This column has a value getter and is not sortable.',
            // sortable: false,
            width: 160,
            // valueGetter: (params) =>
            //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
            //     }`,
        },
        {
            field: "action",
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`edit/${params.row.id}`}>
                            <button className="editbtn">Edit</button>
                        </Link>

                        <DeleteForever className="delbtn" onClick={() => deleteTask(params.row.id)} />

                    </>
                )
            }
        }
    ];

    return (
        <div style={{ height: 500, width: '100%' }} className="dataGrid">
            <h3 className="headerlist">All Tasks List</h3>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
