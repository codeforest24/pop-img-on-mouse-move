
const move=document.querySelector("#center");  
      
//function for Throttling  
const throttleFunction=(func, delayTime)=>{  
  
// Previously invoked time of the function  
let prev = 0;  
return (...args) => {  
    // Current invoked time of the function  
    let current = new Date().getTime();  
  
    // Logging the difference between the current and previous  
    // called and current called timings  
    console.log(current-prev, delayTime);  
      
    // If the difference is greater than the delay call  
    // the function again.  
    if(current - prev> delayTime){  
    prev = current;  
  
    // "..." is the spread operator here  
    // returning the function with the  
    // array of arguments  
    return func(...args);  
    }  
}  
}  
move.addEventListener("mousemove", throttleFunction((details)=>{ 
    // creating div 
    let div = document.createElement('div');
    div.classList.add('img-div');
    div.style.left = details.clientX+'px';
    div.style.top = details.clientY+'px';

    let img = document.createElement('img');
    img.setAttribute('src', 'https://images.unsplash.com/photo-1528425646626-fcc5dd57daf5?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
        y: '0',
        ease: Power1,
        duration: .7
    });

    gsap.to(img, {
        y: '100%',
        delay: .7,
        ease: Power3,
    });

    //removing the div
    setTimeout(function(){
        div.remove();
    }, 1000)
}, 200));  