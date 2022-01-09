import React from 'react';
import { Image } from 'react-bootstrap';

const RecommendationListItem = ({
  image,
  name,
  description,
  recommendatedItem,
  address,
  onHover,
}) => {
  return (
    <div
      className="recommendation-list-item"
      id={name}
      onMouseOver={() => onHover(name)}
    >
      <Image rounded className="list-group-item-image" src={image} />
      <div className="list-group-item-text">
        <h4>{name}</h4>
        <p className="description">{description}</p>
        <p className="recommended-item">Suggested Item: {recommendatedItem}</p>
        <hr
          style={{
            borderTop: '1px solid rgb(187, 187, 187)',
            width: '10%',
          }}
        />
        <p className="address">
          Address:{' '}
          <a
            target="_blank"
            href={'https://www.google.com/search?q=' + address}
          >
            {address}
          </a>
        </p>
      </div>
      <hr className="solid" />
    </div>
  );
};
export default RecommendationListItem;
