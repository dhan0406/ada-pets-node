// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
    .then((response) => {
      console.log('success');
      return setResult(response.data);
    })
    .catch(() => {
      return setError("wrong input"); 
    })
};

const showDetails = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to show details for a pet without selecting it!");
    return; }

  axios.get(BASE_URL + selectedPet)
    .then((response) => {
      console.log('success');
      return setResult(response.data);
    })
    .catch(() => {
      return setError('failed, couldn\'t show details, select something else')
    }
    )}
  

const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }

  axios.delete(BASE_URL + selectedPet)
    .then(() => {
      return setResult('successfully deleted')
    })

    .catch(() => {
      return setError('remove failed')
    })
}

const addPet = (petInfo) => {
  // let petInfo = {
  //   name: "Artemis",
  //         breed: "goddess",
  //         about: "Goddess of the hunt."
  // }
  axios.post(BASE_URL, petInfo)
    .then((response) => {
      return setResult(response.data)
    })
    .catch(() => {
      return setError('failed to add')
    })
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}
