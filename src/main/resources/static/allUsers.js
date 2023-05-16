let url = 'http://localhost:8081/admin/'

fetch(url)
    .then(response => response.json())
    .then(data => fillingAll(data))
    .catch(error => console.log(error))

function fillingAll(data) {
    let body = `<ui class="nav nav-tabs">
    
        <li class="nav-item">
            <a class="nav-link active" href="/admin" th:method="get" style="color:black">User table</a>
        </li>
        <li class="nav-item">
            <a onclick="fillingAddForm()" class="nav-link" style="color:blue">New user</a>
        </li>
        </ui>
        <div class="container shadow-lg p3 bg-body rounded">
        <div class="tab-content">               
            <h5 style="font-weight: bold">
                All users
            </h5>
        </div>
        <div class="container shadow-lg p3 mb-5 bg-body rounded">
            <table class="table bg-white table-striped table-borderless border-top w-90">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>`


    for (let i = 0; i < data.length; i++) {
        let roles = data[i].roles;
        let rolesAsString = '';
        for (let a = 0; a < roles.length; a++) {
            rolesAsString += roles[a].name.substring(0, 5);
            rolesAsString += a<(roles.length-1) ? ", " : "";
        }
        body += `<tr id="tr№${data[i].id}">
                    <td id="id:${data[i].id}">${data[i].id}</td>
                    <td id="username:${data[i].id}">${data[i].username}</td>
                    <td id="email:${data[i].id}">${data[i].email}</td>
                    <td id="age:${data[i].id}">${data[i].age}</td>
                    <td id="roles:${data[i].id}">${rolesAsString}</td>
                    <td>
                        <div class="all-classes-container">
                        <button id="changeButton" type="button" class="btn btn-info btn-sm" data-toggle="modal" 
                                data-target="#changeModal" onclick="drawChangeModal(${data[i].id})">
                            Edit
                        </button>
                    </div>
                    </td>
                    <td>
                        <button id="deleteButton" type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                                data-target="#deleteModal" onclick="drawDeleteModal(${data[i].id})">
                            Delete
                        </button>
                    </td>
                 </tr>`

    }
    body += `</tbody></table></div>`
    document.getElementById('adminPanel').innerHTML = body;

}


