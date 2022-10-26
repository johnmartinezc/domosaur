// And Now, Some Warmup Challenges

let spanMess = document.querySelector('.mess-with-me')
spanMess.style.fontSize = '40px'

let paraMess = document.querySelector('p.mess-with-me')
paraMess.style.background = 'green'

let hiddenDino = document.querySelector('#hide-me')
hiddenDino.style.display = 'none'


let firstDino = document.querySelector("#triceratops")
firstDino.style.width = '324px'


//Event Listener Challenges

let featheredDino = document.querySelector('#feathers')
let biggifyDino = document.querySelector('#biggify')
let backgroundToggle = document.querySelector('#toggle')
let rowDino = document.querySelector('#row')

spanMess.addEventListener('click', function(){{
    spanMess.style.color = 'orange'
}})

firstDino.addEventListener('click', function(){
    firstDino.style.border = '3px solid red'
})

featheredDino.addEventListener('click', function(){
    featheredDino.style.opacity = "0.5"
})

backgroundToggle.addEventListener('click', function(){
    if(rowDino.style.background === ''){
        rowDino.style.background = 'blue'
    }else if(rowDino.style.background === 'blue'){
        rowDino.style.background = ''

    }
})
    

biggifyDino.addEventListener('mouseenter',function(){
    if(biggifyDino.style.width === ''){
        biggifyDino.style.width = '200px'

    }else if(biggifyDino.style.width = '200px'){
        biggifyDino.style.width = ''
    }
    
})

// biggifyDino.addEventListener('mouseout', function(){
//     biggifyDino.style.width = '150px'
// })
