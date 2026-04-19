const body=document.getElementsByTagName("body");
const box=document.querySelectorAll(".box");
const tictac=document.querySelector(".grid");
const h1=document.getElementsByTagName("h1");
const rbtn=document.getElementById("restart");
console.log(tictac);
console.log(box);
let currentPlayer="X";
let count=0;
 let winningcondition=[
        [0,1,2],[3,4,5],[6,7,8]
        ,[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
function startGame(e){
    //console.log(e.target);
    if(e.target.className!=="tictac"){
    if(e.target.innerText===""){
    e.target.innerText=currentPlayer;
    /*if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X";
    }*/
   count++;
     winner();
    currentPlayer=(currentPlayer==="X")? "O":"X";//ternary operator
    }
    }
    if(count===9){
      console.log("match draw");
     h1[0].innerText=`Match Draw`;
    }
};

tictac.addEventListener('click',startGame);
function winner(){
     winningcondition.forEach((item)=>{ //acessing indexes
        let index0=item[0];
        let index1=item[1];
        let index2=item[2];
        //console.log(index0,index1,index2);
        let val0=box[index0].innerText;
         let val1=box[index1].innerText;
          let val2=box[index2].innerText;
       // console.log(index0,val0,index1,val1,index2 ,val2); 
        if(val0!=='' && val1!=='' && val2!==''){
           if(val0===val1&& val0===val2){
            count=0;
            box[index0].classList.add("winnerClass");
            box[index1].classList.add("winnerClass");
            box[index2].classList.add("winnerClass");
             h1[0].innerText=`winner is ${val2}`;
            //console.log("winner is X");
            tictac.removeEventListener('click',startGame); 
           }
        }

         })
}

rbtn.addEventListener('dblclick',()=>{
    currentPlayer='X';

    h1[0].innerText="Tic Tac Toe";
    box.forEach(item=>{
        item.classList.remove("winnerClass");
        item.innerText='';
    })
    tictac.addEventListener('click',startGame);
})