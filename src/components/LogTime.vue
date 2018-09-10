<template>
    <div class="form-horizontal">
        <div class="form-group">
            <div class="col-sm-6">
                <label for="date">Date</label>
                <input
                  type="text"
                  id="date"
                  class="form-control"
                  v-model="timeEntry.date"
                  placeholder="Date"
                />
            </div>
            <div class="col-sm-6">
                <label for="hours">Hours</label>
                <input
                  type="text"
                  id="hours"
                  class="form-control"
                  v-model="timeEntry.totalTime"
                  placeholder="Hours"
                />
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <label for="comment">Comment</label>
                <input
                  type="text"
                  id="comment"
                  class="form-control"
                  v-model="timeEntry.comment"
                  placeholder="Comment"
                />
            </div>
        </div>

        <button class="btn btn-primary" @click="save()">Save</button>
        <router-link to="/time-entries" class="btn btn-danger">Cancel</router-link>
        <hr>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // We default the user object on the timeEnetry to have some user details
                timeEntry: {
                    user: {
                        firstName: 'Taro',
                        lastName: 'Tanaka',
                        email: 'taro.tanaka@gmail.com',
                        image: 'https://ja.gravatar.com/userimage/104959443/b4b204c3274bf1e99c41f88efa15b6af.png',
                    },
                    // comment: 'First time entry',
                    // totalTime: 1.5,
                    // date: '2018-09-10',
                },
            }
        },
        methods: {
            save() {
                let timeEntry = this.timeEntry;
                // We disatch the timeEntry so it can be pushed
                // onto the timeEntries array in the parent component
                this.$emit('timeUpdate', timeEntry);
                this.timeEntry = {};
            },
        },
    }
</script>

<style scoped>

</style>