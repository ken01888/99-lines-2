document.addEventListener('DOMContentLoaded', function() {
    let btn =document.createElement('button')
    let text = document.createTextNode("Sing!")
    btn.appendChild(text);
    btn.className = "btn btn-success btn-large"
    document.body.appendChild(btn);
    btn.addEventListener("click",function(){
        let friends= ["Mike","Mickey","Mendy","Mani","Marvin"];
        for (i of friends){

            let div = document.createElement('div')
            div.className = i
            let h3 = document.createElement('h3')
            div.appendChild(h3)
            let name = document.createTextNode(i)
            h3.appendChild(name)

            for (x=99; x>0; x--){
            let paragraph = document.createElement('p');
            if (x > 1){
            let text = document.createTextNode(`${x} lines of code in the file, ${x} lines of code; ${i} strikes one out, clears it all out, ${x-1} lines of code in the file`)
            paragraph.appendChild(text) 
            div.appendChild(paragraph) 
            }else if (x == 1) {
                let text = document.createTextNode(`${x} line of code in the file, ${x} line of code; ${i} strikes one out, clears it all out, no more lines of code in the file`)
                paragraph.appendChild(text) 
                div.appendChild(paragraph)
            }
            
            
           
            } document.body.appendChild(div)

        }})})
        
        
        


       
    
    





    

