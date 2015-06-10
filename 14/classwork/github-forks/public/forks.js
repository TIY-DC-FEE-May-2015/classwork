var access_token = "3b5788bb08a2c102865914850bdefae221d8da08"

$(document).on("ready", function(){

  var templateString = $("#repoTemplate").html()
  var templateFunction = Handlebars.compile( templateString )

  var successFunction = function(repoArray) {
    _.each(repoArray, function(repo){

      $.ajax({
        url: repo.url,
        method: "GET",
        data: {
          access_token: access_token
        },
        success: function(sourceUrlData) {
          var htmlString = templateFunction({
            name: repo.name,
            stars: repo.stargazers_count,
            forks: sourceUrlData.network_count
          })
          
          $("#repoLocation").append(htmlString)
        }
      })

    })
    
  }

  $.ajax({
    url: "https://api.github.com/users/kylehill/repos",
    method: "GET",
    data: {
      access_token: access_token
    },
    success: successFunction
  })


})