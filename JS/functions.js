

//Obtengo el JSON con mis datos.
$.getJSON(URLJSON,function (data, estado) {
  console.log(estado);

    //Llamada de functions!
          animHero();
          mostrarProductos(data);
          eventoClick(data);
          modalCatalogo(data);
        filterObjects(data);
        eventoSumit();
});



//Mis Functions!
function animHero() {
  // Animaciones Hero //

$(".titleHero").fadeOut().fadeIn(2000);
$(".btnHero").fadeOut().fadeIn(3500);

}


  function mostrarProductos(listados) {
    
    $("#catalogo").empty();
    // CARGA DE DATOS CATALOGO//
    for (const producto of listados) {
      $('#catalogo').append(` <div class="col-6 col-md-4 mb-4">
                              <div class="card columna">     
                                  <div class="card-body">
                                  <h5 class="card-title">${producto.name}</h5>
                                  
                                  <img src="${producto.image}" class="card-img-top btnView" alt="...">
                                  <p><p id="${producto.id}" type="button" class="btnView mybuttonDos" data-toggle="modal" data-target="#exampleModal"> $${producto.valor}</p>
                                  <button id="${producto.id}" class="btn btnCatalogo myButton btnProducto"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg></button></p>
                                  </div>
                              </div>`)
  }

  }
    
     //------------Codigo del modal
     let seleccionModal = [];
    function modalCatalogo(data) {
     
      
      $('.btnView').click(function () {
        
        let myID = this.id;
        let encontrado = data.find(function(elemento) { return elemento.id == myID});
        seleccionModal.push(encontrado);
        console.log(encontrado);
        
        for (const producto of seleccionModal) {
          $('#notificacion').empty();
                                         $('#notificacion').append(` 
                                   
                                         <div class="modal  modalContainer" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                           <div class="modal-dialog">
                                             <div class="modal-content">
                                              
                                               <div class="modal-body">
                                                      <img src="${producto.image}" class="card-img-top" alt="...">
                                                      <p type="button" class="btnView mybuttonDos" data-toggle="modal" data-target="#exampleModal"> $${producto.valor}</p>
                                               </div>
                                              
                                             </div>
                                           </div>
                                         </div>`)
        }
        
                            
       })
   }
   
   //Asocio un evento de click para agregar al carro o sumar cantidad
   function eventoClick(data) {

   $(".btnProducto").click(function (e) { 
 
    let myID = this.id;
    let enContrado = productosSeleccionas.find(producto => producto.id == myID);
     if (enContrado != undefined) {
      
       enContrado.cantidad++;
     } else{

      let myID = this.id;
      let encontrado = data.find(function(elemento) { return elemento.id == myID});

      productosSeleccionas.push(encontrado);
      console.log(encontrado);
     }
     
     $('.card-body').fadeOut().fadeIn(200);
     generarElCarro();
   }); }

  
   function generarElCarro() {


    $("#producto").empty();
    let total = 0;
    for (const comprado of productosSeleccionas) {
      total = total + comprado.valor;

      $("#producto").append(`
                            
                            <div class="carrito">
                            <div class='col-md-12'>
                            <h5><img class="mr-auto img-fluid imgCarrito" src="${comprado.image}" alt="" srcset="">
                            ${comprado.name} x${comprado.cantidad} $${comprado.valor}
                            <button id="${comprado.id}" class="btnDelete" >X</button></h5>
                            </div>                       

                             </div>                         
                             `);
                             
    }

    $('#producto').append(`<p>Total: ${total}</p>`)
   $('#producto').append(`<button id='btnFinalizarCompra' >Finalizar compra</button>`);
    $(".btnDelete").click(function (e) { 
      e.preventDefault();
      eliminarFilter(e.target.id);
      //eliminarDelete(e.target.id);
      
      generarElCarro();
  });
  $('html, body').animate({
    scrollTop: $(".btnHero").offset().top  
}, 200, ()=>{
    $('#carrito').fadeIn(400, ()=>{
        $('#carrito').fadeOut(4000);
    });
});
   
   }

//ELIMINAR ELEMENTO CON FILTER del Catalogo
function eliminarFilter(id){
 productosSeleccionas = productosSeleccionas.filter(producto => producto.id != id);
}

//Sistema de filtro Catalogo
   function filterObjects(data) {
     //Filtros!
     $('#queryList').click(function (e) { 
       let min = $('#minQuery').val();
       let max = $('#maxQuery').val();
       const encontradosFilter = data.filter(function(elemento) { return (elemento.valor >= min) && (elemento.valor <= max) });
       console.log(encontradosFilter);
        mostrarProductos(encontradosFilter);
        eventoClick(encontradosFilter);
        modalCatalogo(encontradosFilter);
       
     });
   
   }
   


function eventoSumit() {
  $("#contactoSection").submit(function() {     
    let nameIngresado = $("#nombres").val();
    let nameSave = JSON.stringify(nameIngresado);
    localStorage.setItem('nameGuardado', nameSave);                
    let x = $("#valor").val();
      if (x!="enviar") {
        alert('Gracias '+ $("#nombres").val()+  '\n Tus datos se enviaron con exito!');		
        return false;
      } else 
          return true;			
    });
    
}


//animacion de scroll al catalogo
$(function () {

$('.btnHero, .navLinkCatalogo ').click(function (e) { 

  animGoCatalogo();
});
  function animGoCatalogo(params) {
    $('html, body').animate({
      scrollTop: $(".btnHero").offset().top  
  }, 1200);
  }
  
});






                                