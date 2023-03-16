
<template>
  <div>
    <Grid>
      <GridItem :image="imageUrl" text="name" />
      <GridItem :image="imageUrl" text="name" />
      <GridItem :image="imageUrl" text="name" />
      <GridItem :image="imageUrl" text="name" />
      <GridItem :image="imageUrl" text="name" />
    </Grid>
  </div>
</template>

<script>
import Grid from './components/grid'
import GridItem from './components/grid-item'

export default {
  components: {
    Grid,
    GridItem
  },
  data() {
    return {
      imageUrl: 'https://github.githubassets.com/images/mona-loading-default.gif'
    }
  }
}
</script>
