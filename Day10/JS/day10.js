const fill = document.querySelector('.fill')
const empties = document.querySelector('.empty')
fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragEnd',dragEnd)
for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
}
function dragStart(){

}
function dragEnd(){

}
function dragOver(){

}
function dragEnter(){

}
function dragLeave(){

}
function dragDrop(){

}