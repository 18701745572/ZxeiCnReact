import React from 'react';
import { IconComponent } from '../../src/react/types';

interface IconButtonProps {
  icon: IconComponent;
  text?: string;
  onClick?: () => void;
  type?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  text,
  onClick,
  type = 'primary',
  size = 'medium',
  disabled = false,
}) => {
  // 确定图标尺寸
  const getIconSize = () => {
    switch (size) {
      case 'small': return 16;
      case 'medium': return 20;
      case 'large': return 24;
      default: return 20;
    }
  };

  // 确定按钮颜色
  const getColors = () => {
    if (disabled) {
      return {
        bg: '#f0f0f0',
        color: '#aaa',
        border: '#ddd',
        hover: {}
      };
    }

    switch (type) {
      case 'primary':
        return {
          bg: '#2563eb',
          color: 'white',
          border: '#2563eb',
          hover: { backgroundColor: '#1d4ed8', borderColor: '#1d4ed8' }
        };
      case 'secondary':
        return {
          bg: 'white',
          color: '#374151',
          border: '#d1d5db',
          hover: { backgroundColor: '#f9fafb', borderColor: '#9ca3af' }
        };
      case 'danger':
        return {
          bg: '#ef4444',
          color: 'white',
          border: '#ef4444',
          hover: { backgroundColor: '#dc2626', borderColor: '#dc2626' }
        };
      default:
        return {
          bg: '#2563eb',
          color: 'white',
          border: '#2563eb',
          hover: { backgroundColor: '#1d4ed8', borderColor: '#1d4ed8' }
        };
    }
  };

  const colors = getColors();
  const iconSize = getIconSize();

  // 按钮大小样式
  const buttonSizeStyles = {
    small: { padding: '6px 12px', fontSize: '12px' },
    medium: { padding: '8px 16px', fontSize: '14px' },
    large: { padding: '10px 20px', fontSize: '16px' },
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    backgroundColor: colors.bg,
    color: colors.color,
    border: `1px solid ${colors.border}`,
    borderRadius: '0.375rem',
    fontWeight: 500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    ...buttonSizeStyles[size],
  };

  return (
    <button
      style={buttonStyle}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseOver={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, colors.hover);
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = colors.bg;
        e.currentTarget.style.borderColor = colors.border;
      }}
    >
      <Icon size={iconSize} color="currentColor" />
      {text && <span>{text}</span>}
    </button>
  );
};

export default IconButton; 