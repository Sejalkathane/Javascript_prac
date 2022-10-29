// console.log('sejal kathane');

// object==item
// ::having certain properties


// const person={
//     name:'SK',shirt:'white'
// };

// console.log(person.name);
// console.log(person.shirt);


// console.log(person['name']);
// console.log(person['shirt']);

// //assign object::
// person.phone='341333318'
// console.log(person.phone);

// key:value  {pair}
// const female={
//     name:"Sejal",
//     surname:"kathane",
//     age:19,
//     favfood:"Indian veg food "
// };

// console.log(female)
// console.log(female.name);
// console.log(female.surname);
// console.log(female.age);
// console.log(female.favfood);




//es6 arrow function , object, template

const introducer = (name,surname,age,favfood)=>{

    const person2={
        name:name,
        surname:surname,
        age:age,
        favfood:favfood,
        assets:100000,
        liabilities:5000,
        networth:function(){
            return this.assets-this.liabilities
        }
    }

   const intro= `Hi my fullname is ${person2.name} ${person2.surname} , age is ${person2.age} , favourate food is ${person2.favfood} networth is $${person2.networth()} `
 
   return intro;

}

console.log(introducer('sejal', 'kathane',19,'pav bhaji',10000));





// methods




