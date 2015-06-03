$(document).on("ready", function(){

  $(".dropover").on("mouseover", function(){

    //$(".dropover-content").css("display", "block")
    /*
    $(".dropover-content").css({
      display: "block"
    })
    */

    $(".dropover-content").show()

  })

  $("header li:not(.dropover)").on("mouseover", function(){

    $(".dropover-content").hide()

  })

})