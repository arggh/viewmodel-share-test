ViewModel.share({
  clock: {
    initialTime: new Date(),
    onCreated() {
      this.initialTime(new Date());
      console.log('onCreated:' , this.initialTime())
    },
    autorun() {
      console.log('autorun:' , this.initialTime())
    }
  }
});