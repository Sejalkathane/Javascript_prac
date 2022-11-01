const billinput=document.getElementById('billtotalinput');
const tipinput=document.getElementById('tipinput');
const numberofpeoplediv=document.getElementById('numberofpeople');
const perpersontotaldiv=document.getElementById('perpersontotal');



let numberofpeople=Number(numberofpeoplediv.innerText)




const calculatebill=()=>{
    // console.log(numberofpeople);
    // console.log(billinput.value); 

    const bill= Number(billinput.value)
    // const tip=Number(tipinput.value)
     
   const tippercentage=Number(tipinput.value)/100;
//    console.log(tippercentage);

    const tipamount=bill*tippercentage;

    const total=tipamount+bill;
    // console.log(total);

    const perpersontotal=total/numberofpeople
    // console.log(perpersontotal);


    perpersontotaldiv.innerText=`$${perpersontotal.toFixed(2)} `   //this is for not go above to decimal
}


const increasepeople=()=>{
    numberofpeople+=1
    numberofpeoplediv.innerText=numberofpeople
    calculatebill();
}



const decreasepeople=()=>{
   
    if(numberofpeople<=1){
        alert('Hey! You cannot hav less than 1 person');
  //throw errror in console      // throw 'Hey! You cannot hav less than 1 person';
        return 
    }

    numberofpeople-=1
    numberofpeoplediv.innerText=numberofpeople
 
     calculatebill();

}


