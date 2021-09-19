import axios from "axios";

const fetchData = async (url, dataSetter, loadingSetter) => {
  let response = await axios.get(url);
  dataSetter(response.data);
  loadingSetter(false);
};

export default fetchData;
