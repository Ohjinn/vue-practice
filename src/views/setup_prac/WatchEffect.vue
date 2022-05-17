<template>
  <div class="home">
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>
<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "WatchEffect",
  setup() {
    const search = ref("");
    const names = ref(["qq", "aa", "zz", "dd"]);

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value));
    });

    watch(search, () => {
      console.log("search 값이 바뀔 때 마다 실행되는 함수");
    });

    watchEffect(() => {
      console.log(
        "search value가 정의됐기에 search가 바뀔때마다 실행된다",
        search.value
      );
    });

    return { names, search, matchingNames };
  }
};
</script>