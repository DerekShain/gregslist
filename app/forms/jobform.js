export function getJobFormTemplate(){
    return /*html*/`
    <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.jobsController.addJob()" id="job-form">
    <div class="form-group">
        <label for="name" class="">name:</label>
        <input type="text" class="form-control" name="name" id="name" required>
    </div>
    <div class="form-group">
        <label for="company" class="">company:</label>
        <input type="text" class="form-control" name="company" id="company" required>
    </div>
    <div class="form-group">
        <label for="pay" class="">pay:</label>
        <input type="numper" class="form-control" name="pay" id="pay" required>
    </div>
    <div class="form-group">
        <label for="skill" class="">skill:</label>
        <input type="text" class="form-control" name="skill" id="skill" required>
    </div>
    <div class="form-group">
        <label for="description" class="">description:</label>
        <input type="text" class="form-control" name="description" id="description" required>
    </div>
    <div class="button-group my-3">
      <button type="reset" class="btn btn-secondary">Clear</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
    `
}