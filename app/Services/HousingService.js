import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { sandboxApi } from "./AxiosService.js"


class HousingService{
   async addHouse(formData){
        const res = await sandboxApi.post('houses', formData)
        const newHouse = new House(res.data)
        ProxyState.houses = [newHouse, ...ProxyState.houses] 
    }
    async editHouse(formData){
        const res = await sandboxApi.put('houses/' + formData.id, formData)
        const house = new House(res.data)
        const index = ProxyState.houses.findIndex(h => h.id == house.id)
        ProxyState.houses.splice(index, 1, house)
        ProxyState.houses = ProxyState.houses
    }
   async getAllHousing(params = {}){
        const res = await sandboxApi.get("https://bcw-sandbox.herokuapp.com/api/houses")
        const houses = res.data.map(h => new House(h))
        //failing here? it could not map my broken get address ^ /no default class values
        ProxyState.houses = houses
        console.log(res);
    }
    async removeHouse(id){
        // console.log(id);
        const res = await sandboxApi.delete('houses/' + id)
        ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
        console.log(ProxyState.houses);
    }   
}

export const housingService = new HousingService()