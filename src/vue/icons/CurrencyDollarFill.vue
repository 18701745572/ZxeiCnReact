<template>
  <svg  :width="computedSize" :height="computedSize"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path :fill="computedColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m11-5a1 1 0 1 0-2 0v1h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 0 1 0 1H9a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1h1a2.5 2.5 0 0 0 0-5h-4a.5.5 0 0 1 0-1h5a1 1 0 1 0 0-2h-2z"/></g></svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

export default defineComponent({
  name: 'CurrencyDollarFill',
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
