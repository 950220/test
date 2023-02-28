<template>
  <div class="date">
    <div>日期：</div>
    <div class="date-calendar">
      <van-calendar></van-calendar>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.date {
  display: flex;
  align-items: center;
}
.date-calendar {
  flex: 1;
}
</style>