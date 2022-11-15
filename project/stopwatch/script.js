let hr=00;
let min=00;
let sec=00;
let count=00;


let timer=false;

const start=()=>{
   timer=true;
   stopwatch();
}

const stop=()=>{
    timer=false;
    stopwatch();
}

const reset=()=>{
    
    timer=false;
    hr=0;
    sec=0;
    min=0;
    count=0;

    document.getElementById("hr").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}


const stopwatch=()=>{
  if(timer==true)
  {
    count+=1;
    if(count==100)
    {
        sec+=1;
        count=0;
    }

    if(sec==60)
    {
        min+=1;
        sec=0;
    }

    if(min==60)
    {
        hr+=1;
        min=0;
        sec=0;
    }

    var hrstr=hr;
    var minstr=min;
    var secstr=sec;
    var countstr=count;



    if(hr<10){
        hrstr="0"+hrstr;
    }
 
    if(min<10){
        minstr="0"+minstr;
    }

    if(sec<10){
        secstr="0"+secstr;
    }

    if(hr<10){
        countstr="0"+countstr;
    }

    document.getElementById("hr").innerHTML=hrstr;
    document.getElementById("min").innerHTML=minstr;
    document.getElementById("sec").innerHTML=secstr;
    document.getElementById("count").innerHTML=countstr;
    setTimeout("stopwatch()",10)
  }
}