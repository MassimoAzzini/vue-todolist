const { createApp } = Vue

createApp ({
  data() {
    return {
      tasks: [
        {
          title: 'Creare HTML',
          isDone: false
        },
        {
          title: 'Creare CSS',
          isDone: false
        },
        {
          title: 'Creare JS',
          isDone: false
        }
      ],
      newTask: {
        title: '',
        isDone: false
      },
      isError: false,
      message: false,
    }
  },
  methods: {

    addTask(){
      if(this.newTask.title.length < 5){
        this.isError = true
        setTimeout( () => this.isError = false, 1000)
      } else {
        // const clone = {...this.newTask};

        this.tasks.unshift({...this.newTask});
      }
      this.newTask.title = '';
      console.log(this.tasks)
    },
    
    removeTask(index){
      if(this.tasks[index].isDone){
        this.tasks.splice(index, 1)
      }else{
        this.message = true
        setTimeout( () => this.message = false, 2000)
      }
    }

  }

}).mount('#app')