export function getCarFormTemplate() {
    return /*html*/`
    <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.carsController.addCar()"
    id="car-form">
    <div class="form-group">
      <label for="make" class="">Make:</label>
      <select name="make" id="make" required class="form-control">
        <option disabled selected value="">Please Choose your car make</option> 
        <option>Honda</option>
        <option>Hyundai</option>
        <option>Tesla</option>
        <option>Toyota</option>
        <option>Other</option>
      </select>
    </div>
    <div class="form-group">
      <label for="model" class="">Model:</label>
      <input type="text" class="form-control" name="model" id="model" required>
    </div>
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input type="number" class="form-control" name="price" id="price" min="0" max="9999999">
    </div>
    <div class="form-group">
      <label for="mileage" class="">
        <span>Mileage:</span>
        <span id="miles" class="ms-2">0</span>
      </label>
      <input type="range" name="mileage" id="mileage" min="1" max="1000000"
        onchange="app.carsController.showMiles()" class="form-control">
    </div>
    <div class="form-group">
      <label for="color" class="">Color:</label>
      <input type="color" class="form-control" name="color" id="color">
    </div>
    <div class="form-group">
      <label for="year" class="">Year:</label>
      <input type="year" class="form-control" name="year" id="year">
    </div>
    <div class="form-group">
      <label for="description" class="">Description:</label>
      <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
    </div>
    <div class="form-group">
      <label for="img" class="">Image:</label>
      <input type="url" class="form-control" name="img" id="img" required>
    </div>
    <div class="form-group">
    <label for="number" class="">Contact Number:</label>
    <input type="text" class="form-control" name="number" id="number">
    </div>
    <div class="button-group my-3">
      <button type="reset" class="btn btn-secondary">Clear</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
    `
  }