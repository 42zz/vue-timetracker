<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>Vue Time Tracker
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/time-entries">Time Entries</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: { 'sidebar': Sidebar },
  data () {
    return {
      // Start with the same value as our first time entry.
      // Hard-coded for now because we'll use a different approach
      // in the next article anyway
      totalTime: 1.5
    }
  },
  created: {
    timeUpdate(timeEntry) {
      this.totalTime += parseFloat(timeEntry.totalTime);
    },
    deleteTime(timeEntry) {
      this.totalTime -= parseFloat(timeEntry.totalTime);
    }
  }
}

</script>

<style>
</style>
