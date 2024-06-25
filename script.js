let btn= document.getElementById("imBtn");
let myDiv= document.getElementById("test-a");
let saleprice=100;
let purchaseprice=75;
let profit=saleprice-purchaseprice;
let country=["Bangladesh","India","Pakistan","Nepal","Butan"];
function square(number){return number*number };
btn.addEventListener("click",function(){
	myDiv.innerHTML=square(4)			
});





let btn= document.getElementById("imBtn");
let myDiv= document.getElementById("test-a");
let age=18;
let country=["Bangladesh","India","Pakistan","Nepal","Butan"];

btn.addEventListener("click",function(){if(age>=18){
	myDiv.innerHTML="Selected"

}else{
	myDiv.innerHTML="Rejected"
}	
});





let btn= document.getElementById("imBtn");
let myDiv= document.getElementById("test-a");
let saleprice=100;
let purchaseprice=75;
let profit=saleprice-purchaseprice;
let name=["Nazim","Riaz","Saiful","Sumon","Ali"];
btn.addEventListener("click",function(){
	myDiv.innerHTML=name[3]+" "+"  Profit  =  "+(profit)+" %"+"<br>"
					+name[0]+" "+"  Profit  =  "+(profit+5)+" %"+"<br>"
					+name[4]+" "+"  Profit  =  "+(profit+2)+" %"+"<br>"		
	
});





let men=["Nazim","Riaz","Saiful","Sumon","Ali","Fukrul","Wahed"];
let btn= document.getElementById("myBtn");
let myDiv= document.getElementById("test-b");
btn.addEventListener("click",function(){
	myDiv.innerHTML= men[6]+"<br>"+men[5]+"<br> "+ men[4]+"<br> "+men[3]+"<br> "+ men[2]+"<br> "+men[1]+"<br> "+ men[0]
	
});





// /*
// let btn= document.getElementById("myBtn");
// let myDiv= document.getElementById("test-b");
// let country=["Bangladesh","India","Pakistan","Nepal","Butan"];

// btn.addEventListener("click",function(){for(i=0;i<country.lenght;i++){
	// myDiv.innerHTML=country[i]
// }
// });
// */