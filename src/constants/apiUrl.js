export const newsByCountryUrl = (country, apiKey) => {
    return `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
}

export const newsByCountryAndCategory = (country, category, apiKey) => {
    return `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
}

export const newsByCategory = (category, apiKey) => {
    return `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`
}

export const allCountrys = 'https://restcountries.com/v3.1/all'