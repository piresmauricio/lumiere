import React, { useState, useMemo, useEffect } from 'react';
import * as iconMd from 'react-icons/md';
import * as dateFns from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { Tooltip } from '@rmwc/tooltip';
import pt from 'date-fns/locale/pt';
import '@rmwc/tooltip/tooltip.css';

import { Container, ModeDashView, ModeListView, Scroll } from './styles';
import * as consts from '~/constants';
import api from '~/service/api';
import Card from '~/components/Card';
import CardList from '~/components/Card/List';
import CardDashboard from '~/components/Card/Dashboard';

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());
  const [modeview, setModeview] = useState('dashboard');

  if (dateFns.isToday(date)) {
    consts.weekDay[dateFns.getISODay(date)] = 'Hoje';
  } else if (dateFns.isTomorrow(date)) {
    consts.weekDay[dateFns.getISODay(date)] = 'Amanhã';
  } else if (dateFns.isYesterday(date)) {
    consts.weekDay[dateFns.getISODay(date)] = 'Ontem';
  }

  const dateFormatted = useMemo(
    () => dateFns.format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedules', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = consts.range.map(hour => {
        const checkDate = dateFns.setSeconds(
          dateFns.setMinutes(dateFns.setHours(date, hour), 0),
          0
        );
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: dateFns.isBefore(compareDate, new Date()),
          appointment: response.data.find(
            a =>
            dateFns.format(dateFns.parseISO(a.date), "yyyy-MM-dd'T'HH':'mm") ===
            dateFns.format(compareDate, "yyyy-MM-dd'T'HH':'mm")
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(dateFns.subDays(date, 1));
  }

  function handleNextDay() {
    setDate(dateFns.addDays(date, 1));
  }

  useEffect(() => {
    setModeview(modeview);
  }, [modeview]);

  return (
    <Container view={modeview}>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <iconMd.MdChevronLeft size={36} color={consts.strongColorBody} />
        </button>
        <strong>{consts.weekDay[dateFns.getISODay(date)]}</strong>
        <button type="button" onClick={handleNextDay}>
          <iconMd.MdChevronRight size={36} color={consts.strongColorBody} />
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
              <iconMd.MdViewList size={24} color={consts.strongColorBody} />
            </ModeListView>
          </Tooltip>

          <Tooltip content="Dashboard" align="right" showArrow>
            <ModeDashView
              type="button"
              view={modeview}
              onClick={() => setModeview('dashboard')}
            >
              <iconMd.MdViewModule size={24} color={consts.strongColorBody} />
            </ModeDashView>
          </Tooltip>
        </div>
      </div>

      <Scroll>
        <ul>
          {schedule.map(time => (
            <Card
              key={time.time}
              border="1px solid #FFF"
              opacity={time.past ? 0.7 : 1}
              background={
                time.appointment &&
                consts.appointmentStatusColor[time.appointment.status]
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
