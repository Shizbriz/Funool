let toog = function(idh,ids) {
    let e = document.getElementById(idh);
    let f = document.getElementById(ids)
       e.style.display = 'none';
       f.style.display = 'grid'
    }

let side = function(id){
   let e= document.getElementById(id);

   if(e.style.display === 'block'){e.style.display ='none';}
else{e.style.display ='block'}
}