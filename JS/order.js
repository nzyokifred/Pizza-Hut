var price , crust_price, topping_price ;
let total = 0;
function yourPizza( name,sizes,ppcrust,topping, totals ){
  this.name = name;
  this.sizes = sizes;
  this.ppcrust = ppcrust;
  this.topping = topping;
  this.totals= totals;
}

$(document).ready(function(){

  $("button.proceed").click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#sizes option:selected").val();
   let pcrust = $("#ppcrust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1500;
       console.log(price);
     break;
     case "medium":
       price = 1000;
       console.log("The price is "+ price);
     break;
     case "small":
       price = 700;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 200;
      break;
      case "Crunchy":
        crust_price = 250;
      break;
      case "Vegan":
        crust_price = 180;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = ptopping.length*100;
    console.log("toppings value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("you have not selected anything");
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

    totals = price + crust_price + topping_value;
    console.log(totals);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + totals;

    $("#ppname").html($(".name option:selected").val());
    $("#ppsize").html( $("#sizes option:selected").val());
    $("#crust").html($("#ppcrust option:selected").val());
    $("#topping").html(ptopping.join(", "));
    $("#totals").html(totals);
    
    $("button.otherPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#sizes option:selected").val();
      let pcrust = $("#ppcrust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 850;
           console.log("The price is "+price);
         break;
         case "small":
           price = 600;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 300;
          break;
          case "Crunchy":
            crust_price = 2000;
          break;
          case "Vegan":
            crust_price = 250;
          break;
          default:
            console.log("No price"); 
        }
        let topping_value = ptopping.length*100;
        console.log("toppings value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(totals);

        checkoutTotal = checkoutTotal + totals;
        console.log(checkoutTotal);
    
      var newOrder = new yourPizza(pname, psize, pcrust,ptopping,totals);

      $("#ordersmade").append('<tr><td id="ppname">'+newOrder.name +'</td><td id="ppsize">' + newOrder.sizes + '</td><td id="crust">'+newOrder.ppcrust + '</td><td id="topping">'+newOrder.topping+'</td><td id="totals">'+newOrder.totals+'</td></tr>');
      console.log(newOrder);
      
      

    });
    
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.otherPizza").hide();
      $("button.delivers").slideDown(1000);
      $("#tprice").slideDown(1000);
      console.log("Your total bill is ksh. "+checkoutTotal);
      $("#total").append("Your bill is ksh. "+checkoutTotal);
    });

    $("button.delivers").click(function(){
      $(".pizzatable").hide();
      $(".details h2").hide();
      $(".deliver").slideDown(1000);
      $("#tprice").hide();
      $("button.delivers").hide();
      $("#totals").hide();
      let deliveryAmount= checkoutTotal+100;
      console.log("You will pay ksh. "+deliveryAmount+" on delivery");
      $("#bill").append("Your bill plus delivery fee is: "+deliveryAmount);
    });

 
    $("button#finaleorder").click(function(event){
      event.preventDefault();

      $("#total").hide();
      $(".deliver").hide();
      $("button#finaleorder").hide();
      let deliveryAmount= checkoutTotal+100;
      console.log("Your Bill is: "+deliveryAmount);
      let person = $("input#yourname").val();
      let phone = $("input#phone").val();
      let location = $("input#whereto").val();

      if ($("input#whereto").val() && $("input#phone").val() && $("input#yourname").val() !=""){
  
        $("#message").append(person+", Your order has been received and will be delivered to "+location+ ". Please prepare ksh. "+totals);
        $("#bill").hide();
        $("#message").slideDown(1000);
      }
      else {
        alert("Fill in the delivery location!");
        $(".deliver").show();
        $("button#finaleorder").show();
      }
    });
   event.preventDefault();
  });
});
