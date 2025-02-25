import Message from "../../components/Message";
import Button from "../../components/Button";
import NavBar from "../../components/NavBar";
import SearchFilter from "../../components/Search";
import Search from "../../components/Search";
import MushroomCard from "../../components/MushroomCard";
import Pill from "../../components/Pill";
import PillList from "../../components/PillList";
import FilterSettings from "../../components/FilterSettings";
import { mushrooms, Filter } from '../../data/development'; // Adjust the path as necessary

export default function SandboxPage() {
  return (
    <div className="page flex justify-center items-center flex-col sm:flex-row w-full px-4 absolute top-0 z-50">
      <FilterSettings Filters={Filter} />
    </div>
  );
}

  