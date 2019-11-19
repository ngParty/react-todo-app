import React, { useEffect } from 'react';

import { useLocalStorage } from './local-storage.hook';
import { CheckBox } from './checkbox';

export const DarkModeToggle = () => {
  // const localStorage = LocalStorage('todo:dark-mode', false);
  // const [enabled, setEnabled] = useState(localStorage.getValue() || false);
  const [enabled, setEnabled] = useLocalStorage('todo:dark-mode', false);

  const handleSetEnabled = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEnabled(!enabled);
    // localStorage.setValue(!enabled);
  };

  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      const className = 'dark-mode';
      const element = window.document.body;
      if (enabled) {
        element.classList.add(className);
        return;
      }
      element.classList.remove(className);
    },
    // Only re-call effect when value changes
    [enabled]
  );

  return (
    <div>
      <CheckBox checked={enabled} onChange={handleSetEnabled}>
        {enabled ? '🌒' : '☀️'}
      </CheckBox>
    </div>
  );
};
