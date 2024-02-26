$(document).ready(function(){

  // Slider
  // Establecemos una condicion para que, si no estamos en la pagina del index, no nos cargue esta funcion
  if (window.location.href.indexOf('index') > -1) {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
    });
  }


  // Posts
  // Establecemos una condicion para que, si no estamos en la pagina del index, no nos cargue esta funcion
  if (window.location.href.indexOf('index') > -1) {
    var posts = [
      {
        title: 'Prueba de titulo 1',
        date: 'Publicado el ' + moment().format("dddd") + " " + moment().date() /* tb puede ponerse: moment().format("dddd Do") */ + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
        content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare turpis eget quam vulputate, ut interdum sapien tincidunt. Mauris non lorem ex. Pellentesque purus sapien, volutpat id sem vel, semper convallis velit. Vivamus fringilla suscipit dui, sollicitudin malesuada nunc fringilla mattis. Donec sollicitudin, nisl et hendrerit posuere, augue ligula eleifend sem, nec vestibulum velit neque sit amet leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque id arcu vel velit placerat pellentesque eleifend non lorem. Suspendisse fermentum elementum eros nec cursus.' 
      },
      {
        title: 'Prueba de titulo 2',
        date: 'Publicado el ' + moment().format("dddd") + " " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
        content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare turpis eget quam vulputate, ut interdum sapien tincidunt. Mauris non lorem ex. Pellentesque purus sapien, volutpat id sem vel, semper convallis velit. Vivamus fringilla suscipit dui, sollicitudin malesuada nunc fringilla mattis. Donec sollicitudin, nisl et hendrerit posuere, augue ligula eleifend sem, nec vestibulum velit neque sit amet leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque id arcu vel velit placerat pellentesque eleifend non lorem. Suspendisse fermentum elementum eros nec cursus.' 
      },    
      {
        title: 'Prueba de titulo 3',
        date: 'Publicado el ' + moment().format("dddd") + " " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
        content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare turpis eget quam vulputate, ut interdum sapien tincidunt. Mauris non lorem ex. Pellentesque purus sapien, volutpat id sem vel, semper convallis velit. Vivamus fringilla suscipit dui, sollicitudin malesuada nunc fringilla mattis. Donec sollicitudin, nisl et hendrerit posuere, augue ligula eleifend sem, nec vestibulum velit neque sit amet leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque id arcu vel velit placerat pellentesque eleifend non lorem. Suspendisse fermentum elementum eros nec cursus.' 
      },    
      {
        title: 'Prueba de titulo 4',
        date: 'Publicado el ' + moment().format("dddd") + " " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
        content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare turpis eget quam vulputate, ut interdum sapien tincidunt. Mauris non lorem ex. Pellentesque purus sapien, volutpat id sem vel, semper convallis velit. Vivamus fringilla suscipit dui, sollicitudin malesuada nunc fringilla mattis. Donec sollicitudin, nisl et hendrerit posuere, augue ligula eleifend sem, nec vestibulum velit neque sit amet leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque id arcu vel velit placerat pellentesque eleifend non lorem. Suspendisse fermentum elementum eros nec cursus.' 
      },    
      {
        title: 'Prueba de titulo 5',
        date: 'Publicado el ' + moment().format("dddd") + " " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
        content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare turpis eget quam vulputate, ut interdum sapien tincidunt. Mauris non lorem ex. Pellentesque purus sapien, volutpat id sem vel, semper convallis velit. Vivamus fringilla suscipit dui, sollicitudin malesuada nunc fringilla mattis. Donec sollicitudin, nisl et hendrerit posuere, augue ligula eleifend sem, nec vestibulum velit neque sit amet leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque id arcu vel velit placerat pellentesque eleifend non lorem. Suspendisse fermentum elementum eros nec cursus.' 
      },
      {
        title: 'Prueba de titulo 6',
        date: 'Publicado el ' + moment().format("dddd") + " " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
        content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare turpis eget quam vulputate, ut interdum sapien tincidunt. Mauris non lorem ex. Pellentesque purus sapien, volutpat id sem vel, semper convallis velit. Vivamus fringilla suscipit dui, sollicitudin malesuada nunc fringilla mattis. Donec sollicitudin, nisl et hendrerit posuere, augue ligula eleifend sem, nec vestibulum velit neque sit amet leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque id arcu vel velit placerat pellentesque eleifend non lorem. Suspendisse fermentum elementum eros nec cursus.' 
      }
    ];// End posts

    // Hacemos un forEach que recorra la estructura para añadir los posts
    posts.forEach((item, index) =>{
      // En cada iteracion que haga el forEach, voy a crear una variable que tenga una plantilla de un articulo formateada con los valores del json
      var post = `
          <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
              ${item.content}
            </p>
            <a href="#" class="button-more">Leer más...</a>
            </article>
      `;
      //Lo incrustamos con append
      $("#posts").append(post);
    });// End forEach
  } // End if 

  // Selector de tema
  // Almacenamos el selector del tema en la variable theme
  var theme = $('#theme');

  // Función para cambiar el tema y almacenarlo en el Local Storage
  function changeTheme(color) {
      theme.attr("href", "css/" + color + ".css"); // Cambiamos la hoja de estilo del tema
      localStorage.setItem("tema", color); // Almacenamos el color del tema seleccionado en el Local Storage
  }

  // Eventos de clic para cambiar el tema al verde
  $("#to-green").click(function(){
      changeTheme("green"); // Llamamos a la función changeTheme con el color verde
  });

  // Eventos de clic para cambiar el tema al rojo
  $("#to-red").click(function(){
      changeTheme("red"); // Llamamos a la función changeTheme con el color rojo
  });

  // Eventos de clic para cambiar el tema al azul
  $("#to-blue").click(function(){
      changeTheme("blue"); // Llamamos a la función changeTheme con el color azul
  });

  //Scroll hacia arriba de la web
  $('.subir').click(function(e){
    e.preventDefault(); // Este evento sirve para prevenir posible errores de red al hacer clic en el enlace
    $('html, body').animate({
      scrollTop: 0 // Desplaza suavemente el scroll de la página hacia arriba hasta la posición 0 (parte superior de la página)
    },1000); // La animación dura 1000 milisegundos (1 segundo)
    return false; // Devuelve false para evitar el comportamiento predeterminado del enlace
  });

  //Login falso con local storage
  $("#login form").submit(function() {
    var form_name = $("#form_name").val(); // Almacenamos el valor que tenga el form_name (el input)
    localStorage.setItem("form_name", form_name); // Lo metemos en el local storage
  });

  // Una vez que se recargue la pantalla creamos la siguiente variable
  var form_name = localStorage.getItem("form_name");

  // Creamos las condiciones para gestionar errores en la introduccion de los datos
  if ((form_name != null) && (form_name != "undefined")) {
    var about_parrafo = $("#about p"); // Creamos la variable donde vamos a introducir los datos
    about_parrafo.html("<br><b>Bienvenido, " + form_name + "</b>"); // Introducimos al HTML los datos para hacerlos visible al usuario
    about_parrafo.append("<a href='#' id='logout'> Cerrar sesión </a>") // Posibilitamos la opcion de cerrar sesion 

    $("#login").hide(); // Una vez iniciada la sesion ocultamos el formulario

    //Para hacer log out creamos un evento de click que, cuando cliques, volvera al estado inicial del formulario
    $("#logout").click(function() {
      localStorage.removeItem("form_name"); // Limpiamos el valor que haya en el fom_name
      location.reload(); // Forzamos la recarga de la poagina para poder cerrar la sesion del usuario
    });
  }

  // Acordeon
  if (window.location.href.indexOf('about') > -1) {
    // Esta funcion hace un acordeon en la web
    $("#acordeon").accordion();
  
  }

  // Reloj
  if (window.location.href.indexOf('reloj') > -1) {
    // Esta funcion nos permite ejecutar en bucle en cada tiempo que le indiquemos, las instrucciones que nosotros le indiquemos
    setInterval(function(){
      // Almacenamos el metodo en la variable reloj
      var reloj = moment().format('hh:mm:ss');
      // Incrustamos la variable en el div 
      $("#reloj").html(reloj);
    }, 1000);

  }

  //Validación del formulario
  if (window.location.href.indexOf('contact') > -1) {

    // Marcamos todos los campos del formulario cuyo name sea date
    //Para cambiarle el formato al datepicker le pasamos un Json
    $("form input[name='date").datepicker({
      dateFormat: 'dd-mm-yy'
    });

    $.validate({
      lang: 'es',
      errorMessagePosition:'top',
      scrollToTopOnError: true
    });
  }



/**<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script> */








});