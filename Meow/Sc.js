//顯示圖片下標
let index = 0

function createAuto() {
    setInterval(() => {
        index++;
        refresh();
    }, 5000);
}

// Example usage
createAuto();


function refresh() {
    if(index < 0 ){
        index = 2

    }else if(index > 2){
        index = 0
    }
    


    // 获取轮播元素
    let carousel = document.querySelector(".banner");
  
    // 获取轮播宽度
    let width = getComputedStyle(carousel).width;
    width = Number(width.slice(0, -2)); 
  
    carousel.querySelector(".photo").style.left =
      index * width * -1 + "px";
  }

    let refreshWrapper = (func) => {
        return function(...args){
            let result = func(...args)
            refresh()

            clearInterval(autoTimer)
            autoTimer = createAuto()
            return result


        }
    }
  


    let leftShift = refreshWrapper(() => {
        index--
    })
    
    let rightShift = refreshWrapper(() => {
        index++
    })
    
    let setIndex = refreshWrapper((idx) => {
        index = idx
    })
    
    refresh()
    

 
    
    