


let ul =document.querySelector('.lists');
let liAll =document.querySelectorAll('.list');
let inputMain = document.querySelector('.input');
let addTaskBtn = document.querySelector('.addbtn');
let section =document.querySelector('.section');


// let dall =document.querySelector('.dAll');

// dall.addEventListener('click',deleteAll);

// function deleteAll(e){
//     e.preventDefault();
//     item =e.target;
//     console.log(item);

//     ul.remove();

//    let ulNew = document.createElement('ul');
//     ulNew.classList.add('lists');
//     section.appendChild(ulNew);
    

// }







function addTasks(){
    
if(inputMain.value !== ''){
let li = document.createElement('li');

li.classList.add('list');

let div= document.createElement('div');
div.classList.add('paraDiv');

let p = document.createElement('p');
p.classList.add('para');
p.setAttribute('id','para');


let inputPlate= document.createElement('input');
inputPlate.setAttribute('type','checkbox');
inputPlate.setAttribute('id','check');
inputPlate.classList.add('inputCheck');

let editBtn =document.createElement('button');
editBtn.classList.add('edit');
editBtn.setAttribute('type','button')
editBtn.innerText ='Edit';

let dropBtn =document.createElement('button');
dropBtn.classList.add('drop');
dropBtn.setAttribute('type','button')
dropBtn.innerText ='Drop'


// appending elements

ul.appendChild(li);
li.appendChild(div);
div.appendChild(p);
div.appendChild(inputPlate);
li.appendChild(editBtn);
li.appendChild(dropBtn);

//Inserting values inside the p tag
p.innerText = inputMain.value;

// to clear input value from Main input
inputMain.value ='';

} else{
    alert('please write the task before adding it!');
}



}

let para =document.querySelectorAll('.para');
let checkbox =document.querySelectorAll('.inputCheck');

// for(let i=0;i<checkbox.length;i++){

//     checkbox[i].addEventListener('click',(e)=>{

            

//         checkbox[i].checked ? para[i].classList.add('strike') : para[i].classList.remove('strike');


// })

// }

ul.addEventListener('click',deleteList)






let drop =document.querySelectorAll('.drop');


// for(let i=0;i<drop.length;i++){

//     drop[i].addEventListener('click',(e)=>{

//         e.preventDefault();


//         liAll[i].remove();

// })

// }

// for (let item of drop){

//     item.addEventListener('click',(e)=>{

//               e.preventDefault();
//         if(item.parentElement.children[0].children[1].children[0].checked)
//             { item.parentElement.remove();}
//             else{

//             }

// })
// }


function deleteList(e)
{

let item =e.target;

if(item.classList[0]=== 'drop')
{
   
    // let todo = item.previousElementSibling.previousElementSibling.children[1];
   
    // if(todo.checked === true){
    item.parentElement.remove();
    // }

}

if (item.classList[0]=== 'inputCheck'  )
{
   
        item.checked ? item.previousSibling.classList.add('strike') : item.previousSibling.classList.remove('strike');

}

if (item.classList[0]=== 'edit'  )
{
   
       let todo = item.previousElementSibling.children[0];
       inputMain.value=todo.innerText;
       item.parentElement.remove();

}



}
