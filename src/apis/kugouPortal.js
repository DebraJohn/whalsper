import axios from 'axios';

export default function getRecommendData() {
  return axios.get('/kugou/yy/index.php?r=play/getdata&_=1497972864535&hash=');
}
