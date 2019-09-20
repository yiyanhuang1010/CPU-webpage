

var form = document.querySelector("form");
form.onsubmit = function(e){
  e.preventDefault();

  var choice = form.elements["mychoice"];
  var num_choice = choice.length;

  var text_value = document.querySelector("textarea");
  console.log("User submitted the following: " + text_value.value);

  for (var i = 0; i < num_choice; i++ ){
      var is_selected = choice[i].checked == true;
      if (is_selected){
        choice_value = choice[i].value;
        console.log("Radio selected: " + choice_value);

        alert("Thank you! We have received your answer!")
      }
    }
  var flag = false;
  for(var i=0;i<choice.length;i++){
      if(choice[i].checked){
        flag = true ;
        break ;
      }
     }
   if(!flag){
    alert("Please make a choice");
   }
}
