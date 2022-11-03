import React, {useState} from 'react'
import {ScheduleComponent, ViewsDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize,  DragAndDrop} from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import {Header} from '../components';

const PropertPane = (props) => <div className='mt-5'>{props.children}</div>

const Calendar = () => {

  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dateBind();
  }
  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  }

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl '>
      <Header category='App' title="Calendar"/>
      <ScheduleComponent height="650px">
        <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize, DragAndDrop]}/>
      </ScheduleComponent>
      <PropertPane>
        <table style={{width: '100%', background: 'white'}}>
          <tbody>
            <tr style={{height: '50px'}}>
              <td style={{width: '100%'}}>
                <DatePickerComponent value={new Date()} showClearButton={false} placeholder="Current Date" floatLabelType='Always' change={change}/>
              </td>
            </tr>
          </tbody>
        </table>
      </PropertPane>
    </div>
  )
}

export default Calendar