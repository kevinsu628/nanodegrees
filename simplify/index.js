function newItem (taskItem) {
  var taskItem = document.querySelector("#task").value
  var fullList = document.querySelector("#taskItems")

  //create task item
  var createItem = document.createElement("div")
  createItem.className = "newItem"
  var itemText = document.createTextNode(taskItem)
  createItem.appendChild(itemText)

    //create close item
  var closeButton = document.createElement("div")
  closeButton.className = "close"

      //create container item
  var itemComponent = document.createElement("div")
  itemComponent.className = "itemContainer"

      //build task item
  itemComponent.appendChild(createItem);
  itemComponent.appendChild(closeButton);
  document.getElementById("taskItems").appendChild(itemComponent)

//remove item
var allCloseButtons = document.getElementsByClassName("close");

for (i=0; i < allCloseButtons.length; i++) {
  allCloseButtons[i].addEventListener("click", function(){
    this.parentNode.style.display = "none";
  })
}
//clear input

}

var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];



var NowDate = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var sDay = NowDate.getDate();
var sMonth = NowDate.getMonth() + 1;
var sYear = NowDate.getFullYear();
var eDisplayDate = document.getElementById('displayJsDate');
eDisplayDate.innerHTML = n + " " + sDay + ", " + sYear






document.querySelector("#addItem").addEventListener("click", function(){
  if (2+2==4) {
    newItem();
    document.querySelector("#task").value = "";
  } else {
    console.log("error")
  }

})



// using return key creates new item
document.querySelector("#task")
    .addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addItem").click();
    }
});

      //build task item


      //     document.querySelector("#welcomeMessageName").addEventListener("keyup", function(event) {
      //     if (event.keyCode === 13) {
      //         event.preventDefault();
      //         var name = document.querySelector("#welcomeMessageName")
      //         document.querySelector("#welcomeMessageName").style.display = "none";
      //
      //         document.querySelector("#welcomeMessage").innerText += "Good Morning " + name.value + " ☀️";
      //     }
      // });
