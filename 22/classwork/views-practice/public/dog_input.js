$.ajax({
  method: "POST",
  url: "/dog",
  data: {
    name: "Fido",
    breed: "Golden",
    isAGoodDog: true
  },
  success: function(data) {
    console.log(data)
  }
})
