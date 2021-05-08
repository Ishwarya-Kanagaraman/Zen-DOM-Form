function fillTable(){
 
  var row1=document.getElementById('Tfname');
  var cell1=row1.insertCell();
  cell1.setAttribute('class','cell');
  cell1.innerHTML= document.getElementById('firstName').value;
  var row2=document.getElementById('Tlname');
  var cell2=row2.insertCell();
  cell2.setAttribute('class','cell');
  cell2.innerHTML= document.getElementById('lastName').value;
  var row3=document.getElementById('Taddress');
  var cell3=row3.insertCell();
  cell3.setAttribute('class','cell');
  cell3.innerHTML= document.getElementById('address').value;
  var row4=document.getElementById('Tpincode');
  var cell4=row4.insertCell();
  cell4.setAttribute('class','cell');
  cell4.innerHTML= document.getElementById('pincode').value;
  var row5=document.getElementById('Tgender');
  var cell5=row5.insertCell();
  cell5.setAttribute('class','cell');
  // getting the selected value from a radio button
  var gender=document.getElementsByName('gender');
   for(var i=0;i<gender.length;i++){
   if(gender[i].checked){
       var s=gender[i].value;
   }
}
  cell5.innerHTML= s;
  var row6=document.getElementById('Tfood');
  var cell6=row6.insertCell();
  cell6.setAttribute('class','cell');
  // getting the values of the selected checkbox
  var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
 for (var checkbox of markedCheckbox) {
   cell6.append(checkbox.value+" ");
 }
 var row7=document.getElementById('Tstate');
 var cell7=row7.insertCell();
 cell7.setAttribute('class','cell');
 cell7.innerHTML= document.getElementById('state').value;
 var row8=document.getElementById('Tcountry');
 var cell8=row8.insertCell();
 cell8.setAttribute('class','cell');
 cell8.innerHTML= document.getElementById('country').value;

// resetting the values once the values get appended to the table
 document.getElementById('myForm').reset();

}
