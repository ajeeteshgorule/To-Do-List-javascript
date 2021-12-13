let addToDoButton =document.getElementById('addField');
let toDoContiner=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');


addToDoButton.addEventListener('click',function(){
    var paragraph=document.createElement('p')
    if(inputField.value!=''){
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText=inputField.value;
    toDoContiner.appendChild(paragraph);
    inputField.value="";}
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration="line-through"
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContiner.removeChild(paragraph)
    })

})