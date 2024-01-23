//import React
import React from "react";

//import Event component
import Event from './Event'

// Define calendar
const Calendar = () => {

    return (
      <><div className="Calendar"></div>
      <table>
      <thead>
        <tr>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td className="time">8 am</td>
        <Event event='Starbucks ☕️' color ='green'/>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <Event event='Yolk 🍳' color ='green'/>
        <td></td>
      </tr>
      <tr>
        <td className="time">9 am</td>
        <td></td>
        <td></td>
        <td></td>
        <Event event='Subway 🚊' color ='pink'/>
        <td></td>
        <td></td>
        <Event event='The Bean 🫘' color ='blue'/>
      </tr>
      <tr>
        <td className="time">10 am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">11 am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">12 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">1 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">2 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">3 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">4 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">5 pm</td>
        <Event event='Fancy Dinner 🎩' color ='green'/>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
      </table></>
    )
  }
  
export default Calendar;
  