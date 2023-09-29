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
      isError: false
    }
  },
  methods: {

    addTask(){
      if(this.newTask.length < 5){
        this.isError = true
      } else {
        this.tasks.unshift(this.newTask);
        this.newTask = '';
        this.isError = false

      }
      console.log(this.newTask)
    }  
  }

}).mount('#app')