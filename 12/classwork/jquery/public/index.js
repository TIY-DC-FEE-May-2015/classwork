$(document).on("ready", function(){

  $.ajax({
    url: "/idea",
    method: "GET",
    success: function(data) {

      $(".idea-text").text(data.app_idea)

    }
  })

  $(".add-button").on("click", function(){

    $.ajax({
      url: "/idea/new",
      method: "POST",
      data: {
        idea: $(".add-text").val()
      },
      success: function(data) {
        console.log("succesfully submitted", data)
      }
    })

  })
  
})