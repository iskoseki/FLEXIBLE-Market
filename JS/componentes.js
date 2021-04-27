      //api call
$(document).ready(function () {
    console.log('DOM READY');
    $.get(APIPROVINCIAS, function (datos) {
          console.log(datos);
          $('#seleccionProvincias').empty();
          for (const provincia of datos.provincias) {
            $('#seleccionProvincias').append(`<option>${provincia.nombre}</option>`)
          }
    })
  });
     
     
     //NAV BAR//
   
        $('#navBarra').append(`
        <div class="container">
      
  
        
      
      
       
      <div class="nav-item  divCarroNav">
      <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <svg class="imgCarro" xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z"/>
            </svg>
      </button>
      <div id="carrito" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <h5 class='titleCarrito'>CARRITO</h5>
      
      <div id="producto"></div>
      
      <div class='btnCarrito container'></div>
      </div>
      
    </div>

    <div class="">
    <a class="navbar-brand " href="#"> <img class="imgLogo mx-auto" src="/favicon.ico" alt="" srcset=""></a>
    </div>


    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
       
    
  
      <div class="container">
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
        
      <div class="navbar-nav ml-auto">
        <a class="nav-link active" href="#">HOME<span class="sr-only">(current)</span></a>
        <a class="nav-link navLinkCatalogo" href="#titleCatalogo">TIENDA</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">NOSOTRXS</a>
        <a class="nav-link" href="#contactoSection">CONTACTO</a>
        
      </div>
      
     
      </div>

        </div></div>`)




        $("#dropdownMenuButton").click(function (e) { 
          $("#carrito").toggle();      
        });



        $('.navbar-brand').click(function (e) { 
          e.preventDefault();
          animHero();
        });

            //Title catalogo y Carrito moomentariamente
            $('#contentC').prepend(`<h1 id="titleCatalogo" >Nuestro Catalogo</h1> `)
            
                
            
//utilizo ajax para obtener informacion de un .JSON y la imprimo.


//------------------------------CONTACTO SECTION-----------------------------------------------                       
        $("#contactoSection").append(`
      
        <div class="containerForm">
                                        <h5 class="titleContact">CONTACTO</h5>
                                        <form id="basic-form" action="" method="post">
                                        <p id='clase'>
                                        <label  for="name">Nombre:</label>
                                        <input  id="nombres" name="nombre" minlength="3" type="text" required>
                                        </p>
                                        <p id='clase' >
                                        <label for="email">E-Mail: </label>
                                        <input id="email" type="email" name="email" required>
                                        </p>
                                        <p id='clase' >
                                        <div class="form-group justify-content-center align-self-center ">
                                        <label for="seleccionProvincias">Selecciona tu Provincia</label>
                                        <select class="form-control selecText" id="seleccionProvincias">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        </div>
                                        <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Dejanos tu mensaje:</label>
                                        <textarea class="form-control selecText" id="exampleFormControlTextarea1" rows="2"></textarea>
                                        </div>
                                        <input id="btnForm" class="submit" type="submit" value="ENVIAR">
                                        </p>
                                        </form>
                                        </div>
        
      
        
                                        `)

                                        





  // CARGA DEL FOOTER 
  $('#pieDePagina').append(` <h5>The wep page was made with love &#128156; </h5>
                                <hr>
                                
                                <a class='linksFooter' href="https://www.linkedin.com/in/leandro-bordon-6b47bb186/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                                <a class='linksFooter' href='https://github.com/Alocerio'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                               <hr>
                                <p>© 2021</p>`);
