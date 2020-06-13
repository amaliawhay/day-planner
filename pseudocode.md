1. Display the current date at the top of the page in the header section in <p #currentDay></p>
2. Display blocks of time for each hour of the work day
   A. Create responsive bootstrap elements for each time block 9-5.
   a. Each block has 3 sections
   1a. Section for time
   2b. Section that user input can be entered into - Bootstrap form - variable to hold user input (enter this input into an array?) - store this input in local storage
   3c. Save button - onclick - add hover class to present & future time slots. - use "disabled" (bootstrap feature) to prevent clicks on save button after time slot has passed
   B. The time blocks are color coded
   a. Grey for time blocks that have passed
   1a. Use "disabled" (bootstrap feature)?
   b. Red for current time block
   c. Green for future time blocks
3. Time blocks can be clicked on to enter a scheduled even for that respective time.
4. Each time block has a save button that stores that information in local storage.
   A. This information remains on the calendar when the page is refreshed.
