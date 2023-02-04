import axios from "axios";
import * as dotenv from 'dotenv'

import { newsByCategory } from '../constants/apiUrl.js'

dotenv.config()

const getNewsByCategory = async (req, res) => {
    let { category } = req.params

    try {
        let { data } = await axios.get(newsByCategory(category, process.env.apiKey), {
            headers: { "Accept-Encoding": "gzip,deflate,compress"  }
        })
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
    }
}

export default getNewsByCategory