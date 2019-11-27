import {
  MdChevronLeft,
  MdChevronRight,
  MdViewList,
  MdViewModule,
} from 'react-icons/md';
import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import api from '~/service/api';
import { Container, Time, ModeDashView, ModeListView } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

if (localStorage.getItem('@gobarber/modeview', '')) {
  localStorage.setItem('@gobarber/modeview', 'dashboard');
}

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());
  const [modeview, setModeview] = useState('dashboard');

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedules', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(
            a =>
              format(parseISO(a.date), "yyyy-MM-dd'T'HH':'mm") ===
              format(compareDate, "yyyy-MM-dd'T'HH':'mm")
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  useEffect(() => {
    setModeview(modeview);
  }, [modeview]);

  return (
    <Container view={modeview}>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <div>
        <ModeListView
          type="button"
          view={modeview}
          onClick={() => setModeview('list')}
        >
          <MdViewList size={24} color="#FFF" />
        </ModeListView>

        <ModeDashView
          type="button"
          view={modeview}
          onClick={() => setModeview('dashboard')}
        >
          <MdViewModule size={24} color="#FFF" />
        </ModeDashView>
      </div>

      <ul>
        {schedule.map(time => (
          <Time
            key={time.time}
            past={time.past}
            available={!time.appointment}
            view={modeview}
          >
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Disponível'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
