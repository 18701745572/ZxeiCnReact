<template>
  <svg  :width="computedSize" :height="computedSize"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path :fill="computedColor" d="M19 3a2 2 0 0 1 1.995 1.85L21 5v14a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm0 7H5v9h14zm-3 5a1 1 0 0 1 .117 1.993L16 17H8a1 1 0 0 1-.117-1.993L8 15zm0-3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm3-7H5v3h14z"/></g></svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

export default defineComponent({
  name: 'Layout5Line',
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
