

var form = document.querySelector("form");
form.onsubmit = function(e){
  e.preventDefault();

  var checkboxes = form.elements["checkboxes"];
  var num_checkboxes = checkboxes.length;


  var text_value = document.querySelector("textarea");
  console.log("User submitted the following: " + text_value.value);

  for (var i = 0; i < num_checkboxes; i++ ){
      var is_selected = checkboxes[i].checked == true;
      if (is_selected){
        checkbox_value = checkboxes[i].value;
        console.log("Checkbox selected: " + checkbox_value);
        alert("Thank you! We have received your feedback!")
      }
    }
  var flag = false;
  for(var i=0;i<checkboxes.length;i++){
      if(checkboxes[i].checked){
        flag = true ;
        break ;
      }
     }
   if(!flag){
    alert("Please choose at least one picture");
  }
}
