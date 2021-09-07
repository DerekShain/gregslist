import { ProxyState } from "../AppState.js"
import{ getHouseFormTemplate} from "../forms/houseform.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
    let template = ''
    ProxyState.houses.forEach(house => template += house.CardTemplate)
    document.getElementById('listings').innerHTML = template
  }
  
  export class HousesController {
    constructor() {
      // TODO register the listener for houses
      ProxyState.on('houses', _drawHouses)
      
    }
  
    async addHouse(){
        event.preventDefault()
        /**
         * @type {HTMLFormElement}
         */
        // @ts-ignore
        const form = event.target

        const houseData = {
            year: form.year.value,
            levels: form.levels.value,
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            price: form.price.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value,
        }

        try{
            await housesService.addHouse(houseData)
        } catch (e){
          // TODO draw errors
            form.make.classlist.add('border-danger')
            console.error('Need to do this [TODO]', e)
            return
        }
        form.reset()
    }
    showHouses() {
      _drawHouses()
      document.getElementById('controls').innerHTML = `
        <button class="btn btn-dark text-light" onclick="app.housesController.toggleHouseForm()">Add House</button>
      `
     document.getElementById('forms').innerHTML = getHouseFormTemplate()
     housesService.getHouses()
    }
  
    toggleHouseForm() {
        document.getElementById('house-form').classList.toggle('visually-hidden')
      console.log('[TODO fill me in]')
    }

    async deleteHouse(houseId){
      try{
        await housesService.deleteHouse(houseId)
      }catch (error){
      alert(error.message)
      }
    }
  }