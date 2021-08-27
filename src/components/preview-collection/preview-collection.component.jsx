import React from 'react';
import { CollectionItem } from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

export function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className='preview'>
        {items
          .filter((_, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
        ))}
      </div>
    </div>
  );
}
