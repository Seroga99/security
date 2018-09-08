import React, { Component } from 'react';
import './GoogleMaps.css';
 
class GoogleMaps extends Component {

  render() {
      const src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.3059876658053!2d30.420345415854097!3d50.3421979794605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c82ee5b6491b%3A0x77e67712f9a8f875!2zMlYsINGD0LsuINCc0LDRiNC40L3QvtGB0YLRgNC-0LjRgtC10LvQtdC5LCAy0JIsINCn0LDQsdCw0L3Riywg0JrQuNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMDgxNjM!5e0!3m2!1sru!2sua!4v1536239732157';
    return (
      // Important! Always set the container height explicitly
      <div >
        <iframe src={src} frameBorder="0"  className='aliance-control'></iframe>
      </div>
    );
  }
}
 
export default GoogleMaps;