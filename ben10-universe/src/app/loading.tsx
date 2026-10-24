import React from 'react';
import OmnitrixLoader from '@/components/OmnitrixLoader';

export default function Loading() {
  return (
    <OmnitrixLoader
      fullScreen={true}
      message="Streaming extraterrestrial Codon data from Galvan Prime..."
      interactive={true}
    />
  );
}
