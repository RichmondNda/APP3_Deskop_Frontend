<template>
  <div v-if="alertOpen" class="text-white px-6 py-4 border-0 rounded relative mb-2 " :class="'bg-'+alert_color(al_type)+'-400'">
    <span class="text-xl inline-block mr-5 align-middle">
       <font-awesome-icon :icon="alert_icon(al_type)" ></font-awesome-icon>
    </span>
    <span class="inline-block align-middle mr-8">
      <b class="capitalize"> </b> {{my_message}}
    </span>
    <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" v-on:click="closeAlert()">
      <span>×</span>
    </button>
  </div>
</template>

<script>

/**
 *   pour les alerts on utilisera un systeme si type = info c'est blue 
 * si type = danger c'est rouge 
 * si type = succes c'est vert 
 * si type = avertissement c'st jaune 
 * 
 */

export default {
  name: "alert",
  props :['message','alert_type'],
  data() {
    return {
      alertOpen: true,
      al_type : this.alert_type,
      my_message : this.message,
    }
  },
  methods: {
    closeAlert: function(){
      this.alertOpen = false;
    },
    alert_icon(type)
    {
      if(type == 'danger'){
        return 'exclamation-triangle'
      }
      else if(type == 'avertissement')
      {
        return 'exclamation'
      }
      else if(type == 'succes')
      {
        return 'check'
      }
      else 
      {
        return 'bell'
      }
    },
    alert_color(type)
    {
      if(type == 'succes'){
        return 'green'
      }
      else if(type == 'danger')
      {
        return 'red'
      }
      else if(type == 'avertissement')
      {
        return 'yellow'
      }
      else 
      {
        return 'blue'
      }
    }
  }
}
</script>