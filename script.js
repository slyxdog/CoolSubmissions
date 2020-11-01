Vue.component('charthree',{
 data: function(){
   return{
     Name: "Ryuji",
     codename: "Skull",
     
   }
 }, 
  template:`<button v-on:click="Name = codename">{{Name}}</button>`
})




Vue.component('chartwo',{
 data: function(){
   return{
     Name: "Anne",
     codename: "Panther",
     
   }
 }, 
  template:`<button v-on:click="Name = codename">{{Name}}</button>`
})




Vue.component('charone',{
 data: function(){
   return{
     Name: "Protagonist",
     codename: "Joker",
     
   }
 }, 
  template:`<button v-on:click="Name = codename">{{Name}}</button>`
})




var app = new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    message: "",
    nameValid: "",
    emailValid: false,
    submitting:"Submitting...",
    characters: [{name:"Protagonist",codename:"Joker"},{name:"Anne",codename:"Panther"},{name:"Ryuji",codename:"Skull"}],
    bool: true
  },
  watch: {
    name: function () {
      if (this.name.length < 2) {
        this.message = "Requires at least 2 characters.";
      } else if (this.name.length > 2) {
        this.nameValid = true;
      } else {
        this.message = "valid";
      }
    },
    email: function() {
      if (this.email.length > 10){
        this.emailValid = true
      } else {
        this.emailValid = false
      }
      
    },
    display: function() {
      if(this.bool = True){
        this.display = this.Name;
      } else if (this.bool = False){
        this.display = this.codename;
      } else {
        this.display = this.Name
      }
    }
  },
  methods:{
     change: function(){
      this.bool = !this.bool;
    }
  }
});