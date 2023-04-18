const app = Vue.createApp({
  data: function () {
    return {
      submissions: submissions,
    };
  },
  methods: {
    upvote() {
      this.submissions[0].votes++;
    },
  },
});

const vm = app.mount("#app");
