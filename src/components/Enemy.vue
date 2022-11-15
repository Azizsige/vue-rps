<template>
  <div class="flip-card mx-auto w-[200px] h-[200px] hover:cursor-pointer">
    <div class="flip-card-inner" :class="isClick ? 'flip' : ''">
      <div
        class="flip-card-front py-5 bg-white flex justify-center items-center"
      >
        <h2 class="text-5xl">?</h2>
      </div>
      <div
        class="flip-card-back py-5"
        :style="{
          backgroundImage: `url(./src/assets/img/${name}.jpg)`,
        }"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Enemy",
  props: {
    name: {
      type: String,
      required: true,
    },
    isClick: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
<style scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card-inner.flip {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-back,
.flip-card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 50%;
}

/* Style the front side (fallback if image is missing) */
.flip-card-back {
  /* background-image: url("./../assets/img/papper.jpg"); */
  background-size: cover;
  background-position: 40% 50%;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

.flip-card-back h1 {
  margin-top: 2.5em;
}
</style>
