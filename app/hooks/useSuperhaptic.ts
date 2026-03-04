'use client';

import { useEffect, useState } from 'react';

interface SuperhapticInstance {
  preset: (pattern: string) => void;
  vibrate: (pattern: number | number[]) => void;
  enable: () => void;
  disable: () => void;
  isEnabled: () => boolean;
}

export function useSuperhaptic() {
  const [superhaptic, setSuperhaptic] = useState<SuperhapticInstance | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Dynamically import superhaptic to ensure it's only loaded on client
    import('superhaptic').then((module) => {
      const instance = module.default;
      setSuperhaptic(instance);
      setIsReady(true);
    }).catch((error) => {
      console.error('Failed to load superhaptic:', error);
    });
  }, []);

  const trigger = (preset: string) => {
    if (superhaptic && isReady) {
      superhaptic.preset(preset);
    }
  };

  const vibrate = (pattern: number | number[]) => {
    if (superhaptic && isReady) {
      superhaptic.vibrate(pattern);
    }
  };

  return {
    superhaptic,
    isReady,
    trigger,
    vibrate,
  };
}
