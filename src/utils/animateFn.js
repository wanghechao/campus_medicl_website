
function is_animate(inval) {
    let objElement = document.querySelector(inval)
    let window_h = window.innerHeight;

    window.addEventListener("scroll" , () => {
        let obj_top = objElement.getBoundingClientRect().top
        if(obj_top < window_h) {

                for (let i = 0; i < objElement.children.length; i++) {
                objElement.children[i].classList.add("show")
            }
            
        } else {

            for (let i = 0; i < objElement.children.length; i++) {
                objElement.children[i].classList.remove("show")
            }
        }
        
    })
}

export const animate2 = (dom_class) => {
    let objElement = document.querySelector(dom_class)
    let window_h = window.innerHeight;
    
    window.addEventListener("scroll" , () => {
        
        let obj_top = objElement.getBoundingClientRect().top
        obj_top = obj_top - 200;
        if(obj_top < window_h && obj_top > 0) {
            objElement.style.transform = `translateX(`+ obj_top /2  +`px)`
         }

    })
}

export const animate3 = (dom_class) => {
    let objElement = document.querySelector(dom_class)
    let window_h = window.innerHeight;
    
    window.addEventListener("scroll" , () => {
        
        let obj_top = objElement.getBoundingClientRect().top
        if(obj_top < window_h / 2) {
            return false;
        }

    })
}

export default is_animate