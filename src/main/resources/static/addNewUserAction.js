function adding(event) {
    const form = document.getElementById(`addUserForm`);
    event.preventDefault();
    const formData = new FormData(form);
    class Role {
        constructor(id, role) {
            this.id = id;
            this.role = role;
        }
    }
    let currentRoles = [];
    const roles4add = Array.from(formData.getAll('roles'))

    for(let i = 0; i<roles4add.length; i++) {
        const id = roles4add[i];
        const role = id == 1 ? `ROLE_USER` : `ROLE_ADMIN`
        currentRoles.push(new Role(id, role))
    }
    const user = {
        username: formData.get(`username`),
        email: formData.get(`email`),
        age: formData.get(`age`),
        password: formData.get(`password`),
        roles: currentRoles
    };
    fetch('http://localhost:8081/admin/',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
            console.log('User ' + data.valueOf().email + ' edit' )
            form.reset();
        })
        .catch(error => {
            console.log("Error edited " + error.message);
        }).finally( ()=>{redirectingToStart();});
}