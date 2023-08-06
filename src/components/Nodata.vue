<template>
  <div class="nodata-box">
    <div class="nodata">
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <circle cx="42.8184" cy="48" r="42" fill="#696969" />
          <rect x="11.8184" y="6" width="61" height="15.853" rx="4" fill="#ABABAB" />
          <rect x="16.8184" y="12" width="20" height="4" rx="2" fill="black" fill-opacity="0.5" />
          <rect x="58.3555" y="12" width="10.4629" height="4" rx="2" fill="black" fill-opacity="0.2" />
          <rect x="49.2334" y="12" width="5.88232" height="4" rx="2" fill="black" fill-opacity="0.2" />
          <mask id="mask0_3776_69597" maskUnits="userSpaceOnUse" x="0" y="6" width="85" height="84"><circle cx="42.8184" cy="48" r="42" fill="white" /></mask>
          <g mask="url(#mask0_3776_69597)">
            <rect x="12.8184" y="25.1799" width="61" height="71.8201" rx="4" fill="#F3F3F3" />
            <rect x="58.3555" y="30.9939" width="10.4629" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="58.3555" y="40.5759" width="10.4629" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="58.3555" y="50.158" width="10.4629" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="58.3555" y="59.74" width="10.4629" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="58.3555" y="69.322" width="10.4629" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="58.3555" y="78.9041" width="10.4629" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="49.4214" y="30.9939" width="5.88232" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="49.4214" y="40.5759" width="5.88232" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="49.4214" y="50.158" width="5.88232" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="49.4214" y="59.74" width="5.88232" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="49.4214" y="69.322" width="5.88232" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="49.4214" y="78.9041" width="5.88232" height="4" rx="2" fill="black" fill-opacity="0.2" />
            <rect x="17.8184" y="31.418" width="20" height="4" rx="2" fill="black" fill-opacity="0.5" />
            <rect x="17.8184" y="41" width="20" height="4" rx="2" fill="black" fill-opacity="0.5" />
            <rect x="17.8184" y="50.582" width="20" height="4" rx="2" fill="black" fill-opacity="0.5" />
            <rect x="17.8184" y="60.1641" width="20" height="4" rx="2" fill="black" fill-opacity="0.5" />
            <rect x="17.8184" y="69.7461" width="20" height="4" rx="2" fill="black" fill-opacity="0.5" />
            <rect x="17.8184" y="79.3281" width="20" height="4" rx="2" fill="black" fill-opacity="0.5" />
          </g>
        </g>
      </svg>
      <h2>{{ props.message }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  message: { type: String, required: true, default: '' }
})
</script>
