import React, { Component } from 'react';
import WeekCalendar from './calendar/WeekCalendar';
import ToolsList from './toolsList/ToolsList';

class MainPage extends Component {
  render() {
    return (
      <div>
        <ToolsList />
        <WeekCalendar />
      </div>
    );
  }
}

export default MainPage;
