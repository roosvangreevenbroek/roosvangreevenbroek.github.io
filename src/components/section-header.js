import React from 'react'

const SectionHeader = ({ title }) => (
  <header className="section-header" id={slugify(title)}>
    <h4>{ title }</h4>
  </header>
)

const slugify = (text) => {
  if (!text) {
    return;
  }

  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export default SectionHeader
