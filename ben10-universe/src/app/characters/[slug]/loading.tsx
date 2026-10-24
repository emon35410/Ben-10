import React from 'react';
import OmnitrixLoader from '@/components/OmnitrixLoader';

export default function CharacterLoading() {
  return (
    <OmnitrixLoader
      fullScreen={true}
      message="Synchronizing Codon Stream Alien DNA Archive..."
      interactive={true}
    />
  );
}
