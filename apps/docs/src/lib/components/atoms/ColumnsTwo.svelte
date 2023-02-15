<!--
@component
Displays content in two columns.
* slot - "left"
* slot - "right"
-->
<template lang="pug">
.relative.px-6.grid.grid-cols-2.gap-8.z-10
  slot(name="left")
  slot(name="right")
</template>
