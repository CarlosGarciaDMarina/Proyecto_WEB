$(document).ready(function(){

  // Slider
  $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });

  // Posts
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
  ]; // End posts

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
  }); // End forEach

  // Selector de tema
  var theme = $('#theme');
  $("#to-green").click(function(){
      theme.attr("href", "css/green.css");
  });
  $("#to-red").click(function(){
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function(){
    theme.attr("href", "css/blue.css");
  });




















});