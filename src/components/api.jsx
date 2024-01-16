import axios from "axios"

export const getHeroes = async () => {
    const heroes = await axios.get("https://api.dazelpro.com/mobile-legends/hero")
    return heroes.data.hero
}

export const searchHeroes = async (q) => {
    const search = await axios.get(`https://api.dazelpro.com/mobile-legends/hero?heroName=${q}`)
    return search.data.hero
}