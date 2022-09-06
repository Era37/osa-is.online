<template>
  <div>
    <NuxtLink :href="url" class="cursor-pointer">
      <p class="text-2xl font-bold">
        {{ emoji }}
        <span class="hover:underline hover:decoration-green-500">{{
          title
        }}</span>
      </p>
      <p class="text-lg font-medium text-gray-300">{{ description }}</p>
      <p class="text-sm text-gray-400">
        {{ relativeTime(date) }} · {{ est_time }} read
      </p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    emoji: String,
    title: String,
    description: String,
    url: String,
    date: Number,
    est_time: String,
  },
  methods: {
    relativeTime(time) {
      const { round } = Math;
      const msPerMinute = 60 * 1000;
      const msPerHour = msPerMinute * 60;
      const msPerDay = msPerHour * 24;
      const msPerMonth = msPerDay * 30;
      const msPerYear = msPerDay * 365;

      const elapsed = Date.now() - time;
      let flag = "";
      if (elapsed < msPerMinute) {
        flag = round(elapsed / 1000) + " second";
      } else if (elapsed < msPerHour) {
        flag = round(elapsed / msPerMinute) + " minute";
      } else if (elapsed < msPerDay) {
        flag = round(elapsed / msPerHour) + " hour";
      } else if (elapsed < msPerMonth) {
        flag = round(elapsed / msPerDay) + " day";
      } else if (elapsed < msPerYear) {
        flag = round(elapsed / msPerMonth) + " month";
      } else {
        flag = round(elapsed / msPerYear) + " year";
      }
      if (flag.includes("1")) {
        flag += " ago";
      } else {
        flag += "s ago";
      }
      return flag;
    },
  },
};
</script>