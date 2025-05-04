// for loop to manage multiple tasks
for (let i = 0; i < 2; i++) {
    // declaring variables to store input 
    let task = prompt("Enter task "+ (i + 1) +" tittle:");
    let description = prompt("Enter task "+ (i + 1) +" description:");
    let taskStatus = ""

    // using do while loop to prompt he user until a valid status is entered
    do {
        taskStatus = prompt("Enter task "+ (i + 1) +" status:") .toLocaleLowerCase();

        if (
            taskStatus === "todo" ||
            taskStatus === "doing" ||
            taskStatus === "done"
        ) {
            if (taskStatus === "done") {
                console.log("Tittle: " + task + ", status: " + taskStatus);
            } else {
                console.log("No task comlpeted, let's get to work!");
            }
        }
    } while (taskedStatus !== "todo" && taskStatus !== "doing" && taskStatus !== "done");
}