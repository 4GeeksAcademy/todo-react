# React + Flux Boilerplate

# Typica workflow for any FLUX feature

Lets say we are implementing the functionality for the "add new task" feature:

1. When is the functionality being triggered?: On the "add new task" button.
2. We need to add an arrow function to the onClick property of that button.
3. Then, inside the arrow function we call the todoActions.addNewTask() method passing whatever we need on the actions object to continue.
4. On the actions we dispatch a new ADD_NEW_TASK action.
5. On the store we handle the action adding a new case into the SWITCH.
6. Inside the case we call another method of the same store that will take care of adding the new todo item into the store.
7. Right after adding the new todo item we emit the 'change' event.
8. On all the dependent components that are listening to the store emmit, we add some logic on the emmit handler to react to that particualr emmit and update their respectives state objects if needed.
