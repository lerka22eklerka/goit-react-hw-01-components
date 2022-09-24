import { User } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import user from '../user.json';
import data from '../data.json';


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <User userData={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
