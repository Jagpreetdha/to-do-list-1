
const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error')
const progressValue = document.querySelector('.progress-value')
const desciptionValue = document.querySelector('.progress-value span')


checkBoxList.forEach((checkbox,index)=>{
  checkbox.addEventListener('click',(e)=>{
    const allGoalsAdded = [...inputFields].every((input)=>
    {
      return input.value
    })
    if(allGoalsAdded){
      checkbox.parentElement.classList.toggle('completed')
      if(index===0){
        progressValue.style.width='33.33%'
        desciptionValue.innerText='1/3 Completed'
      }
      else if(index===1){
        progressValue.style.width='66.66%'
        desciptionValue.innerText='2/3 Completed'
      }
      else{
        progressValue.style.width='100%'
        desciptionValue.innerText='All task Completed'
      }
    }
   else{
    errorLabel.classList.remove('error')
    errorLabel.classList.add('error1')
   }
  })
})
inputFields.forEach((input)=>{
  input.addEventListener('focus',()=>{
    errorLabel.classList.add('error')
    errorLabel.classList.remove('error1')
  })
})