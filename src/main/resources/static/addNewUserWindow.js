function fillingAddForm() {
document.getElementById("adminPanel").innerHTML=
    `
    <ui class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" onclick="redirectingToStart()" style="color:blue">Users</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" style="color:black">New user</a>
      </li>
    </ui>

    <div class="container shadow-lg p3 bg-body rounded">
      <h5 class="table table-striped table-borderless w-90" style="font-weight: normal">
        Add new user
      </h5>
    </div>
    <div class="container shadow-lg p3 bg-body rounded">
      <div class="row align-items-center">
        <div class="col-4 p-2"></div>
        <div class="col-4 p-2">
          <form id="addUserForm" class="needs-validation">
            <div class="form-group">
              <p class="text-center my-0"><strong> Username </strong></p>
              <input class="form-control mt-0" placeholder="Name" type="text" id="username" name="username"
                     required/>
            </div>
            
            <div class="form-group">
              <p class="text-center my-0"><strong> Email </strong></p>
              <input class="form-control mt-0" placeholder="text" type="email" id="email"
                     name="email" required/>
            </div>
            
            <div class="form-group">
              <p class="text-center my-0"><strong> Age </strong></p>
              <input class="form-control mt-0" placeholder="text" type="number" id="age"
                     name="age" required/>
            </div>
            
            <div class="form-group">
              <p class="text-center my-0"><strong> Password </strong></p>
              <div>
                <input class="form-control w-100 mt-0" type="password" id="pass" name="password"/>
              </div>
            </div>
            <div class="form-group">
              <p class="text-center my-0"><strong> Role </strong></p>
              <select multiple class="form-control p-0 m-0" id="roles" name="roles">
                <option value="2">ADMIN</option>
                <option value="1">USER</option>
              </select>
            </div>
                <div class="d-flex justify-content-center">
                  <button onclick="adding(event)"  type="submit" class="btn btn-success" 
                    id="saveBtn" disabled>Add new user</button>
                </div>
          </form>
        </div>
        <div class="col-4 p-2"></div>
      </div>
    </div>
    `;

    const saveBtn = document.getElementById("saveBtn");
    const requiredFields = document.querySelectorAll('[required]');

    requiredFields.forEach(field => {
        field.addEventListener('input', () => {
            const allFieldsFilled = Array.from(requiredFields).every(field => field.value !== '');
            saveBtn.disabled = !allFieldsFilled;
        });
    });
}