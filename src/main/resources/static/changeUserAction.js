function changeUserAction() {
    let id = document.getElementById('id').value;
    let tr = document.getElementById('tr№'+id);
    // получаем массив int из формы select по id="roles" и name="roles4change"
    let roles = $('#roles').val();
    class Role {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }
    let currentRoles = [];
    for(let i = 0; i < roles.length; i++) {
        const id = roles[i];
        const role = id == 1 ? `ROLE_USER` : `ROLE_ADMIN`
        currentRoles.push(new Role(id, role))
    }
    const user = {
        id: document.getElementById('id').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,
        age: document.getElementById('age').value,
        roles: currentRoles
    };
    fetch('http://localhost:8081/admin/' + id,{
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
            console.log('User №' + id + 'edited')
            let rolesAsString = '';
            for (let a = 0; a < data.roles.length; a++) {
                rolesAsString += data.roles[a].name.substring(0, 5);
                rolesAsString += a<(data.roles.length-1) ? ", " : "";
            }
            tr.innerHTML = `
                <td id="id:${data.id}">${data.id}</td>
                <td id="username:${data.id}">${data.username}</td>
                <td id="email:${data.id}">${data.email}</td>
                <td id="age:${data.id}">${data.age}</td>
                <td id="roles:${data.id}">${rolesAsString}</td>
                <td>
                    <div class="all-classes-container">
                    <button id="changeButton" type="button" class="btn btn-primary btn-sm" data-toggle="modal"
                            data-target="#changeModal" data-userID="${data.id}">
                        Edit
                    </button>
                </div>
                </td>
                <td>
                    <button id="deleteButton" type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                            data-target="#deleteModal" data-userID="${data.id}">
                        Delete
                    </button>
                </td>`
        })
        .catch(error => {
            console.log("Error edited data user №" + id + " " + error.message);
        }).finally( ()=>{redirectingToStart();});
}