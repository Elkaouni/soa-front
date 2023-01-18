import {
    Dialog, Grid, TextField
} from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import { withStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';


//import { createMission } from "../Api/Mission";


// const styles = {
//   dialogPaper: {
//     minHeight: "45vh",
//     maxHeight: "45vh",
//   },
// };



function BasicModal({ handleClose, open }) {

  const [formValues, setFormValues] = useState({ demandeur: "", contenu: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((current) => {
      return {
        ...current,
        // 👇️ override value for nested country property
        [name]: value,
      };
    });
  };
  const handleSubmit = () => {
    //api call
    //createMission(formValues.demandeur,formValues.contenu);
  };
  const closeModal = () => {
    //api call
    //createMission(formValues.demandeur,formValues.contenu);
    handleClose()
  };

  return (
    <Modal open={open}>
      <ModalDialog
        fullWidth="true"
        maxWidth="md"
        maxHeight="md"
        open={open}
        onClose={handleClose}
        scroll="body"   
        aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}  
      >
        <form onSubmit={() => handleSubmit()}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Box
                sx={{ color: "#337f94" }}
                className="fw-bold text-center mt-2"
              >
                Nouvelle Demande De Mission
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Demandeur"
                variant="outlined"
                fullWidth
                name="demandeur"
                value={formValues.demandeur}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Contenu"
                variant="outlined"
                fullWidth
                name="contenu"
                value={formValues.contenu}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
    <Grid container spacing={2}>
        <Grid item>
            <Button sx={{ backgroundColor:"#337f94", color:"white" }} variant="outlined" type="submit">Ajouter</Button>
        </Grid>
        <Grid item>
            <Button sx={{ backgroundColor:"#337f94", color:"white" }} variant="outlined" type="cancel">Annuler</Button>
        </Grid>
    </Grid>
</Grid>
          </Grid>
        </form>
      </ModalDialog>
    </Modal>
  );
}

// export default withStyles(styles)(BasicModal);

export default BasicModal;