<template>
  <button
    :class="['icon-button', `icon-button--${type}`, `icon-button--${size}`, { 'icon-button--disabled': disabled }]"
    :disabled="disabled"
    @click="!disabled && onClick"
  >
    <component :is="icon" :size="iconSize" color="currentColor" />
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IconComponent } from '../../src/vue/types';

export default defineComponent({
  name: 'IconButton',
  props: {
    icon: {
      type: Object as () => IconComponent,
      required: true
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String as () => 'primary' | 'secondary' | 'danger',
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary', 'danger'].includes(value)
    },
    size: {
      type: String as () => 'small' | 'medium' | 'large',
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  setup(props) {
    const iconSize = computed(() => {
      switch (props.size) {
        case 'small': return 16;
        case 'medium': return 20;
        case 'large': return 24;
        default: return 20;
      }
    });

    return {
      iconSize
    };
  }
});
</script>

<style scoped>
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid;
}

.icon-button--small {
  padding: 6px 12px;
  font-size: 12px;
}

.icon-button--medium {
  padding: 8px 16px;
  font-size: 14px;
}

.icon-button--large {
  padding: 10px 20px;
  font-size: 16px;
}

.icon-button--primary {
  background-color: #2563eb;
  color: white;
  border-color: #2563eb;
}

.icon-button--primary:hover:not(:disabled) {
  background-color: #1d4ed8;
  border-color: #1d4ed8;
}

.icon-button--secondary {
  background-color: white;
  color: #374151;
  border-color: #d1d5db;
}

.icon-button--secondary:hover:not(:disabled) {
  background-color: #f9fafb;
  border-color: #9ca3af;
}

.icon-button--danger {
  background-color: #ef4444;
  color: white;
  border-color: #ef4444;
}

.icon-button--danger:hover:not(:disabled) {
  background-color: #dc2626;
  border-color: #dc2626;
}

.icon-button--disabled {
  background-color: #f0f0f0;
  color: #aaa;
  border-color: #ddd;
  cursor: not-allowed;
}
</style> 