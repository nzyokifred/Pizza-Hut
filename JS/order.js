//create a variable for the price,crust and topping//
var price , crust_price , topping_price;
let total = 0;
function pizzaName(name, size, crust, topping, totals){
  this.name = flavour
  this.size = size
  this.crust = crust
  this.topping = topping
  this.totals = totals;
}

//jQuery for the button functions//
$(document).ready(function(){
  $("button.proceed").click(function(event){
    var pname = $(".name option:selected").val();
    var psize = $("#size option:selected").val();
    var pcrust = $("#crust option:selected").val();
    var ptopping = [];
    $.each($("input[name='toppings']:checked"), function(){
      ptopping.push($(this).val());
    });
    console.log(ptopping.join(" "));
    
    switch (psize) {
      case "0":
         price = 0;
        break;
        case "large":
          price = 1300;
          console.log(price);
         break;
         case "medium":
          price = 1100;
          console.log("The price is "+ price);
        break;
        case "small":
          price = 900;
          console.log(price);
         break;   
    
      default:
          console.log("error")
    }
    switch (pcrust) {
      case "0":
         crust_price = 0;
        break;
        case "Crispy":
          crust_price = 350;
         break;
         case "Spicy":
          crust_price = 250;
        break;
        case "Vegan":
          crust_price = 200;
         break;   
         case "Crunchy":
          crust_price = 350;
         break;  
    
      default:
          console.log("No price")
    }
  let topping_value = ptopping.length*50;
  console,log("toppings value" + topping_value);

  if((psize == "0") && (pcrust == "0")){
    console.log("please select something");
    $("button.proceed").show();
    $("#info").show();
    $("div.details").hide();
    alert("Please select pizza size and crust");
  }
  else{
    $("button.proceed").hide();
    $("#info").hide();
    $("div.details").slideDown(1000);
  }
})
}) 