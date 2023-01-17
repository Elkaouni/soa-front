import configData from "../configs/config.json";
import axios from "axios";

const missionAPI = configData.MISSION_SERVICE_API; 
const api = configData.SERVICE_API; 

class MissionService{
  findAllMissions(){
    return axios.get(`${missionAPI}`).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting findAllMissions");
        }
    );
  }
  findMissionById(id){
    return axios.get(`${missionAPI}` + "id", id).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting findMissionById");
        }
    );
  }
  findMissionByProfesseurId(id){
    return axios.get(`${missionAPI}` + "id", id).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting findMissionByProfesseurId");
        }
    );
  }

  addMission(mission){
    return axios.get(`${missionAPI}` + "add", mission).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting addMission");
        }
    );
  }

  updateMission(mission){
    return axios.get(`${missionAPI}` + "update", mission).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting updateMission");
        }
    );
  }
  updateRetourMission(mission){  
    return axios.get(`${missionAPI}` + "update/retour", mission).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting updateRetourMission");
        }
    ); 
  }

  deleteMission(mission){    
    return axios.get(`${missionAPI}`+ "delete", mission).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting deleteMission");
        }
    );
  }

  validateMissionChefImm(mission){   
    return axios.get(`${missionAPI}`+ "chef-imm/validation", mission).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting validateMissionChefImm");
        }
    );
  }
  validateMissionRegisseur(mission){
    return axios.get(`${missionAPI}` + "regisseur/validation", mission).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting validateMissionRegisseur");
        }
    );
  }

  addTransportMission(transport){
    return axios.get(`${missionAPI}` + "add/transport", transport).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting addTransportMission");
        }
    );
  }

  findAllMissionsNonRemboursees(){
    return axios.get(`${missionAPI}` + "add/transport").then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting findAllMissionsNonRemboursees");
        }
    );
  }

  findAllPendingMissionsNonRemboursees(){
    return axios.get(`${missionAPI}` + "add/transport").then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting findAllPendingMissionsNonRemboursees");
        }
    );
  }

  calculerTaux(mission){
    return axios.get(`${api}` + "calculer-taux", mission).then(
        (res) => {
          console.log(res.data);
          return res.data;
        },
        (err) => {
          console.error("error in getting calculerTaux");
        }
    );
  }

}




const Mission_Api_Url_S1 =  "missions";
const Mission_Api_Url_S2 =  "missions";
const Mission_Api_Url_S3 =  "missions";

//fetches all missions
const fetchMissions = (setMissions) => {
  axios.get(`${Mission_Api_Url_S1}`).then(
    (res) => {
      console.log(res.data);
      setMissions(res.data);
    },
    (err) => {
      console.error("error in getting Missions");
    }
  );
};

//fetches missions by demandeur
const fetchMissionsByDemandeur = (setMissionsByDemandeur, demandeur) => {
  axios.get(`${Mission_Api_Url_S2}` + "/" + `${demandeur}`).then(
    (res) => {
      console.log(res.data);
      setMissionsByDemandeur(res.data);
    },
    (err) => {
      console.error("error in getting Missions by demandeur");
    }
  );
};

//creates a mission
const createMission = (demandeur, contenu) => {
  axios
    .get(`${Mission_Api_Url_S2}` + "/" + `${demandeur}` + "/" + `${contenu}`)
    .then(
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.error("error in creating mission");
      }
    );
};

//Changes mission isValid to true
const validateMission = (id) => {
  axios.get(`${Mission_Api_Url_S3}` + "/" + `${id}`).then(
    (res) => {
      console.log(res.data);
    },
    (err) => {
      console.error("error in validating mission");
    }
  );
};

//changes ordre of mission
const changeOrdre = (id, ordre) => {
  axios.get(`${Mission_Api_Url_S3}` + "/" + `${id}` + "/" + `${ordre}`).then(
    (res) => {
      console.log(res.data);
    },
    (err) => {
      console.error("error in changing ordre of mission");
    }
  );
};

export {
  fetchMissions,
  fetchMissionsByDemandeur,
  createMission,
  validateMission,
  changeOrdre,
};