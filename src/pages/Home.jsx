import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import EventCard from "../components/eventCard";
import moment from "moment";

const Home = () => {

    const [value, setValue] = useState();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`/fakeData.json`)
          .then((res) => res.json())
          .then((data) => {
            if (value) {
                console.log(value);
                const dateWithTime = moment(value);
                const date1 = dateWithTime.startOf('day');
                const date = date1.format('YYYY-MM-DD');
                console.log(date);
                const filteredEvents = data.filter(item => item.date === date)
                setEvents(filteredEvents)
            }
            else {
                setEvents(data)
            // console.log(data);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }, [value]);

    //   const onChange = () => {
    //     setValue(value);
    //     if (value) {
    //         console.log(value);
    //     }
    //   }

  return (
    <div>
      <div className="flex gap-8 justify-between">
        {/* left div */}
        <div className="text-center w-1/3">
          <h3 className=" text-blue-600 font-bold">Event</h3>
          <div className="flex-row gap-4">
            {events.map(event => <EventCard key={event.id} event={event}></EventCard>)}
          </div>
        </div>
        {/* right div */}

        <div>
            <h1>Calendar</h1>
            {/* <Calendar
                onChange={setValue}
                value={value}
            /> */}
            <Calendar
                onChange={setValue}
                value={value}
            />
            
        </div>
      </div>
    </div>
  );
};

export default Home;
