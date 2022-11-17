<template>
  <div
    class="wrapper absolute top-0 py-1 xl:py-0 xl:top-5 xl:left-5 xl:right-auto left-0 right-0 bg-white xl:bg-transparent"
  >
    <h1 class="text-base xl:text-2xl text-primary">Score</h1>
    <div
      class="wrapper-score flex w-full xl:w-[10rem] justify-center xl:justify-between mt-1 xl:mt-3"
    >
      <div class="score__player text-sm xl:text-xl mr-5 xl:mr-0">
        <h2>Player</h2>
        <p>{{ playerScore }}</p>
      </div>
      <div class="score__player text-sm xl:text-xl">
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
