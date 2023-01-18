import configData from "../configs/config.json";
import axios from "axios";

const remboursementAPI = configData.REMBOURSEMENT_SERVICE_API 


class RemboursementService{

    //fetches all Remboursements

    findAllRemboursements(){
        return axios.get(`${remboursementAPI}`).then(
            (res) => {
              console.log(res.data);
              return res.data;
            },
            (err) => {
              console.error("error in getting findAllRemboursements");
            }
        );
    }

    findRemboursementById(id){
      return axios.get(`${remboursementAPI}` + "id", id).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting findRemboursementById");
        }
    );
    }

    findRemboursementByProfesseurId(id){
      return axios.get(`${remboursementAPI}` + "professeur/id", id).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting findRemboursementByProfesseurId");
        }
    );
    }

    findRemboursementByMissionId(id){
      return axios.get(`${remboursementAPI}` + "mission/id", id).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting findRemboursementByMissionId");
        }
      );
    }

    addRemboursement(remboursement){
      return axios.get(`${remboursementAPI}` + "add", remboursement).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting addRemboursement");
        }
      );
    }

    updateRemboursement(remboursement){
      return axios.get(`${remboursementAPI}` + "update", remboursement).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting updateRemboursement");
        }
      );
    }

    updateEtatRemboursement(remboursement){
      return axios.get(`${remboursementAPI}` + "update/etat", remboursement).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting updateEtatRemboursement");
        }
      );
    }

    deleteRemboursement(id){
      return axios.get(`${remboursementAPI}` + "delete" , id).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting deleteRemboursement");
        }
      );
    }
}

export default new RemboursementService();

// static fake checks
//fetches all Remboursements


const remboursements = [{

  id: 1,
  codeMission: 1,
  demandeur: "Pr Hajar",
  professeur: {
    id: 1,
    nom: "Hajar",
    prenom: "Hajar"
  },
  frais: 600,
  budgetAttrib: 900,
  remboursementAttrib: 0,
  statut: "Pending",
  validation: false,
  validPrice: false
},

{

  id: 2,
  codeMission: 3,
  demandeur: "Pr Hiba",
  professeur: {
    id: 1,
    nom: "Hiba",
    prenom: "Hiba"
  },
  frais: 1500,
  budgetAttrib: 900,
  remboursementAttrib: 800,
  statut: "Validé par Chef d'Imm",
  validationFrais: true,
  validation: true,
  validPrice: false

},];

//fetches all Remboursements

const fetchRemboursements = (setRemboursements) => {

      setRemboursements(remboursements);

};

export { fetchRemboursements };