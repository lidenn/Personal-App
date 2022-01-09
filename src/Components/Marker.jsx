import { useEffect, useState, useRef } from 'react';
import _ from 'lodash';

const Marker = ({ title, isShown, isClosed, onHover, ...options }) => {
  const [marker, setMarker] = useState();
  const contentRef = useRef(null);

  const onMouseOver = () => {
    onHover();
  };

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      const infowindow = new window.google.maps.InfoWindow({
        content: title,
      });
      marker.setOptions({ ...options });

      marker.addListener('mouseover', () => {
        infowindow.open({
          anchor: marker,
          shouldFocus: false,
        });
        onMouseOver();
      });
      marker.addListener('mouseout', () => {
        infowindow.close();
      });
    }
  }, [marker, options]);
  return null;
};

export default Marker;
