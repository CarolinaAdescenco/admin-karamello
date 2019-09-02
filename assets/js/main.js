$(document).ready(function(){
  $('.tabs').tabs();
  $('.sidenav').sidenav();
  $('.datepicker').datepicker();
  $('.modal').modal();
  $('select').formSelect();

  $('.chips-placeholder-ingredientes').chips({
    placeholder: 'Ingredientes',
    secondaryPlaceholder: '+Item',
  });
  
  $('.chips-placeholder-medidas').chips({
    placeholder: 'Medidas',
    secondaryPlaceholder: '+Item',
  });


});