

function onLoadUsers() {
    let div_main = document.getElementById("div_main")
    div_main.innerHTML=""
    div_main.innerHTML += `
    <h1 class="font-italic text-dark">Investor Relations</h1>
    <div class="table-responsive table-bordered" id="div_table">
    <table id="table">
    <thead>
    
        <td>FULL NAME</td>
        <td>EMAIL</td>
        <td>PHONE</td>

    
    </thead>
        <tbody id="tbody">
        </tbody>
        </table>
    </div>
    `
    const API_USERS = 'https://my-json-server.typicode.com/Jeck99/fake-server/users';

    async function getUsers() {
        try {
            
            return await fetch(`${API_USERS}`)
                .then((res) => { return res.json() })

        } catch (error) {
            alert(error)
        }
    }
   
    let tbody = document.getElementById('tbody')
    async function printUser() {
       
        await getUsers().then(resultuser => {
            resultuser.forEach(elementuser => {
                tbody.innerHTML += ` 
                
                <tr><td>  ${elementuser.name.first} ${elementuser.name.last} </td>
            <td> ${elementuser.email}  </td>
            <td> ${elementuser.phone}  </td>

            </tr>`


            });
        })
    }
    printUser()





}



