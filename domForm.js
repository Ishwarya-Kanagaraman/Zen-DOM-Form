function fillTable(){
  var tbl=document.getElementById('myTable');
  var row=tbl.insertRow();
  var cell1=row.insertCell();
  var cell2=row.insertCell();
  var cell3=row.insertCell();
  var cell4=row.insertCell();
  var cell5=row.insertCell();
  var cell6=row.insertCell();
  var cell7=row.insertCell();
  var cell8=row.insertCell();
  cell1.innerHTML=document.getElementById('firstName').value;
 
  cell2.innerHTML=document.getElementById('lastName').value;
  cell3.innerHTML=document.getElementById('address').value;
  cell4.innerHTML=document.getElementById('pincode').value;
  var gender=document.getElementsByName('gender');
   for(var i=0;i<gender.length;i++){
   if(gender[i].checked){
       var s=gender[i].value;
   }
}
  cell5.innerHTML= s;
  var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    if(markedCheckbox.length<2){
      alert('select atleast two food items');
    }
    for (var checkbox of markedCheckbox) {
      cell6.append(checkbox.value+' ');
    }
    cell7.innerHTML=document.getElementById('state').value;
    cell8.innerHTML=document.getElementById('country').value;
//   var row1=document.getElementById('Tfname');
//   var cell1=row1.insertCell();
//   cell1.setAttribute('class','cell');
//   cell1.innerHTML= document.getElementById('firstName').value;
//   var row2=document.getElementById('Tlname');
//   var cell2=row2.insertCell();
//   cell2.setAttribute('class','cell');
//   cell2.innerHTML= document.getElementById('lastName').value;
//   var row3=document.getElementById('Taddress');
//   var cell3=row3.insertCell();
//   cell3.setAttribute('class','cell');
//   cell3.innerHTML= document.getElementById('address').value;
//   var row4=document.getElementById('Tpincode');
//   var cell4=row4.insertCell();
//   cell4.setAttribute('class','cell');
//   cell4.innerHTML= document.getElementById('pincode').value;
//   var row5=document.getElementById('Tgender');
//   var cell5=row5.insertCell();
//   cell5.setAttribute('class','cell');
//   // getting the selected value from a radio button
//   var gender=document.getElementsByName('gender');
//    for(var i=0;i<gender.length;i++){
//    if(gender[i].checked){
//        var s=gender[i].value;
//    }
// }
//   cell5.innerHTML= s;
//   var row6=document.getElementById('Tfood');
//   var cell6=row6.insertCell();
//   cell6.setAttribute('class','cell');
//   // getting the values of the selected checkbox
//   var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
//   if(markedCheckbox.length<2){
//     alert('select atleast two food items');
//   }
//   // var count=1;
//   // if(markedCheckbox){
//   //   count++;
//   //   if(count<2){
//   //     alert('choose atleast 2 foods')
//   //   }
//   // }
//  for (var checkbox of markedCheckbox) {
//   //  var ul=cell6.createElement('ul');
//   // var li= ul.createElement('li');
//   // li.innerHTML=checkbox.value;
//   // // cell6.append(li);
//   // alert('choose atleast 2 food items');
//   var s=checkbox.value+ " ";
//   console.log(s);
//   cell6.append(s);
//  }

//  var row7=document.getElementById('Tstate');
//  var cell7=row7.insertCell();
//  cell7.setAttribute('class','cell');
//  cell7.innerHTML= document.getElementById('state').value;
//  var row8=document.getElementById('Tcountry');
//  var cell8=row8.insertCell();
//  cell8.setAttribute('class','cell');
//  cell8.innerHTML= document.getElementById('country').value;

// resetting the values once the values get appended to the table
 document.getElementById('myForm').reset();

}
