import React from 'react'
import SectionTitle from './SectionTitle'

const GridSection = () => {
  return (
    <div className="flex gap-10">
      <SectionTitle linkto="/" section="Home" />
      <SectionTitle linkto="/newPost" section="new post" />
      <SectionTitle linkto="/postPage" section="post" />
    </div>
  );
}

export default GridSection
