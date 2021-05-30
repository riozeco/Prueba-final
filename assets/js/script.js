
$(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $(".card-title").click(function(){
      $(".card-text").toggle();
    })
});
