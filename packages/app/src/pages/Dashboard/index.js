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
  isToday,
  isTomorrow,
  isYesterday,
  getISODay,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import Tooltip from '@material-ui/core/Tooltip';

import api from '~/service/api';
import { Container, Time, ModeDashView, ModeListView, Scroll } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());
  const [modeview, setModeview] = useState('list');

  // Abstrair
  let nameDay = '';

  switch (getISODay(date)) {
    case 1:
      nameDay = 'Segunda-feira';
      break;
    case 2:
      nameDay = 'Terça-feira';
      break;
    case 3:
      nameDay = 'Quarta-feira';
      break;
    case 4:
      nameDay = 'Quinta-feira';
      break;
    case 5:
      nameDay = 'Sexta-feira';
      break;
    case 6:
      nameDay = 'Sábado';
      break;
    case 7:
      nameDay = 'Domingo';
      break;
    default:
  }

  if (isToday(date)) {
    nameDay = 'Hoje';
  } else if (isTomorrow(date)) {
    nameDay = 'Amanhã';
  } else if (isYesterday(date)) {
    nameDay = 'Ontem';
  }

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
        <strong>{nameDay}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <div>
        <span>{dateFormatted}</span>
        <div>
          <Tooltip title="Lista" placement="left-start">
            <ModeListView
              type="button"
              view={modeview}
              onClick={() => setModeview('list')}
            >
              <MdViewList size={24} color="#FFF" />
            </ModeListView>
          </Tooltip>

          <Tooltip title="Dashboard" placement="right-start">
            <ModeDashView
              type="button"
              view={modeview}
              onClick={() => setModeview('dashboard')}
            >
              <MdViewModule size={24} color="#FFF" />
            </ModeDashView>
          </Tooltip>
        </div>
      </div>

      <Scroll>
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
      </Scroll>
    </Container>
  );
}
