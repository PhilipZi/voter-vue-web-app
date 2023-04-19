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
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );

      submission.votes++;
      // this.submissions[0].votes++;
    },
  },
});

const vm = app.mount("#app");
