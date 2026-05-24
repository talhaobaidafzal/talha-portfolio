import { useEffect, useState } from 'react';

const ROLES = [
  'Full Stack Developer',
  'React Developer',
  'Frontend Engineer',
  'CS Teacher',
  'Problem Solver',
];

export default function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="gradient-text font-bold">{displayed}</span>
      <span
        className="ml-0.5 inline-block w-0.5 h-7 bg-[#00F5FF] rounded-full"
        style={{ animation: 'blink 1s step-end infinite' }}
      />
    </span>
  );
}
