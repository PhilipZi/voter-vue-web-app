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
    cardHeaderBackgroundColor() {
      return {
        "bg-primary": this.totalVotes >= 50,
        "text-white": this.totalVotes >= 50,
      };
    },
    carTitleFontSize() {
      return {
        fontSize: this.totalVotes + "px",
      };
    },
  },
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );

      submission.votes++;
    },
  },
});

const vm = app.mount("#app");
