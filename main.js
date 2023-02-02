var btnP = document.getElementsByClassName('btnP')
var price=document.getElementsByClassName('price')
var quantite = document.getElementsByClassName('quantite')
var total= document.getElementById('totall')
console.log(btnP);
for( let plus of btnP){
    plus.addEventListener( 'click', function(){

plus.previousElementSibling.innerText++

 totall()
    })
}
var btnM= document.getElementsByClassName('btnM')
for( let moins of btnM){
    moins.addEventListener('click',function(){
        moins.nextElementSibling.innerText--
        totall()
    })
}


function totall(){
    let sum=0;
    for( let i=0; i<price.length;i++){
       
        sum += quantite[i].innerText * price[i].innerText
        document.getElementById('totall').innerText= sum
    }
    
}
var del = document.getElementsByClassName('supprime')
console.log(del);
for( let i=0; i<del.length;i++){
   let  delect=del[i];
    delect.addEventListener('click',function(){
        delect.parentElement.remove();

    })
}
let likes= document.getElementsByClassName('like')

for (let i=0;i<btnstyle.length;i++){
    let btt=likes[i]
    btt.addEventListener('click',function(){
        btt.style.color='red'
    })

}
