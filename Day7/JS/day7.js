const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')
listItems.forEach((items,idx)=>{
    items.addEventListener('click',()=>{
        hideAllContents()
        hideAllItems()
    })
})
function hideAllContents(){
    contents.forEach(content=>content.classList.remove('show'))
}
function hideAllContents(){
    contents.forEach(content=>content.classList.remove('show'))
}