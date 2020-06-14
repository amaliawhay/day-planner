//This displays the current day in the header of HTML
$("#currentDay").html(
  moment().format("dddd, MMMM do YYYY")
);

//This will save user events when the save button is clicked
/* - Variable to store user input = empty string or array
   - Save this variable to #userEvent using .saveBtn 
   - clicking save also stores user input in local storage
   - make this porperty work for each time block and keep the user input in the correct time block the user entered it in
 */

//$("#userEvent").text(localStorage.getItem(""))

//This will save user input in local storage

/*Create array for each time block to add each block dynamically
  - need variable to hold time block array (9-17)
  - need loop to or each to run through each time block. Inside each time block:

      - These elements are added as this loop progresses:
        - div class="hour"
          - displays text showing hour time
        - <textarea class="form-control">
          - bootstrap form
          - User input of these text areas are saved to an array for local storage
        - <button class="saveBtn">
          - clicking this button saves <textarea> content to local storage
      */

var timeAmount = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var timeBlocks = [
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
];
for (var i = 0; i < timeBlocks.length; i++) {
  var hourEl = $("<p>");
  hourEl.text(timeBlocks[i]);
  hourEl.attr(
    "data-value",
    timeBlocks[i],
    "data-time",
    timeAmount[i]
  );
  hourEl.addClass("col-1 time-block hour");
  var userInputEl = $("<textarea>");
  userInputEl.addClass("col-10 description");
  var saveBtn = $("<button>");
  saveBtn.text("Save");
  saveBtn.attr("button");
  saveBtn.addClass("col-1 btn saveBtn");

  if (timeAmount[i] == moment().format("kk")) {
    userInputEl.addClass("present");
  } else if (timeAmount[i] < moment().format("kk")) {
    userInputEl.addClass("past");
  } else {
    userInputEl.addClass("future");
  }

  $("#newBlocks").append(hourEl, userInputEl, saveBtn);
}
