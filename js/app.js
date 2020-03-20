document.getElementById('txtBtn').addEventListener('click',cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);

function cargarTXT(){
    fetch('datos.txt')
        .then(function(res){
        //Se indica cómo? queremos los datos JSON, TEXT etc
            return res.text();
        })
        //Aqui ya se encuentran los datos
        .then(function(data){
            document.getElementById('resultado').innerHTML=data;
        })
        .catch(function(error){
            console.log(error);
        }); 
}

//Cargar JSON 
function cargarJSON(){
    fetch('empleados.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html ='';
            data.forEach(function(empleado){
                html +=`
                    <li>${empleado.nombre}</li>
                    <li>${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML=html;
        })
        .catch(function(error){
            console.log(error);
        });
}


function cargarREST(){
    fetch('https://picsum.photos/list')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html='';
            data.forEach(function(data,index){
                html +=`
                    <li>
                        ${index}
                        <a href="${data.post_url}">Ver imagen</a>
                        ${data.author}
                    </li>
                `;
            });
            document.getElementById('resultado').innerHTML=html;
        })
        .catch(function(error){
            console.log(error);
        });
}