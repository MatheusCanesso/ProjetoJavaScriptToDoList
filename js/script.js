document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Por favor insira uma Tarefa!");
    } else{
        document.querySelector('#tasks').innerHTML 
        += `
        <div class="task">
            <span id="taskname">
              ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <i class="fa-solid fa-x"></i>
            </button>
        </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}