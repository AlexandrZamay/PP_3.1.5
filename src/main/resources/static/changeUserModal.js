function drawChangeModal(id) {

    console.log('Tub edit user №' + id + ' push!');
    let url = 'http://localhost:8081/admin/' + id;
    let body = ''
         fetch(url)
        .then(response => response.json())
        .then(data => changingData(data))
        .catch(error => console.log(error))
    const changingData = (data) => {
             console.log(data)

        let rolesID =[]
        data.roles.forEach((id)=>{
             rolesID.push(id.id);
         })

        body += `
        <form id="addUserForm" class="needs-validation">
             <input id='id' type="hidden" value="${data.id}">
           <div class="form-group">
             <p class="text-center my-0"><strong> Username </strong></p>
             <input class="form-control mt-0" type="text" id="username" value="${data.username}"/>
           </div>
           
           <div class="form-group">
             <p class="text-center my-0"><strong> Email </strong></p>
             <input class="form-control mt-0" type="email" id="email" value="${data.email}"/>
           </div>
           
           <div class="form-group">
             <p class="text-center my-0"><strong> Password </strong></p>
             <div>
               <input class="form-control w-100 mt-0" type="password" id="pass" value="${data.password}" name="pass"/>
             </div>
           </div>
           
           <div class="form-group">
             <p class="text-center my-0"><strong> Age </strong></p>
             <input class="form-control mt-0" type="number" id="age" value="${data.age}"/>
           </div>
           
           <div class="form-group">
             <p class="text-center my-0"><strong> Role </strong></p>
             <select multiple class="form-control p-0 m-0" id="roles" name="roles4change">
               <option value="1" ${rolesID.includes(1) ? 'selected' : ''}>USER</option>
               <option value="2" ${rolesID.includes(2) ? 'selected' : ''}>ADMIN</option>
             </select>
           </div>
        </form>`
        document.getElementById('changing').innerHTML = body;
    }
}
