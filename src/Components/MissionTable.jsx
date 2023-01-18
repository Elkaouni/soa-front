import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import OrdreModal from "./OrdreModal";
//import { validateMission } from "../Api/Mission";




export default function MissionTable({ missions }) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const [currentUser, setCurrentUser] = useState("user2"); //new line ana
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id Mission </TableCell>
            <TableCell align="center">Professeur</TableCell>
            <TableCell align="center">Destination</TableCell>
            <TableCell align="center">Description</TableCell>
            {currentUser !== "user1" && ( // new line
              <TableCell align="center">Date Départ Prévu</TableCell>
           /*new line ana*/ )}
            <TableCell align="center">Date Retour Prévu</TableCell>
            <TableCell align="center">Statut</TableCell>
            <TableCell align="center">Valider/Annuler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {missions.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.demandeur}</TableCell>
              <TableCell align="center">{row.destination}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.dateDepart}</TableCell>
              <TableCell align="center">{row.dateRetour}</TableCell>
              <TableCell align="center"> {row.statut}</TableCell>
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
                  <OrdreModal open={showModal} handleClose={handleClose} id={row.id}/>
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
                  <OrdreModal open={showModal} handleClose={handleClose} id={row.id}/>
                </Stack>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
 
    </TableContainer>
  );
}
