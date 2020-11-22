
var grid = document.querySelector('.grid');
  function colorVal(){
	return Math.floor(Math.random() * 256);
    }

  function createGrid (){
	for(var i = 0; i < 256; i++){
		var div = document.createElement('div');
		div.classList.add('cell');
		div.addEventListener('mouseover', function(event){
			var randomColor =  'rgb('+ colorVal() + ','+ colorVal() + ',' + colorVal() +')';		
			event.target.style.backgroundColor = randomColor;
		})

		grid.appendChild(div);
	  }
   };
 createGrid();
  
 var resetButton = document.querySelector(".reset"); 
 resetButton.addEventListener("click", resetGrid);

  function resetGrid() {
     while(grid.firstChild) {
      grid.removeChild(grid.firstChild);
      }
    for(var i = 0; i < 256; i++){
		var div = document.createElement('div');
		div.classList.add('cell');
		div.addEventListener('mouseover', function(event){
			var randomColor =  'rgb('+ colorVal() + ','+ colorVal() + ',' + colorVal() +')';		
			event.target.style.backgroundColor = randomColor;
		  })
		grid.appendChild(div);
	   }
     };

 var button4 = document.querySelector(".button4");
 button4.addEventListener('click', remove);
 function remove() {
     while(grid.firstChild) {
      grid.removeChild(grid.firstChild);
     }
      var randomColor =  'rgb('+ colorVal() + ','+ colorVal() + ',' + colorVal() +')';	

    for(var i = 0; i < 256; i++){
		var div = document.createElement('div');
		div.classList.add('cell');
		div.addEventListener('mouseover', function(event){
		event.target.style.backgroundColor = randomColor;
		})
	  grid.appendChild(div);
	 }
   };


  var button2 = document.querySelector(".button2");
  button2.addEventListener('click', removeCells );
 function removeCells() {
     while(grid.firstChild) {
      grid.removeChild(grid.firstChild);
     }
      var randomColor =  'rgb('+ colorVal() + ','+ colorVal() + ',' + colorVal() +')';	

    for(var i = 0; i < 784; i++){
		var div = document.createElement('div');
		div.classList.add('cell2');
		div.addEventListener('mouseover', function(event){
		event.target.style.backgroundColor = randomColor;
		})
	  grid.appendChild(div);
	 }
   };
 var button3 = document.querySelector(".button3");
 button3.addEventListener('click', removeCell );
 function removeCell() {
    while(grid.firstChild) {
    grid.removeChild(grid.firstChild);
   }
      
 	for(var i = 0; i < 784; i++){
		var div = document.createElement('div');
		div.classList.add('cell2');
		div.addEventListener('mouseover', function(event){
	       var randomColor =  'rgb('+ colorVal() + ','+ colorVal() + ',' + colorVal() +')';		
		   event.target.style.backgroundColor = randomColor;
		 })
		grid.appendChild(div);
	  }
    };

 