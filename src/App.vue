<template lang="">
  <div class="wrapper text-center h-screen flex flex-col justify-evenly">
    <Score :playerScore="playerScore" :computerScore="computerScore" />
    <h1 class="text-3xl xl:text-5xl text-primary">Rock Papper Scissors</h1>
    <Enemy :isClick="isClick" :name="enemyChoose" />
    <div v-if="results" class="container mx-auto">
      <h2 class="text-4xl xl:text-7xl text-primary mt-10">
        {{ results }}
      </h2>
      <!-- <h2 class="text-4xl xl:text-7xl text-primary mt-10">Vs</h2> -->
      <button
        @click="refresh"
        class="bg-primary text-black mt-5 px-5 py-3"
        type="button"
      >
        Play Again!
      </button>
    </div>
    <div v-else class="container mx-auto">
      <h2 class="text-4xl xl:text-7xl text-primary mt-10">Vs</h2>
    </div>
    <div class="wrapper flex justify-center">
      <div class="wrapper-container flex w-[18rem] justify-evenly">
        <Player @flip="flip('rock')" name="rock" />
        <Player @flip="flip('papper')" name="papper" />
        <Player @flip="flip('scissor')" name="scissor" />
      </div>
    </div>
  </div>
</template>
<script>
import Enemy from "./components/Enemy.vue";
import Player from "./components/Player.vue";
import Score from "./components/Score.vue";
export default {
  components: {
    Enemy,
    Player,
    Score,
  },
  data() {
    return {
      games: [
        {
          id: 1,
          name: "rock",
        },
        {
          id: 2,
          name: "papper",
        },
        {
          id: 3,
          name: "scissor",
        },
      ],
      randomChoose: ["rock", "papper", "scissor"],
      isClick: false,
      playerChoose: "",
      enemyChoose: "",
      playerScore: 0,
      computerScore: 0,
      results: "",
    };
  },
  methods: {
    flip(name) {
      this.playerChoose = name;
      this.rule(this.enemyChoose, this.playerChoose);
      this.openEnemy();
    },

    openEnemy() {
      this.isClick = !this.isClick;
    },

    random() {
      let randomData = Math.floor(Math.random() * 2);
      this.enemyChoose = this.randomChoose[randomData];
    },

    rule(computer, player) {
      if (
        (player == "rock" && computer == "scissor") ||
        (player == "papper" && computer == "rock") ||
        (player == "scissor" && computer == "papper")
      ) {
        this.results = "You Win!";
        this.playerScore = this.playerScore + 1;
        this.playerStorage();
        console.log(this.playerChoose);
      } else if (
        (player == "scissor" && computer == "rock") ||
        (player == "rock" && computer == "papper") ||
        (player == "papper" && computer == "scissor")
      ) {
        this.results = "You Lose!";
        this.computerScore = this.computerScore + 1;
        this.computerStorage();
        console.log(this.results);
      } else if (player == computer) {
        this.results = "Its Draw!";
        console.log(this.results);
      }
    },

    refresh() {
      location.reload();
    },

    playerStorage() {
      const dataPlayer = JSON.stringify(this.playerScore);
      localStorage.setItem("playerScore", dataPlayer);
    },
    computerStorage() {
      const dataComputer = JSON.stringify(this.computerScore);
      localStorage.setItem("computerScore", dataComputer);
    },
  },
  mounted() {
    this.random();
    if (
      localStorage.getItem("playerScore") &&
      localStorage.getItem("computerScore")
    ) {
      try {
        this.playerScore = JSON.parse(localStorage.getItem("playerScore"));
        this.computerScore = JSON.parse(localStorage.getItem("computerScore"));
      } catch (e) {
        localStorage.removeItem("playerScore");
        localStorage.removeItem("computerScore");
      }
    }
    // console.log(this.results);
    // console.log(this.playerScore, this.computerScore);
    // this.rule(this.playerChoose, this.enemyChoose);
  },
};
</script>
<style></style>
