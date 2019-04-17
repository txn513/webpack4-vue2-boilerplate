<template>
  <div>
    <!-- <h1 id="test">Hello <span>World</span></h1> -->
		<router-link to="/">Home</router-link>
		<router-link to="/test">About</router-link>
		<router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
#test {
	color: blue;
	span {
		color: gray;
	}
}
</style>