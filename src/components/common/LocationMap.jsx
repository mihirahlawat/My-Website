import React from 'react';
import styled from 'styled-components';
import MapImg from '../../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map-card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map-card-heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map-card-link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map-card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function LocationMap() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map-card">
          <h3 className="map-card-heading">Here I am</h3>
          <PText>Ashok Vihar, Delhi, INDIA</PText>
          <a
            className="map-card-link"
            href="https://www.google.com/maps/place/Ashok+Vihar,+New+Delhi,+Delhi/@28.6919975,77.1571684,14z/data=!3m1!4b1!4m5!3m4!1s0x390d0214d7f5bea1:0x4704b7ef4b09ac43!8m2!3d28.6909791!4d77.1765239"
            target="_blank"
            rel="noreferrer"
          >
            Open Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
