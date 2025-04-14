<template>
  <svg  :width="computedSize" :height="computedSize"><g fill="none" fill-rule="nonzero"><path d="M24 24H0V0h24v24ZM.742 12.594l-.002-.012-.035-.071-.004-.02.004-.014.035-.071c.004-.01.001-.019-.005-.024l-.01-.004-.428-.017-.02.005-.013.01-.074.105-.004.014.004.012.074.104.016.012.017.004.427-.017c.01-.002.017-.009.018-.016Zm.113.264-.002-.013-.093-.185-.01-.01-.011-.003-.43.018-.012.005-.007.008-.093.201c-.004.012 0 .023.008.029l.014.004.614-.034c.012-.003.02-.01.022-.02Zm-.002-.715a.023.023 0 0 0-.006-.027l-.014-.006-.614-.034a.023.023 0 0 0-.024.017l.002.015.093.201.008.01.011.004.43.017.012-.003.01-.01.092-.184Z"/><path :fill="computedColor" d="M19.5 18a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h4.379L5.282 7.404a1.5 1.5 0 1 1 2.122-2.122L16.5 14.38V10a1.5 1.5 0 1 1 3 0v8Z"/></g></svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

export default defineComponent({
  name: 'ArrowRightDownFill',
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
