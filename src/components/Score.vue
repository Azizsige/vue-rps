<template>
  <div class="wrapper absolute top-5 left-5">
    <h1 class="text-3xl xl:text-2xl text-primary">Score</h1>
    <div class="wrapper-score flex w-[8rem] justify-between mt-3">
      <div class="score__player">
        <h2>Player</h2>
        <p>{{ playerScore }}</p>
      </div>
      <div class="score__player">
        <h2>Computer</h2>
        <p>{{ computerScore }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    playerScore: {
      type: Number,
      required: true,
    },
    computerScore: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
