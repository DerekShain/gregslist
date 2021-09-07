import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

// @ts-ignore
const api = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/houses"
})
class HousesService{

  async deleteHouse(houseId){
    await api.delete(houseId)
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== houseId)
  }
  async addHouse(houseData){
    let res = await api.post('', houseData)
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
   }
   async getHouses(){
     let res = await api.get()
     ProxyState.houses = res.data.map(h => new House(h))
   }
  
}

export const housesService = new HousesService()