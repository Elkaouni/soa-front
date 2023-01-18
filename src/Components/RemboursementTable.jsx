import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme, Button, IconButton, Grid, TableCell } from "@mui/material";
//import { fetchRemboursements } from "../Api/Remboursement";
import * as React from "react";
import { useEffect } from "react";
//import { validateRemboursement } from "../Api/Remboursement";
//import { validateRemboursementPrice } from "../Api/Remboursement";
import OrderModalDialog from "./ChangeOrdreRem";
import PriceModalDialog from "./PriceValidationModal";
import EditIcon from '@mui/icons-material/Edit';
import { Stack } from "@mui/system";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function RemboursementTable(props) {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  //  const [remboursements, setRemboursements] = React.useState([]);
  //  const [remboursementsPerUser , setRemboursementsPerUser]=React.useState([]);
  //  useEffect(() => {
  //    all ?
  //      fetchRemboursements(setRemboursements)
  //      : ;
  //  }, []);
  const { remboursements } = props;

  const columns = [
    { field: "id", headerName: "Remboursement ID",flex: 1},
    { field: "codeMission", headerName: "Code Mission", flex: 1, },
    { field: "demandeur", headerName: "Professeur", flex: 1, },
    {
      field: "frais",
      headerName: "Frais (DH)",
      flex: 1,
      renderCell: ({ row: { frais, id } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="space-between"
            justifyItems="center"
            borderRadius="4px"
            flexDirection="row"
            
          >
            <Grid container direction="row" spacing={1}>
              <Grid item xs={8}>
            <Typography m="20px">{frais? frais : "NA"}</Typography>
            </Grid>
            <Grid item xs={4}>
            <IconButton
              variant="outlined"
              style={{padding : "20px" }}
              fullWidth
              onClick={() => {
                setOpen(true);
              }}
            >
            <EditIcon></EditIcon>
            </IconButton>
            </Grid>
            <OrderModalDialog open={open} handleClose={handleClose} id={id} />
            </Grid>
          </Box>
        );
      },
    }, 
    { field: "budgetAttrib", headerName: "Budget Initial", flex: 1, },
    {
      field: "statut",
      headerName: "Statut",
      flex: 1,
    },
    {
      field: "remboursementAttrib",
      headerName: "Montant Remboursé",
      flex: 1,
    }, 
    {
      field: "validation",
      headerName: "Valider demande",
      flex: 1,
      renderCell: ({ row: { validation, id } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            {validation == 1 ? (
              <Button variant="contained" color="success" disabled fullWidth>
                Validé
              </Button>
              
            ) : (
              <div>
                <Stack>
                <Button
                variant="contained"
                sx={{ backgroundColor: "#337f94" }}
                //onClick={() => validateRemboursement(id)}
              >
                Valider
              </Button>
                </Stack>

                <Stack>
                <Button
                variant="contained"
                sx={{ backgroundColor: "#337f94" }}
                //onClick={() => validateRemboursement(id)}
              >
                Annuler
              </Button>
                </Stack>
                              
                </div>
              
            )}
          </Box>
        );
      },
    },
    {
      field: "validPrice",
      headerName: "Valider montant",
      flex: 1,
      renderCell: ({ row: { validPrice, validation, id, demandeur } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            {validPrice == 1 ? (
              <Button variant="contained" color="success" disabled fullWidth>
                Validé
              </Button>
            ) : validation == 1 ? (
              <>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#337f94" }}
                  onClick={() => {
                    //setOpen2(true);
                  }}
                  fullWidth
                >
                  Valider
                </Button>
                <PriceModalDialog
                  //open2={open2}
                  //handleClose2={handleClose2}
                  id={id}
                  demandeur={demandeur}
                />
              </>
            ) : (
              <Typography>Pending</Typography>
            )}
          </Box>
        );
      },
    },
  ];

 /* return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={remboursements} columns={columns} />
    </div>
  ); */

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="remboursement table">
        <TableHead>
          <TableRow>
            <TableCell>Id </TableCell>
            <TableCell align="center">Code Mission</TableCell>
            <TableCell align="center">Professeur</TableCell>
            <TableCell align="center">Frais</TableCell>
            <TableCell align="center">Budget Initial</TableCell>
            <TableCell align="center">Statut</TableCell>
            <TableCell align="center">Montant Remboursé</TableCell>
            <TableCell align="center">Valider Demande</TableCell>
            <TableCell align="center">Valider Montant</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {remboursements.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.codeMission}</TableCell>
              <TableCell align="center">{row.professeur.nom + " " + row.professeur.prenom}</TableCell>
              <TableCell align="center">{row.frais}</TableCell>
              <TableCell align="center">{row.budgetAttrib}</TableCell>
              <TableCell align="center">{row.statut}</TableCell>
              <TableCell align="center">{row.remboursementAttrib}</TableCell>
              <TableCell align="center">
              <Stack>
                  <Button
                    style={{ margin: "5px", backgroundColor:"#337f94", color:"white" }}
                    variant="outlined"
                    onClick={() => {
                      //setShowModal(true);
                    }}
                  >
                    Valider
                  </Button>
                </Stack>
                <Stack>
                  <Button
                    style={{ margin: "5px", backgroundColor:"#337f94", color:"white" }}
                    variant="outlined"
                    onClick={() => {
                      //setShowModal(true);
                    }}
                  >
                    Annuler
                  </Button>
                </Stack>
                </TableCell>

                <TableCell align="center">
                <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            {row.validPrice == 1 ? (
              <Button variant="contained" color="success" disabled fullWidth>
                Validé
              </Button>
            ) : row.validation == 1 ? (
              <>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#337f94" }}
                  onClick={() => {
                    //setOpen2(true);
                  }}
                  fullWidth
                >
                  Valider
                </Button>
                <PriceModalDialog
                  //open2={open2}
                  //handleClose2={handleClose2}
                  id={row.id}
                  demandeur={row.demandeur}
                />
              </>
            ) : (
              <Typography>Pending</Typography>
            )}
          </Box>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
 
    </TableContainer>
  );
}
