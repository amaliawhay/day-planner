//This grabs the current day in the header of HTML
$("#currentDay").html(
  moment().format("dddd, MMMM do YYYY")
);
