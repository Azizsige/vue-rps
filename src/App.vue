<template lang="">
  <div class="wrapper text-center h-screen flex flex-col justify-evenly">
    <h1 class="text-5xl text-primary">Rock Papper Scissors</h1>
    <Enemy />
    <h2 class="text-7xl text-primary mt-10">Vs</h2>
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
      isClick: false,
    };
  },
  methods: {
    flip(name) {
      // if (name == "rock") {
      //   console.log("yess");
      // } else {
      //   alert("noo");
      // }
    },
  },
};
</script>
<style></style>
