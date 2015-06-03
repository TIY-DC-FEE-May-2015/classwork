$(document).on("ready", function(){

  // Finds all tabs
  $(".tab").each(function(index, tab){

    // Jquery wrap the individual tab
    var $tab = $(tab)

    // Add the attribute "data-tab" with that tab's index
    $tab.attr("data-tab", index)

    // Add the attribute "data-tab" to the corresponding content div
    //$(".content:eq(" + index + ")").attr("data-tab", index)
    $( $(".content")[index] ).attr('data-tab', index)
  })

  // Binding the click event to each tab
  $(".tab").on("click", function(){
    
    // Remove "active" from all tabs
    $(".tab").removeClass("active")

    // Add "active" to this clicked-upon tab
    $(this).addClass("active")

    // Remove "active" from all content
    $(".content").removeClass("active")

    // Add "active" to the content that corresponds to the clicked tab
    $(".content[data-tab='" + $(this).attr("data-tab") + "']").addClass("active")

  })

  // Adding the active state the first tab/content when the page first loads
  $(".tab:eq(0), .content:eq(0)").addClass("active")

})

