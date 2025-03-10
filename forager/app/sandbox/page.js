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
import MushroomList from "../../components/MushroomList";

const mush = mushrooms;
const select= mushrooms.mushroom[0];

export default function SandboxPage() {

  return (
    <div >
      <Message />
    </div>
  );
}

  