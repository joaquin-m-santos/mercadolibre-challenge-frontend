import axios from 'axios';

export default (descriptionUrl)=>{
  return axios.get(descriptionUrl)
    .then( (response)=>{
      let data = response.data;

      return data.plain_text;
    })
}