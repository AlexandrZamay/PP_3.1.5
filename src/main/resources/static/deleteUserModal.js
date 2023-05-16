function drawDeleteModal(id) {
    console.log('Tub user №' + id + ' push!');
    let url = 'http://localhost:8081/admin/' + id;
    let body = '';
    fetch(url)
        .then(response => response.json())
        .then(data => deletingData(data))
        .catch(error => console.log(error))
    const deletingData = (data) => {
        let rolesID =[]
        data.roles.forEach((id)=>{
            rolesID.push(id.id);
        })
        body += `
        <form id="deleteUserForm" class="needs-validation">
             <input id='id' type="hidden" value="${data.id}">
             
           <div class="form-group">
             <p class="text-center my-0"><strong> Username </strong></p>
             <input class="form-control mt-0" type="text" id="firstname" value="${data.username}" disabled/>
           </div>

           <div class="form-group">
             <p class="text-center my-0"><strong> Email </strong></p>
             <input class="form-control mt-0" type="email" id="email" value="${data.email}" disabled/>
           </div>
           
           <div class="form-group">
             <p class="text-center my-0"><strong> Password </strong></p>
             <div>
               <input class="form-control w-100 mt-0" type="password" id="pass" value="${data.password}" name="pass" disabled/>
             </div>
           </div>
           
           <div class="form-group">
             <p class="text-center my-0"><strong> Age </strong></p>
             <input class="form-control mt-0" type="text" id="age" value="${data.age}" disabled/>
           </div>
           <div class="form-group">
             <p class="text-center my-0"><strong> Role </strong></p>
             <select multiple class="form-control p-0 m-0" id="roles" name="roles4change" disabled>
               <option value="1" ${rolesID.includes(1) ? 'selected' : ''}>USER</option>
               <option value="2" ${rolesID.includes(2) ? 'selected' : ''}>ADMIN</option>
             </select>
           </div>
        </form>`
        document.getElementById('deleting').innerHTML = body;
    }
}