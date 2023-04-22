const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");
const requirement= [
    {regex: /.{8,}/,index:0}, //Minimum 8 Character
    {regex:/[0-9]/, index:1},//At least one number
    {regex:/[a-z]/, index:2}, //Atleast one lowercase
    {regex:/[^A-Za-z0-9]/, index:3},//Atleast one special character
    {regex:/[A-Z]/, index:4}//Atleast one uppercase
]

passwordInput.addEventListener("keyup",function(e){
    requirement.forEach(item =>{
        const isValid = item.regex.test(e.target.value);
        const requirementItem= requirementList[item.index];

        if(isValid)
        {
            requirementItem.firstElementChild.className= "fa-solid fa-check";
            requirementItem.classList.add("valid");
        }
        else{
            requirementItem.firstElementChild.className= "fa-solid fa-circle";
        }
    })
})

eyeIcon.addEventListener("click",function(){
    passwordInput.type = passwordInput.type ==="password" ? "text" :"password";
    eyeIcon.className =`fa-solid fa-eye${passwordInput.type === "password" ? "" :"-slash"}`
})