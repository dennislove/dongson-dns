const axios = require('axios');

const getData = async () => {
  const response = await axios.get('https://cloud.mongodb.com/v2/6597688c7dc99a684b47133d#/metrics/replicaSet/659769bd684d677c745078a7/explorer/dongsonevent/DNS/find');
  return response.data;
};

export default getData;