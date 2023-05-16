fetch('http://localhost:8081/user/')
    .then(response => response.json())
    .then(data => {
        bodyRoles = []
        data.roles.forEach(role => {
           bodyRoles.push(role.name.substring(0, 5))
        });
        document.getElementById("navbar").innerHTML =
           `<span style="font-weight: bolder">${data.username}</span>
            <span> with roles: </span>
            <span>${bodyRoles}</span>`;
    })
    .catch(error => console.log(error));
