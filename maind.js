"used strict";

var div = document.querySelector(".container");
var image=document.querySelector(".image");

fetch("https://reqres.in/api/users?")
  .then((data) => data.json())
  .then((users) => {
    // usuarios=users.data;
    // console.log(usuarios);
    listadoUsuarios1(users.data);
  
    console.log(users.data);
  });

function listadoUsuarios1(usuarios){
    for(var item of usuarios){
        let nombre=document.createElement("h4");
        let avatar= document.createElement("img");
        // nombre.append(usuarios[item].first_name);
        nombre.append(item.first_name);
        avatar.src=item.avatar;
        // avatar.width ="100px";
        // div.append(nombre);
        div.append(nombre);
        
        image.append(avatar);
       

        }
    }



