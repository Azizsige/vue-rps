<template lang="">
  <div class="wrapper text-center h-screen flex flex-col justify-evenly">
    <h1 class="text-3xl xl:text-5xl text-primary">Rock Papper Scissors</h1>
    <Enemy :isClick="isClick" :name="enemyChoose" />
    <h2 v-if="results == ' '" class="text-7xl text-primary mt-10">Vs</h2>
    <h2 v-else class="text-4xl xl:text-7xl text-primary mt-10">
      {{ results }}
    </h2>
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
export default {
  components: {
    Enemy,
    Player,
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
      results: "",
    };
  },
  methods: {
    flip(name) {
      this.playerChoose = name;
      alert(this.playerChoose);
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
        console.log(this.results);
      } else if (
        (player == "scissor" && computer == "rock") ||
        (player == "rock" && computer == "papper") ||
        (player == "papper" && computer == "scissor")
      ) {
        this.results = "You Lose!";
        console.log(this.results);
      } else if (player == computer) {
        this.results = "Its Draw!";
        console.log(this.results);
      }
    },
  },
  mounted() {
    this.random();
    // this.rule(this.playerChoose, this.enemyChoose);
  },
};
</script>
<style></style>
