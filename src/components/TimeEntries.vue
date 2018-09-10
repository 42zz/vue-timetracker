<template>
    <div>
        <router-link
          v-if="$route.path !== '/time-entries/log-time'"
          to="/time-entries/log-time"
          class="btn btn-primary">
            Log Time
        </router-link>
        <div v-if="$route.path === '/time-entries/log-time'">
            <h3>Log Time</h3>
        </div>

        <hr>
        <router-view @timeUpdate='timeUpdate'></router-view>

        <div class="time-entries">
            <p v-if="!timeEntries.length"><strong>No time entries yet</strong></p>
            <div class="list-group">
                <a class="list-group-item" v-for="timeEntry in timeEntries">
                    <div class="row">
                        <div class="col-sm-2 user-details">
                            <img :src="timeEntry.user.image" class="avatar img-circle img-responsive">
                            <p class="text-center">
                                <strong>
                                    {{ timeEntry.user.firstName }}
                                    {{ timeEntry.user.lastName }}
                                </strong>
                            </p>
                        </div>

                        <div class="col-sm-2 text-center time-block">
                            <h3 class="list-group-item-text total-item">
                                <i class="glyphicon glyphicon-time"></i>
                                {{ timeEntry.totalTime }}
                            </h3>
                            <p class="label label-primary text-center">
                                <i class="glyphicon glyphicon-calender"></i>
                                {{ timeEntry.date }}
                            </p>
                        </div>

                        <div class="col-sm-7 comment-section">
                            <p>{{ timeEntry.comment }}</p>
                        </div>

                        <div class="col-sm-1">
                            <button
                              class="btn btn-xs btn-danger delete-button"
                                @click="deleteTimeEntry(timeEntry)">
                                X
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        // We want to start with an existing time entry
        let existingEntry = {
            user: {
                firstName: 'Taro',
                lastName: 'Tanaka',
                email: 'taro.tanaka@gmail.com',
                image: 'https://ja.gravatar.com/userimage/104959443/b4b204c3274bf1e99c41f88efa15b6af.png',
            },
            comment: 'First time entry',
            totalTime: 1.5,
            date: '2018-09-10',
        }
        return {
            // Start out with the existing entry by placing it in the array
            timeEntries: [existingEntry]
        }
    },
    methods: {
        deleteTimeEntry (timeEntry) {
            // Get the index of the clicked time entry ant splice it out
            let index = this.timeEntries.indexOf(timeEntry);
            if(window.confirm('Are you sure you want to delete this time entry?')) {
                this.timeEntries.splice(index, 1);
                // this.$emit('deleteTime', timeEntry);
            }
        },
        timeUpdate (timeEntry) {
            this.timeEntries.push(timeEntry);
            // this.$emit('updateTime', timeEntry);
            return true;
        },
    }
}
</script>

<style>
.avatar {
    height: 75px;
    margin: 10px auto;
}
.user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
}
.time-block {
    padding: 10px;
}
.comment-section {
    padding: 20px;
}
</style>
