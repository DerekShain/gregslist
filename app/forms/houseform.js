export function getHouseFormTemplate(){
  return /*html*/`
    <form class = "bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()" id="house-form">
    <div class="form-group">
      <label for="year" class="">Year Built:</label>
      <input type="text" class="form-control" name="year" id="year" required>
    </div>
    <div class="form-group">
      <label for="size" class="">Size:</label>
      <input type="text" class="form-control" name="size" id="size" required>
    </div>
    <div class="form-group">
      <label for="rooms" class="">Rooms:</label>
      <input type="text" class="form-control" name="rooms" id="rooms" required>
    </div>
    <div class="form-group">
      <label for="garage" class="">garage:</label>
      <input type="text" class="form-control" name="garage" id="garage" >
    </div>
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input type="text" class="form-control" name="price" id="price" required>
    </div>
    <div class="form-group">
      <label for="description" class="">Description:</label>
      <input type="text" class="form-control" name="description" id="description" rows="5">
    </div>
    <div class="form-group">
      <label for="img" class="">Image:</label>
      <input type="url" class="form-control" name="img" id="img">
    </div>
    <div class = "button-group my-3">
      <button type="reset" class="btn btn-secondary">Clear</button>
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
    `
}