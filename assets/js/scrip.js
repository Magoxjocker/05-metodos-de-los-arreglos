array = []

const buttonAddTask = document.getElementById("add-task")
const task = document.getElementById("tasks")
const inputTotal = document.getElementById("total")
const inputRealizadas = document.getElementById("realizadas")

function updateState(){
    var tasksHTML = ""
    if(array.length === 0){
        task.innerHTML = ""
        return
    }
    array.forEach((task, index) =>  {
        tasksHTML +=  `
        <tr>
            <td class="text-light fw-bold">${index}</td>
            <td class="text-light fw-bold">${task.description}</td>
            <td> <input type="checkbox" onclick="completarTask(${index})" ${task.estado ? "checked" : "hola"}></td>
            <td> <a class="btn btn-warning strong" onclick="eliminarTask(${index})">Eliminar Tarea</a></td>
        </tr>
        `
        inputTotal.innerText = array.length
        arrayFiltrado = array.filter(val => val.estado === true)
        inputRealizadas.innerText = arrayFiltrado.length

        tasks.innerHTML = tasksHTML
    });
}

function completarTask(id){
    array[id].estado = array[id].estado ? false : true
    updateState()
}


function eliminarTask(id){
    array.splice(id, 1)
    updateState()
}


function addTask(){
    message = inputTask.value
    array.push({
        description:message,
        estado: false
    })
    updateState()
}

buttonAddTask.addEventListener('click',addTask)