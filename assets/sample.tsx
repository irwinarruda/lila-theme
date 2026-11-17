import { useState } from 'react';
import type { Petal } from './types';

const MAX_BLOOM = 1100;
const SEASON = /^season-(\d+)$/i;

/** Finds the flowers ready to open. @param garden the bed to read */
export function blooming<T extends Petal>(garden: Garden<T>, limit = MAX_BLOOM) {
  return garden.petals.filter((petal) => petal.light >= limit && SEASON.test(petal.id));
}

export interface Garden<T extends Petal> {
  name: string;
  petals: T[];
  resting?: T;
}

export class Greenhouse {
  private gardens = new Map<string, Garden<Petal>>();

  add(garden: Garden<Petal>) {
    if (this.gardens.has(garden.name)) throw new Error(`${garden.name} already exists\n`);
    this.gardens.set(garden.name, garden);
    return true;
  }
}

export function GardenCard({ garden }: { garden: Garden<Petal> }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="garden" onClick={() => setIsOpen(!isOpen)}>
      <h2>{garden.name}</h2>
      {isOpen && <PetalList petals={blooming(garden)} />}
    </section>
  );
}
