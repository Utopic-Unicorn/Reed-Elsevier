const lion = document.querySelector('.lion')
const deer = document.querySelector('.deer')
const leopard = document.querySelector('.leopard')
const butterfly = document.querySelector('.butterfly')
const geeko = document.querySelector('.geeko')
const imgUpdate = document.querySelector('.card-img-top')
const textUpdate = document.querySelector('.card-text')

lion.addEventListener('click', function(e){
    e.preventDefault()
        imgUpdate.src = 'https://images.unsplash.com/photo-1568265112889-c9d3fc50a281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80';
        textUpdate.innerText = 'This is a Cute Lion, Rawr hehehe.'
})

deer.addEventListener('click', function(e){
    e.preventDefault()
        imgUpdate.src = 'https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80';
        textUpdate.innerText = 'Deer is nothing special about this animal.'
})
leopard.addEventListener('click', function(e){
    e.preventDefault()
        imgUpdate.src = 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80';
        textUpdate.innerText = 'What is this weird cat looking Dalmatian?'
})
butterfly.addEventListener('click', function(e){
    e.preventDefault()
        imgUpdate.src = 'https://images.unsplash.com/photo-1500349812227-3264f5f54181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80';
        textUpdate.innerText = 'Be careful of the black variation of this, it means death.'
})
geeko.addEventListener('click', function(e){
    e.preventDefault()
        imgUpdate.src = 'https://images.unsplash.com/photo-1551946581-f7a62cd2f00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
        textUpdate.innerText = 'This is a not so native Toko.'
})
