import configData from "../configs/config.json";
import axios from "axios";

const remboursementAPI = configData.REMBOURSEMENT_SERVICE_API 
const Remboursement_Api_Url_S1 = ""
const Remboursement_Api_Url_S2 = ""
const Remboursement_Api_Url_S3 = ""
const Remboursement_Api_Url_S4 = ""

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


//fetches all Remboursements
const fetchRemboursements = (setRemboursements) => {
  axios.get(`${Remboursement_Api_Url_S1}`).then(
    (res) => {
      console.log(res.data);
      setRemboursements(res.data);
    },
    (err) => {
      console.error("error in getting Remboursements");
    }
  );
};

//fetches Remboursements by demandeur
const fetchRemboursementsByDemandeur = (
  setRemboursementsByDemandeur,
  demandeur
) => {
  axios.get(`${Remboursement_Api_Url_S1}` + "/" + `${demandeur}`).then(
    (res) => {
      console.log(res.data);
      setRemboursementsByDemandeur(res.data);
    },
    (err) => {
      console.error("error in getting Remboursements by demandeur");
    }
  );
};

//compute remboursement
const computeRemboursement = (id) => {
  axios.get(`${Remboursement_Api_Url_S4}` + "/compute/" + `${id}`).then(
    (res) => {
      console.log(res.data);
    },
    (err) => {
      console.error("error in compute remboursement");
    }
  );
};

//creates a Remboursement demande
const createRemboursement = (demandeur, frais, budgetAttrib) => {
  axios
    .get(
      `${Remboursement_Api_Url_S2}` +
        "/" +
        `${demandeur}` +
        "/" +
        `${frais}` +
        "/" +
        `${budgetAttrib}`
    )
    .then(
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.error("error in creating a Remboursement demande");
      }
    );
};

//Changes Remboursement isValid to true
const validateRemboursement = (id) => {
  axios.get(`${Remboursement_Api_Url_S3}` + "/" + `${id}`).then(
    (res) => {
      console.log(res.data);
    },
    (err) => {
      console.error("error in validating Remboursement");
    }
  );
};

//Changes Remboursement isValid to true
const validateRemboursementPrice = (id) => {
  axios.get(`${Remboursement_Api_Url_S3}` + "/frais/" + `${id}`).then(
    (res) => {
      console.log(res.data);
    },
    (err) => {
      console.error("error in validating Remboursement price");
    }
  );
};

//changes ordre of Remboursement
const changeOrdre = (id, ordre) => {
  axios
    .get(`${Remboursement_Api_Url_S3}` + "/" + `${id}` + "/" + `${ordre}`)
    .then(
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.error("error in changing ordre of Remboursement");
      }
    );
};

export {
  fetchRemboursements,
  fetchRemboursementsByDemandeur,
  createRemboursement,
  validateRemboursement,
  changeOrdre,
  validateRemboursementPrice,
  computeRemboursement,
};
