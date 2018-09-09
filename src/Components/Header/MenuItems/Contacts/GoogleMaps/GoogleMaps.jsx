import React, { Component } from 'react';
import './GoogleMaps.css';
import Mailto from 'react-protected-mailto';
 
class GoogleMaps extends Component {

  render() {
      const src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.3059876658053!2d30.420345415854097!3d50.3421979794605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c82ee5b6491b%3A0x77e67712f9a8f875!2zMlYsINGD0LsuINCc0LDRiNC40L3QvtGB0YLRgNC-0LjRgtC10LvQtdC5LCAy0JIsINCn0LDQsdCw0L3Riywg0JrQuNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMDgxNjM!5e0!3m2!1sru!2sua!4v1536239732157';
    return (
      // Important! Always set the container height explicitly
      <div className='wrap-map'>
        <iframe src={src} frameBorder="0"  className='aliance-control'></iframe>
      <p className='name-company'>Назва компанії</p>
      <p className='control font-weight__bold'>Альянс Контроль</p>
      <p className='corporate-office'>Корпоративний офіс</p>
      <p className='time font-weight__bold'>ГРАФІК РОБОТИ</p>
      <table className='table'>
        <tr>ПОНЕДІЛОК
          <td>13:30-22:30</td>
        </tr>
        <tr>ВІВТОРОК
          <td>13:30-21:00</td>
        </tr>
        <tr>СЕРЕДА
          <td>13:30-22:30</td>
        </tr>
        <tr>ЧЕТВЕР
          <td>13:30-21:00</td>
        </tr>
        <tr>П”ЯТНИЦА
          <td>13:30-22:30</td>
        </tr>
        <tr>СУБОТА
          <td>12:30-19:00</td>
        </tr>
        <tr>НЕДІЛЯ
          <td>ВИХІДНИЙ</td>
        </tr>
        <tr>
          <td className='time'> Телефон: <Mailto tel='205-454-1234' /></td>
        </tr>
        <tr>
          <td className='time'> Email: <Mailto email='alyanskontrol@gmail.com'
               headers={{subject:'Question from the website'},
               {cc:'alyanskontrol@gmail.com'}}/>
          </td>
        </tr>
      </table>
      <p className='corporate-office'>Філія</p>
      <table className='table'>
        <tr>
          <td className='time'> Телефон:   <Mailto className='color__red' tel='+38-095-007-54-58' /></td>
        </tr>
        <tr>
        <td className='time right color__red'><Mailto tel='+38-044-251-00-08' /></td>
        </tr>
        <tr>
          <td className='time'> Email: <Mailto className='color__red' email='alyanskontrol@gmail.com'
               headers={{subject:'Question from the website'},
               {cc:'alyanskontrol@gmail.com'}}/>
          </td>
        </tr>
      </table>
      </div>
    );
  }
}
 
export default GoogleMaps;