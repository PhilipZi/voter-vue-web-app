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
  methods: {},
});

app.component("SubmissionListItem", {
  props: ["submission"],
  methods: {
    upvote() {
      this.submission.votes++;
    },
  },
  template: `
  <div class="d-flex">
    <div class="d-shrink-0">
      <img src="https://via.placeholder.com/60" alt="" />
    </div>
    <div class="flex-grow-1 ms-3">
      <h5>
      {{submission.title}}
      <span
        class="float-end text-primary"
        style="cursor: pointer"
        v-on:click="upvote()"
        ><i class="fa fa-chevron-up"></i>
        <strong>{{submission.votes}}</strong></span
      >
      </h5>
    <div v-html="submission.desc"></div>
      <small class="text-muted"
      >Eingereicht von: {{submission.author}}</small>
    </div>
  </div>
    
    `,
});

const vm = app.mount("#app");
