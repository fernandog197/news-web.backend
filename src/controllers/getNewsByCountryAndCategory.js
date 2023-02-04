import axios from "axios";
import * as dotenv from 'dotenv'

import { newsByCountryAndCategory } from '../constants/apiUrl.js'

dotenv.config()

const getNewsByCountryAndCategory = async (req, res) => {
    let { country, category } = req.params

    try {
        let { data } = await axios.get(newsByCountryAndCategory(country, category, process.env.apiKey), {
            headers: { "Accept-Encoding": "gzip,deflate,compress"  }
        })
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
    }
}

export default getNewsByCountryAndCategory