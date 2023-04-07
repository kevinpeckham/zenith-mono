<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
</script>

<template lang="pug">
section#map.px-0.pb-0.w-full.rounded-sm.my-8(class="px-20 bg-kellyGreen/20")
  .flex.items-center.justify-center.pt-8.pb-24.pointer-events-none
    .relative.w-full
      picture
        source(
          srcset="https://media.graphassets.com/12Tx2rUoSJOdUqsPgc5U"
          type="image/avif"
          )
        source(
          srcset="https://media.graphassets.com/qMbl9VE1Rzh5JAGena6y"
          type="image/webp"
          )
        img.w-full.h-auto.select-none(
          src="https://media.graphassets.com/Wo22bOnSQpenF2KhSGVy"
          width="1200"
          loading="lazy"
          height="757"
          data-mimetype="image/png"
          draggable="false"
          alt="Map of North America"
          )
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 14%; left: 6%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:14%; left: 6%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/portland-terminal"
            class="hover:underline"
            ) Portland Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 32%; left: 85%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:32%; left: 85%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/williamsport-terminal"
            class="hover:underline"
            ) Williamsport Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 32.75%; left: 64.5%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:32.75%; left: 64.5%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/madison-terminal"
            class="hover:underline"
            ) Madison Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 33%; left: 87%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:33%; left: 87%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/dupont-terminal"
            class="hover:underline"
            ) Dupont Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 34%; left: 91%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:34%; left: 91%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/brooklyn-terminal"
            class="hover:underline"
            ) Brooklyn Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 35%; left: 73%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:35%; left: 73%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/toledo-terminal"
            class="hover:underline"
            ) Toledo Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 35.5%; left: 76.5%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
          .absolute.w-5.h-5.text-center.flex.items-center.justify-center.pointer-events-none.bg-neutral-200.rounded-full.transition-opacity.shadow(style="top:0.375rem; left:-0.875rem;")
            .number.text-xs(class="text-[#233343]") +2
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:35.5%; left: 76.5%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub(
            href="/terminals/aurora-terminal"
            class="hover:underline"
            ) Aurora Terminal
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub(
            href="/terminals/cleveland-terminal"
            class="hover:underline"
            ) Cleveland Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 36.25%; left: 86%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:36.25%; left: 86%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/mechanicsburg-terminal"
            class="hover:underline"
            ) Mechanicsburg Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 36.75%; left: 65.5%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
          .absolute.w-5.h-5.text-center.flex.items-center.justify-center.pointer-events-none.bg-neutral-200.rounded-full.transition-opacity.shadow(style="top:0.375rem; left:-0.875rem;")
            .number.text-xs(class="text-[#233343]") +2
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:36.75%; left: 65.5%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub(
            href="/terminals/jbbr-pipeline"
            class="hover:underline"
            ) JBBR Pipeline
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub(
            href="/terminals/joliet-terminal"
            class="hover:underline"
            ) Joliet Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 37%; left: 82.25%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:37%; left: 82.25%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/altoona-terminal"
            class="hover:underline"
            ) Altoona Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 39%; left: 81%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:39%; left: 81%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/belle-vernon-terminal"
            class="hover:underline"
            ) Belle Vernon Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 40%; left: 37%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:40%; left: 37%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/pawnee-terminal"
            class="hover:underline"
            ) Pawnee Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 41.25%; left: 87%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:41.25%; left: 87%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/baltimore-terminal"
            class="hover:underline"
            ) Baltimore Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 41.5%; left: 80.5%; transform: translate(-8.15px, -20px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(-45deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:41.5%; left: 80.5%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/star-city-terminal"
            class="hover:underline"
            ) Star City Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 50%; left: 89%; transform: translate(-8.15px, 3.7px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(135deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:50%; left: 89%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/norfolk-terminal"
            class="hover:underline"
            ) Norfolk Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 56%; left: 85%; transform: translate(-8.15px, 3.7px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(135deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:56%; left: 85%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/selma-terminal"
            class="hover:underline"
            ) Selma Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 59.2%; left: 7.4%; transform: translate(-8.15px, 3.7px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(135deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
          .absolute.w-5.h-5.text-center.flex.items-center.justify-center.pointer-events-none.bg-neutral-200.rounded-full.transition-opacity.shadow(style="top:-0.75rem; left:0.625rem;")
            .number.text-xs(class="text-[#233343]") +3
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:59.2%; left: 7.4%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub(
            href="/terminals/dominguez-hills-terminal"
            class="hover:underline"
            ) Dominguez Hills Terminal
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub(
            href="/terminals/alamitos-terminal"
            class="hover:underline"
            ) Alamitos Terminal
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub(
            href="/terminals/long-beach-terminal"
            class="hover:underline"
            ) Long Beach Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 60%; left: 79%; transform: translate(-8.15px, 3.7px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(135deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:60%; left: 79%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/spartanburg-terminal"
            class="hover:underline"
            ) Spartanburg Terminal
      span
        .absolute.w-4.h-4.text-body.cursor-pointer(
          active=""
          data-z="33000"
          style="top: 79.5%; left: 66.75%; transform: translate(-8.15px, 3.7px)"
          )
          .pin.relative.pointer-events-none.shadow.pointer-events-auto.border.border-white.rounded-t-full.rounded-br-full.w-full.h-full.transition-colors(
            style="transform:rotate(135deg);"
            class="bg-kellyGreen hover:bg-primary"
            )
        dialog.pin-label.bg-white.pointer-events.none.opacity-0.absolute.py-1.px-2.transition-opacity.m-0.z-50(
          style="top:79.5%; left: 66.75%; transform:translate(0px, 0px);"
          class="open:pointer-events-auto open:opacity-100 open:shadow"
          )
          a.text-primary-dark.select-none.outline-none.block.underline-offset-2.text-sub.leading-snug.truncate(
            href="/terminals/gulf-lng"
            class="hover:underline"
            ) Gulf LNG
</template>
