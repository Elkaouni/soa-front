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

export default new MissionService();

// static fake checks
//fetches all missions

function createData(id, demandeur, destination, description, dateDepart, dateRetour, statut) {
  return { id, demandeur, destination, description, dateDepart, dateRetour, statut };
}

const missions = [

  createData(1, "pr karim", "France","conférence IT", "24/12/2022","24/02/2023", "Validé par chef d'imm"),

  createData(2, "pr alex", "France","conférence BIGDATA", "24/01/2022","24/02/2022", "Validé"),

  createData(3, "pr lamya", "Australie","Exchange", "24/02/2023","2/04/2023", "Pending"),

  createData(4, "pr amine", "Japon","research", "12/12/2022","12/1/2023", "Annulé"),

  createData(5, "pr dream", "Espagne","research", "24/10/2022","01/12/2022",  "Pending"),

];

const fetchMissions = (setMissions) => {

      setMissions(missions);

};

export  {fetchMissions};