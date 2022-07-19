import './SectionCards.scss';
import React from 'react';
import Card from '../Card/Card';

export default function SectionCards() {
  return (
    <section className="section-cards">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}