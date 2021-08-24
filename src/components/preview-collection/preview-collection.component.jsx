import React from 'react';
import './preview-collection.styles.scss';

export function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className='preview'>
        {items.filter((_, index) => index < 4).map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
