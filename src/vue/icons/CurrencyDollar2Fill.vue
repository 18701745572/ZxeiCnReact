<template>
  <svg  :width="computedSize" :height="computedSize"><g fill="none"><path d="M0 0h24v24H0z"/><path :fill="computedColor" d="M13.5 4a1.5 1.5 0 0 0-3 0v.5h-1a4.5 4.5 0 0 0 0 9h5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 0 0 3h3.5v.5a1.5 1.5 0 0 0 3 0v-.5h1a4.5 4.5 0 1 0 0-9h-5a1.5 1.5 0 1 1 0-3H17a1.5 1.5 0 0 0 0-3h-3.5z"/></g></svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

export default defineComponent({
  name: 'CurrencyDollar2Fill',
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
