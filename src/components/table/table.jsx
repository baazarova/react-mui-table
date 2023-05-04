import * as React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { data } from "../../data/users";
import { Box, Button, Menu, MenuItem, TablePagination, Typography } from "@mui/material";
import "./table.css";
import { TableItems } from "./tableItems";

export default function TableComp({ query, setQuery }) {
 

  const [users, setUsers] = React.useState(data);
  localStorage.setItem("users", JSON.stringify(users));
 


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchor1El, setAnchor1El] = React.useState(null);
  const open1 = Boolean(anchor1El);
  const handleClick1 = (event) => {
    setAnchor1El(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchor1El(null);
  };

  const sortNameA = () => {
    const dataCopy = [...data];
    dataCopy.sort((userA, userB) => (userA.name > userB.name ? 1 : -1));
    setUsers(dataCopy);
  };


  const sortNameZ = () => {
    const dataCopy = [...data];
    dataCopy.sort((userA, userB) => (userA.name < userB.name ? 1 : -1));

    setUsers(dataCopy);
  };

  const sortNew = ()=>{
    const dataCopy = [...data];
    dataCopy.sort((a, b) => (
      a.date_of_onliine > b.date_of_onliine ? 1 : -1
    ));
    setUsers(dataCopy);
  }
  const sortOld = ()=>{
    const dataCopy = [...data];
    dataCopy.sort((a, b) => (
      a.date_of_onliine < b.date_of_onliine ? 1 : -1
    ));
    setUsers(dataCopy);
  }

  const highFilter = ()=>{
    const dataCopy = [...data];
    const newData = [];
    dataCopy.map((item)=>(
      item.priority === "high" ? newData.push(item) : ''
    ))
    setUsers(newData)
  }
  const normalFilter = ()=>{
    const dataCopy = [...data];
    const newData = [];
    dataCopy.map((item)=>(
      item.priority === "normal" ? newData.push(item) : ''
    ))
    setUsers(newData)
  }
  const lowFilter = ()=>{
    const dataCopy = [...data];
    const newData = [];
    dataCopy.map((item)=>(
      item.priority === "low" ? newData.push(item) : ''
    ))
    setUsers(newData)
  }




  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage)
  return (
    <>
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{ height: "auto", msOverflowY: "scroll" }}
    >
      <Box sx={{display:"flex", alighItems:"center", justifyContent:"space-between", padding:"14px"}} >
      <Typography variant="h5">All Tickets</Typography>
       <Box sx={{gap:"25px", display:"flex"}}>
       <Button
          variant="contained"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Sort
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClick={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={sortNameA}>A-Z</MenuItem>
          <MenuItem onClick={sortNameZ}>Z-A</MenuItem>
          <MenuItem onClick={sortNew}>New-Old</MenuItem>
          <MenuItem onClick={sortOld}>Old-New</MenuItem>
        </Menu>
    
        <Button
          variant="contained"
          id="basic-button"
          aria-controls={open1 ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open1 ? "true" : undefined}
          onClick={handleClick1}
        >
          Filter
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchor1El}
          open={open1}
          onClick={handleClose1}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={highFilter}>high</MenuItem>
          <MenuItem onClick={normalFilter}>normal</MenuItem>
          <MenuItem onClick={lowFilter}>low</MenuItem>
        </Menu>
       </Box>
      </Box>

     <TableItems users={users} query={query} page={page} rowsPerPage={rowsPerPage} emptyRows={emptyRows}/>
    </TableContainer>
    <TablePagination
    rowsPerPageOptions={[6,8,10,12]}
      component="div"
      count={users.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
</>
  );
}
