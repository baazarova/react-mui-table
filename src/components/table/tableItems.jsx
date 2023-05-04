import {
  Avatar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

export const TableItems = ({ users, query, page,rowsPerPage, emptyRows }) => {
  return (
    <div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ticket Details</TableCell>
            <TableCell align="left">Customer Name</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users
            .filter((user) => user.name.toLowerCase().includes(query))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  border: 0,
                  padding: 0,
                }}
              >
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  component="th"
                  scope="row"
                >
                  <Avatar alt="Remy Sharp" src={row.ava} />
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 0,
                    }}
                  >
                    <Typography variant="body2">{row.address}</Typography>
                    <Typography variant="body2">
                      {row.date_of_register}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell align="left">
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      p: 0,
                      m: 0,
                    }}
                  >
                    <Typography variant="body2">{row.name}</Typography>
                    <Typography variant="body2">{row.phone}</Typography>
                  </Stack>
                </TableCell>
                <TableCell sx={{ padding: "10px" }} align="left">
                  <Stack>
                    <Typography variant="body2">
                      {row.date_of_onliine}
                    </Typography>
                    <Typography variant="body2">{row.time}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="left">
                  {row.priority === "high" && (
                    <p className="high">{row.priority}</p>
                  )}
                  {row.priority === "normal" && (
                    <p className="normal">{row.priority}</p>
                  )}
                  {row.priority === "low" && (
                    <p className="low">{row.priority}</p>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {
              emptyRows > 0 && (
                <TableRow style={{height: 53 * emptyRows}}>
                  <TableCell colSpan={4}/>
                </TableRow>
              )
            }
        </TableBody>
      </Table>
    </div>
  );
};
