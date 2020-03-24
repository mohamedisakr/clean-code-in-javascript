let toDos = [
  { task: "Buy some meet", done: false },
  { task: "Send email to your friends", done: true },
  { task: "Watch mastering clean code in JS", done: false }
];

function printAll(toDos) {
  toDos.forEach(item => console.log(item.task));
}

function printCompleted(toDos) {
  toDos
    .filter(item => item.done === true)
    .forEach(item => console.log(item.task));
}

function printPending(toDos) {
  toDos
    .filter(item => item.done === false)
    .forEach(item => console.log(item.task));
}

printCompleted(toDos);

// ******************************* using flage **************************************
// 0 => print all todos
// 1 => print completed todos
// 2 => print pending todos
function printToDos(toDos, flag) {
  if (flag === 0) {
    toDos.forEach(item => console.log(item.task));
  } else if (flag === 1) {
    toDos
      .filter(item => item.done === true)
      .forEach(item => console.log(item.task));
  } else {
    toDos
      .filter(item => item.done === false)
      .forEach(item => console.log(item.task));
  }
}

// printToDos(toDos, 2);
