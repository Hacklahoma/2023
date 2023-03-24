import React, { useEffect, useState } from 'react';
import '../styles/faq.scss';
import AnimateHeight from 'react-animate-height';
import Section from '../components/Section';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const times = [
  {
    name:     'Hacker Check-In',
    time:     new Date('2023-04-01T14:30:00Z'),
    description: (
      <>
        Check-in will all be in person due to this years event
        being in person only. Late check-in will go through dinner.
      </>
    ),
    duration: 150,
  },
  {
    name:     'Opening ceremony',
    time:     new Date('2023-04-01T16:30:00Z'),
    duration: 30,
  },
  {
    name:     'Hacking begins!',
    time:     new Date('2023-04-01T17:00:00Z'),
    duration: 5,
  },
  {
    name:        'Grouping Activity',
    time:     new Date('2023-04-01T17:15:00Z'),
    duration: 60,
  },
  {
    name:     'Lunch (In-person)',
    description: 'Chicken and Rice will be served down in the atruim! Alternatives will be provided to anyone with allergies or dietary restrictions.',
    time:     new Date('2023-04-01T18:00:00Z'),
    duration: 45,
  },
  {
    name:        'Baker Hughes Tech Talk',
    time:     new Date('2023-04-01T20:00:00Z'),
    description: 'Baker Highes will be doing a tech talk over TBD.',
    duration: 60,
  },
  {
    name:        'Hardware Hacks Workshop by Sooner Competitive Robotics',
    time:     new Date('2023-04-01T21:00:00Z'),
    duration: 60,
  },
  {
    name:        'Web App Kickstart Workshop by Industry Professionals',
    time:     new Date('2023-04-01T22:00:00Z'),
    description: 'Industry professionals will work to help people get started with using node, react, and AWS.',
    duration: 90,
  },
  {
    name:        'MLH Snyk Cybersecurity CTF Workshop',
    time:     new Date('2023-04-01T23:00:00Z'),
    duration: 60,
  },
  {
    name:        'Dinner (In-person)',
    description: 'Papa Johns will be served down in the atruim! Alternatives will be provided to anyone with allergies or dietary restrictions.',
    time:     new Date('2023-04-02T00:00:00Z'),
    duration: 60,
  },
  {
    name:        'MS Paint with Bob Ross by MLH',
    time:     new Date('2023-04-02T00:30:00Z'),
    duration: 90,
  },
  {
    name:        'Machine Learning Workshop by OU SACM',
    time:     new Date('2023-04-02T01:00:00Z'),
    duration: 60,
  },
  {
    name:        'Mario Kart Tournament with OU Esports',
    description: 'Limited to 32 entries and will be single elimination',
    time:     new Date('2023-04-02T02:00:00Z'),
    duration: 60,
  },
  {
    name:        'Blitz Chess Tournament',
    time:     new Date('2023-04-02T02:30:00Z'),
    duration: 60,
  },
  {
    name:        'Midnight Snack',
    description: 'Cookies, Milk and Chai Tea will be served in the atrium.',
    time:     new Date('2023-04-02T05:00:00Z'),
    duration: 60,
  },
  {
    name:        'Brunch (In-person)',
    description: 'Bagels, Donuts, Pastries, and Coffee will be served in the Attrium. Alternatives will be provided to anyone with allergies or dietary restrictions.',
    time:     new Date('2023-04-02T14:30:00Z'),
    duration: 60,
  },
  {
    name:        'Resume Workshop with Industry Professionals',
    time:     new Date('2023-04-02T15:00:00Z'),
    duration: 60,
  },
  {
    name:     'Hacking ends / Submissions due!',
    time:     new Date('2023-04-02T17:00:00Z'),
    duration: 5,
  },
  {
    name:     'Project Expo',
    time:     new Date('2023-04-02T17:15:00Z'),
    duration: 5,
  },
  {
    name:     'Startup Workshop',
    time:     new Date('2023-04-02T18:30:00Z'),
    duration: 5,
  },
  {
    name:     'Closing ceremony',
    time:     new Date('2023-04-02T19:30:00Z'),
    duration: 30,
  },
];

