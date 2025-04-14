<template>
  <div>
    <h1>ZxeiCnReact Icons - Vue 示例</h1>
    
    <div 
      v-for="icon in icons" 
      :key="icon.name" 
      class="icon-row"
    >
      <div class="icon-name">{{ icon.name }}</div>
      <div class="icon-display">
        <component :is="icon.fill" :size="size" :color="color" />
        <component :is="icon.line" :size="size" :color="color" />
      </div>
      <div class="control-group">
        <label>
          尺寸:
          <input
            type="range"
            min="16"
            max="48"
            v-model.number="size"
            class="size-slider"
          />
          {{ size }}px
        </label>
      </div>
      <div class="control-group">
        <label>
          颜色:
          <input
            type="color"
            v-model="color"
            class="color-picker"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import {
  AddCircleFill,
  AddCircleLine,
  AlarmFill,
  AlarmLine,
  CheckCircleFill,
  CheckCircleLine
} from '../src/vue';

export default {
  components: {
    AddCircleFill,
    AddCircleLine,
    AlarmFill,
    AlarmLine,
    CheckCircleFill,
    CheckCircleLine
  },
  data() {
    return {
      size: 24,
      color: '#09244B',
      icons: [
        {
          name: 'AddCircle',
          fill: AddCircleFill,
          line: AddCircleLine
        },
        {
          name: 'Alarm',
          fill: AlarmFill,
          line: AlarmLine
        },
        {
          name: 'CheckCircle',
          fill: CheckCircleFill,
          line: CheckCircleLine
        }
      ]
    };
  }
};
</script>

<style scoped>
.icon-row {
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #eee;
}

.icon-name {
  width: 150px;
}

.icon-display {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100px;
}

.control-group {
  margin-left: 20px;
}

.size-slider,
.color-picker {
  margin-left: 10px;
}
</style> 