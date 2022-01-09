import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import { Wrapper } from '@googlemaps/react-wrapper';
import MyMapComponent from '../Components/Map';
import Marker from '../Components/Marker';
import { FoodRecs, FoodFilters } from '../Utils/RecommendationUtils';
import RecommendationListItem from './RecommendationListItem';
import _ from 'lodash';

//Functional Component
const RecommendationPage = () => {
  const [hoveredItem, setHoveredItem] = useState('');
  const [filter, setFilter] = useState('');

  const onSelectFilter = (value) => {
    let filterButton = document.getElementById('filter-' + value);

    if (filter === value) {
      setFilter('');
      filterButton.style.backgroundColor = 'white';
      filterButton.style.borderColor = 'rgb(187, 187, 187)';
    } else {
      setFilter(value);
      filterButton.style.backgroundColor = '#f7f7f7';
      filterButton.style.borderColor = 'rgb(27, 26, 26)';
    }
  };

  const onHover = (name) => {
    setHoveredItem(name);
  };

  const scroll = (name) => {
    let listItem = document.getElementById(name);
    listItem.scrollIntoView({
      behavior: 'smooth',
    });
  };

  console.log(filter);
  const filteredFoodRecs = !_.isEqual(filter, '')
    ? _.filter(FoodRecs, (rec) => {
        if (_.includes(rec.filters, filter)) {
          return rec;
        }
      })
    : FoodRecs;

  console.log(filteredFoodRecs);

  return (
    <div>
      <NavBar />
      <div className="recommendation-page">
        <div className="recommendation-filter-bar">
          <div className="filter-button-group">
            {_.map(FoodFilters, (filter) => {
              return (
                <button
                  id={'filter-' + filter}
                  className={'filter-button'}
                  onClick={() => onSelectFilter(filter)}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
        <div className="recommendation-container">
          <div className="recommendation-list-container">
            <div className="list-group" id="list-group">
              {_.map(filteredFoodRecs, (recommendation) => {
                return (
                  <div>
                    <RecommendationListItem
                      {...recommendation}
                      onHover={onHover}
                    />
                    <hr
                      className="solid"
                      style={{
                        borderTop: '1px solid rgb(187, 187, 187)',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="recommendation-map-container">
            <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
              <MyMapComponent
                zoom={11}
                center={{ lat: 45.5152, lng: -122.6784 }}
              >
                {_.map(filteredFoodRecs, (rec) => {
                  return (
                    <Marker
                      position={rec.position}
                      title={rec.name}
                      onHover={() => scroll(rec.name)}
                      isShown={_.isEqual(hoveredItem, rec.name)}
                    />
                  );
                })}
              </MyMapComponent>
            </Wrapper>
          </div>
        </div>
      </div>
      <button onClick={() => scroll('Grassa')}></button>
    </div>
  );
};

export default RecommendationPage;
