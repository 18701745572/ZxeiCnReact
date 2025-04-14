import React, { useState } from 'react';
import {
  AddCircleFill,
  AddCircleLine,
  AlarmFill,
  AlarmLine,
  CheckCircleFill,
  CheckCircleLine
} from '../src/react';
import { IconStyle } from '../src/common/constants';

const IconRow = ({ name, FillComponent, LineComponent }) => {
  const [size, setSize] = useState(24);
  const [color, setColor] = useState('#09244B');

  const handleSizeChange = (e) => {
    setSize(Number(e.target.value));
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', padding: '10px', border: '1px solid #eee' }}>
      <div style={{ width: '150px' }}>{name}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100px' }}>
        <FillComponent size={size} color={color} />
        <LineComponent size={size} color={color} />
      </div>
      <div style={{ marginLeft: '20px' }}>
        <label>
          尺寸:
          <input
            type="range"
            min="16"
            max="48"
            value={size}
            onChange={handleSizeChange}
            style={{ marginLeft: '10px' }}
          />
          {size}px
        </label>
      </div>
      <div style={{ marginLeft: '20px' }}>
        <label>
          颜色:
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
    </div>
  );
};

const ReactExample = () => {
  return (
    <div>
      <h1>ZxeiCnReact Icons - React 示例</h1>
      
      <IconRow 
        name="AddCircle" 
        FillComponent={AddCircleFill} 
        LineComponent={AddCircleLine} 
      />
      
      <IconRow 
        name="Alarm" 
        FillComponent={AlarmFill} 
        LineComponent={AlarmLine} 
      />
      
      <IconRow 
        name="CheckCircle" 
        FillComponent={CheckCircleFill} 
        LineComponent={CheckCircleLine} 
      />
    </div>
  );
};

export default ReactExample; 