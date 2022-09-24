import { User } from './Profile/Profile';
import user from '../user.json';


export const App = () => {
  return (
    <div>
      <User userData={user} />
    </div>
  );
};
console.log(user);