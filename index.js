import inquirer from 'inquirer'

inquirer
  .prompt([
    /* Pass your questions in here */
{
    name:"weigth",
         type:"number",
         message:"What is your Weight",
         validate:(weigth)=>{
 if(weigth==''||isNaN(weigth)){
     return "please enter a valid number"
 }
 else{
     return true
 }
}
},
{
    name:"heigth",
             type:"number",
             message:"What is your Heigth",
             validate:(heigth)=>{
     if(heigth==''||isNaN(heigth)){
         return "please enter a valid number"
     }
        else{
      return true
     } 
}
},

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
let heigth=answers.heigth*answers.heigth;
let bmi= answers.weigth/heigth;
console.log(`your BMI is ${bmi}`);
if(bmi>18.5){
    console.log("you are underweight");
}else 
if(bmi>18.5 && bmi<24.9){
    console.log("you are normal");
}else
if(bmi>25 && bmi<29.9){
    console.log("you are overweight");
}else{
    console.log("you are obbse")
}

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });