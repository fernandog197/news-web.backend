import axios from "axios";
import * as dotenv from 'dotenv'

import { newsByCountryUrl } from '../constants/apiUrl.js'

dotenv.config()

const getNewsByCountry = async (req, res) => {
    let { country } = req.params

    try {
        let { data } = await axios.get(newsByCountryUrl(country, process.env.apiKey), {
            headers: { "Accept-Encoding": "gzip,deflate,compress"  }
        })
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
    }
}

export default getNewsByCountry