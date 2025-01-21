const prOne=new Promise(function(resolve,reject){ // created promise
setTimeout(function(){
    console.log('Task 1 done');
    resolve()
},1000)
})
prOne.then(function(){                          // to consume
    console.log('1 consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Task 2 done');
        resolve()
    },1000)
    }).then(function(){
        console.log('2 consumed')  
    })

const prTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Task 3 done');
        resolve({username:'dom', email:'abc'})
    },1000)
    })
    prTwo.then(function(user){
        console.log(user)
        console.log('3 consumed') 
    })

const prThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        let er=true
        if(!er){
            resolve({username:'domo', pass:'123'})
        } else {
            reject('error3')
        }
    },1000)
    })

    prThree.then(function(user){                    // to avoid callback hell
        console.log(user)
        return user.username
    }).then((uname)=>{
        console.log(uname)
    }).catch(function(error){
        console.log(error)
    }).finally(()=>console.log('something happened'))


const prFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let er=false
        if(!er){
            resolve({username:'gomo', pass:'1234'})
        } else {
            reject('error4')
        }
    },1000)
    })

async function consumeprFour() {
    try{
    const resp=await prFour
    console.log(resp);
    }
    catch(error)
    {
        console.log(error);
        
    }
    
}

consumeprFour()
// const prFive=new Promise()
// const prSix=new Promise()

