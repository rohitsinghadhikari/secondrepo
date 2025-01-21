const cl=document.getElementById('clock')



setInterval(function(){
    let date =new Date()
    cl.innerHTML= date.toLocaleTimeString()
}, 1000)