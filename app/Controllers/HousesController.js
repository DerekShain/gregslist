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
  
    addHouse(){
        event.preventDefault()
        const form = event.target
        const houseData = {
            year: form.year.value,
            size: form.size.value,
            rooms: form.rooms.value,
            garage: form.garage.value,
            price: form.price.value,
            description: form.description.value,
            img: form.img.value,
            number: form.number.value

        }

        try{
            housesService.addHouse(houseData)
        } catch (e){
            form.make.classlist.add('border-danger')
            console.error('Need to do this', e)
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
    }
  
    toggleHouseForm() {
        document.getElementById('house-form').classList.toggle('visually-hidden')
      console.log('[TODO fill me in]')
    }
  
  }