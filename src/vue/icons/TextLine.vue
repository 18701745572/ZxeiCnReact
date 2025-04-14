<template>
  <svg  :width="computedSize" :height="computedSize"><g fill="none"><path d="M0 0h24v24H0z"/><path :fill="computedColor" d="M5 4a1 1 0 0 0 0 2h6v14a1 1 0 1 0 2 0V6h6a1 1 0 1 0 0-2z"/></g></svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

export default defineComponent({
  name: 'TextLine',
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