/**
 * Contains all the header needs
 */
const Schedule = () => {
  const [items, setItems] = useState({});
  const [update, setUpdate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => setUpdate(new Date()), 10000);
  }, [update]);

  /**
   * Expands Schedule item
   */
  const handleClick = (e) => {
    // Get index of time that was clicked
    const name = e.currentTarget.parentNode.getAttribute('name');
    const timeObj = times.find((val) => val.name === name);
    const index = times.indexOf(timeObj);

    // Making copy of items object
    const obj = JSON.parse(JSON.stringify(items));
    obj[index] = !items[index];
    setItems(obj);
  };

  /**
   * Formats a number to a string with two digits
   * ex: 2 will return 02
   */
  const formatTime = (time) => {
    let m = time.getMinutes();
    m = `0${m}`.slice(-2);
    let dd = 'AM';
    let h = time.getHours();
    if (h >= 12) {
      h -= 12;
      dd = 'PM';
    }
    if (h === 0) {
      h = 12;
    }
    return `${h}:${m} ${dd}`;
  };

  /**
   * Get user's timezone name (ex: CST)
   */
  function getTimezoneName() {
    const today = new Date();
    const short = today.toLocaleDateString(undefined);
    const full = today.toLocaleDateString(undefined, { timeZoneName: 'short' });

    // Trying to remove date from the string in a locale-agnostic way
    const shortIndex = full.indexOf(short);
    if (shortIndex >= 0) {
      const trimmed = full.substring(0, shortIndex)
        + full.substring(shortIndex + short.length);

      return trimmed.replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, '');
    }

    return full;
  }

  /**
   * Decides what component to output based on time
   */
  const timeLogic = () => {
    const results = [];
    let days = [];
    const now = new Date();

    // Iterate through all scheduled times
    times.forEach((val, i) => {
      let day;
      let classes = 'item';

      // Setup classes
      if (
        val.time < now
        && now.getTime() < val.duration * 60000 + val.time.getTime()
      ) {
        classes += ' ongoing';
      } else if (val.time < now) {
        classes += ' completed';
      }

      // Check if a day header has been created
      if (!days[val.time.getDay()]) {
        const obj = {};
        obj[val.time.getDay()] = weekdays[val.time.getDay()];
        day = weekdays[val.time.getDay()];
        days = { ...days, ...obj };
      }

      // Push new day header if needed
      if (day) {
        results.push(
          <h3 key={`${val.name}-header`}>
            {day}, {months[val.time.getMonth()]} {val.time.getDate()}
          </h3>,
        );
      }

      // Push schedule item that has no description
      if (!val.description) {
        results.push(
          <div key={`${val.name}-container`} className={classes}>
            <div className="text">
              <p>
                <strong>{formatTime(val.time)} ({getTimezoneName()}) </strong>
                <span>{val.name}</span>
              </p>
            </div>
          </div>,
        );
      } else {
        // Push an expandable schedule item that has a description
        results.push(
          <div
            key={val.name}
            className={`${classes}${items[i] ? ' show' : ''}`}
            name={val.name}
          >
            <button onClick={handleClick}>
              <p>
                <strong>{formatTime(val.time)} ({getTimezoneName()}) </strong>
                <span>{val.name}</span>
              </p>
              <ExpandIcon />
            </button>
            <AnimateHeight height={`${items[i] ? 'auto' : '0%'}`}>
              <div className="answer">
                <p>{val.description}</p>
              </div>
            </AnimateHeight>
          </div>,
        );
      }
    });

    return <div>{results}</div>;
  };

  return (
    <Section>
      <div id="schedule" className="schedule faq">
        <div>
          <h2>Schedule&nbsp;</h2>
        </div>
        <div className="container right">{timeLogic()}</div>
        <p className="note">
          Schedule is updated in real time in your local time zone (
          {getTimezoneName()})
        </p>
      </div>
    </Section>
  );
};

/**
 * Expandable icon
 */
const ExpandIcon = () => (
  <div className="expand-icon">
    <div className="horizontal" />
    <div className="vertical" />
  </div>
);

export default Schedule;
