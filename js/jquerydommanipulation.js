
$(document).ready(function () {
    // hide box
    $("#hider").click(function () {
        if ($(this).is(":checked")) {
          $("#container").hide(),
          $("#hide").text("Show Task");
        } else {
          $("#container").show(),
          $("#hide").text("Hide Task");
          
        }
      }); 
    //   adding task
    $("#addbutton").click(function(){
        let input = prompt("enter task");
        let element = `<li> <div class="container1 p-2 flex justify-between">
                        <div> <input type="checkbox" value="" class="datacollector"> ${input}</div>
                        <button class="deletbutton px-2 flex bg-amber-600 hover:text-white">Delet</button>
                    </div></li>`
         $(".container1").addClass("container1"),
         $("deletbutton").addClass("deletbutton"),
        $("#container").append(element)
          });

    // delet button
    $("ul").on("click", "li button, li i", function (e) {
        $(this).closest("li").hide();
    });


    // search bar
    $("#searchh").keyup(function (e){
      let word = $("#searchh").val();
      $(".deletbutton").hide()
      console.log(word);
      let tasks = $(".datacollector").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(word) > -1);
    } );
    });
  });

  

  
