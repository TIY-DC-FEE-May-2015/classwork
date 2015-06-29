var fields = []
$(document).on("ready", function(){

  fields.push(new FieldView({
    $container: $("#form-container"),
    name: "Title"
  }))

  fields.push(new FieldView({
    $container: $("#form-container"),
    name: "Release Year"
  }))

  fields.push(new FieldView({
    $container: $("#form-container"),
    name: "Star"
  }))

  fields.push(new FieldView({
    $container: $("#form-container"),
    name: "Box Office"
  }))

  $("#the-button").on("click", function(){
    var values = _.map(fields, function(fieldView){
      return fieldView.getValue()
    })

    console.log(values)
  })

})