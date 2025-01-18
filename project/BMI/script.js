const form=document.querySelector('form')

// const ht=parseInt(document.querySelector('#height').value)
// const wt=parseInt(document.querySelector('#weight').value)
// this will give empty value

form.addEventListener('submit', function (e){
    e.preventDefault()

    const ht=parseInt(document.querySelector('#height').value)
    const wt=parseInt(document.querySelector('#weight').value)
    const res=document.querySelector('#results')

    if (ht === '' || ht <0 || isNaN(ht) ) {
        res.innerHTML = 'Please give valid height'
    } else if (wt === '' || wt <0 || isNaN(wt) ) {
        res.innerHTML = 'Please give valid weight'
    } else {
       const bmi= (wt / ((ht*ht)/10000)).toFixed(2)
    
       if (bmi > 24.9){
        res.innerHTML = `<span>BMI is ${bmi}. <br/> You are overweight</span>`
       } else if (bmi< 18.6){
        res.innerHTML = `<span>BMI is ${bmi}. <br/> You are underweight</span>`
       } else {
        res.innerHTML = `<span>BMI is ${bmi}. <br/> You have normal weight</span>`
       }
    }

})