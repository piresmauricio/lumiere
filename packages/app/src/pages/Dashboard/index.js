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
// import Tooltip from '@material-ui/core/Tooltip';
import { Tooltip } from '@rmwc/tooltip';
import '@rmwc/tooltip/tooltip.css';

import api from '~/service/api';
import { range, weekDay, appointmentStatusColor } from '~/constants';
import { Container, ModeDashView, ModeListView, Scroll } from './styles';
import Card from '~/components/Card';
import CardDashboard from '~/components/Card/Dashboard';
import CardList from '~/components/Card/List';

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());
  const [modeview, setModeview] = useState('dashboard');

  if (isToday(date)) {
    weekDay[getISODay(date)] = 'Hoje';
  } else if (isTomorrow(date)) {
    weekDay[getISODay(date)] = 'Amanhã';
  } else if (isYesterday(date)) {
    weekDay[getISODay(date)] = 'Ontem';
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
        <strong>{weekDay[getISODay(date)]}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <div>
        <span>{dateFormatted}</span>
        <div>
          <Tooltip content="Lista" align="left" showArrow>
            <ModeListView
              type="button"
              view={modeview}
              onClick={() => setModeview('list')}
            >
              <MdViewList size={24} color="#FFF" />
            </ModeListView>
          </Tooltip>

          <Tooltip content="Dashboard" align="right" showArrow>
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
            <Card
              key={time.time}
              border="1px solid #eee"
              opacity={time.past ? 0.6 : 1}
              background={
                time.appointment &&
                appointmentStatusColor[time.appointment.status]
              }
            >
              {modeview === 'dashboard' ? (
                <CardDashboard
                  time={time}
                  status={time.appointment && time.appointment.status}
                />
              ) : (
                <CardList
                  time={time}
                  status={time.appointment && time.appointment.status}
                />
              )}
            </Card>
          ))}
        </ul>
      </Scroll>
    </Container>
  );
}
