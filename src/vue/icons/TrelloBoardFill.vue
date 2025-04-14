<template>
  <svg  :width="computedSize" :height="computedSize"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path :fill="computedColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9.5 6h-2a1.5 1.5 0 0 0-1.493 1.356L6 7.5v8a1.5 1.5 0 0 0 1.356 1.493L7.5 17h2a1.5 1.5 0 0 0 1.493-1.356L11 15.5v-8a1.5 1.5 0 0 0-1.356-1.493zm7 0h-2A1.5 1.5 0 0 0 13 7.5v3a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 16.5 6"/></g></svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

export default defineComponent({
  name: 'TrelloBoardFill',
  props: {
    size: {
      type: [Number, String],
      default: DEFAULT_ICON_SIZE,
    },
    color: {
      type: String,
      default: DEFAULT_ICON_COLOR,
    },
  },
  setup(props) {
    const computedSize = computed(() => props.size);
    const computedColor = computed(() => props.color);

    return {
      computedSize,
      computedColor,
    };
  },
});
</script>
