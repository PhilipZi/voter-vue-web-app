const app = Vue.createApp({
  data: function () {
    return {
      submissions: submissions,
    };
  },
  computed: {
    totalVotes() {
      return this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    },
  },
  methods: {
    upvote() {
      this.submissions[0].votes++;
    },
  },
});

const vm = app.mount("#app");
