import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
    
//   },
//   headers: {
//     'X-RapidAPI-Key': '87e9c9554dmsh7ef1491b1b7c746p1b26aejsn1ff226e8c2cf', 
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const getPlacesData = async(sw, ne)=>{
    try{
        const {data:{data}} = await axios.get(URL,  {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              
            },
            headers: {
              'X-RapidAPI-Key': '87e9c9554dmsh7ef1491b1b7c746p1b26aejsn1ff226e8c2cf', 
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;

    }catch(error){
        // console.log(err)

    }
}