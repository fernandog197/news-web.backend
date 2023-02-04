import axios from "axios";

import { allCountrys } from "../constants/apiUrl.js";



const allowedCountries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']

const getAllCountries = async (req, res) => {

    try {
        let { data } = await axios.get(allCountrys, {
            headers: { "Accept-Encoding": "gzip,deflate,compress"  }
        })
        
        let filterData = data.map(c => { 
            return {
                name: c.name.common,
                code: c.cca2.toLowerCase(),
                flag: c.flag
            }

         })
         
        let filterAllowedCountries = filterData.filter(d => allowedCountries.includes(d.code))
        let orderAllowedCountries = filterAllowedCountries.sort((a,b) => a.name.localeCompare(b.name))
        
        res.status(200).json(orderAllowedCountries)
    } catch (err) {
        console.log(err)
    }
}

export default getAllCountries