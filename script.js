	function f1(){
		var nameEl = document.getElementById('name');
		
		if(nameEl.value == ""){

			var obj = document.getElementById('msg');
			obj.innerHTML = "null submission";
			obj.style.color = "red";
		}
	}
	
	function f1()
{
  for(var i=0; i < field.length; i++) {
    if(field[i].checked) return field[i].value;
  }
  return false;
}