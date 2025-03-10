import DashboardPage from './dashboard/page';  // Use relative path
import { mushrooms } from '../data/development';

export default function Home() {
  const mush = mushrooms.mushroom; // Get the 'mushroom' array from the data object
  return <DashboardPage mushroomData={mush} />;
}