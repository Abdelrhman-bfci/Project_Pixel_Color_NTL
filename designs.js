// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  
  let table = document.getElementById("pixel_canvas");    
  let tableHeight = document.getElementById("input_height").value;
  let tableWidth = document.getElementById("input_width").value;
   $("#pixel_canvas").empty();

    for( let row = 0; row < tableHeight ; row++){
          
         let tablerow = document.createElement("tr");
         
        for( let col = 0; col < tableWidth ; col++){
            
            let tablecolum = document.createElement("td");
            
            tablerow.appendChild(tablecolum);
        }
        table.appendChild(tablerow);
    }
    

}
        
$("#grid-tabel").click(function(){
    
    makeGrid();
    
    $("td").on("click",function( event ) {
        
        let pixelcolor = $("#colorPicker").val(); //gey color for the pixels
        
        $(event.target).css("background-color",pixelcolor); // set style for tabel
        
    });
    
});
                       

