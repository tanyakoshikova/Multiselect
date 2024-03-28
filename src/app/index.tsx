import { FC } from "react";
import "./styles/index.scss";
import MultiselectDropdown from "../shared/ui/MultiselectDropdown/MultiselectDropdown";
import {cities} from "../shared/ui/MultiselectDropdown/MultiselectDropdown.props";

const App: FC = () => {
  return <MultiselectDropdown cities={cities}/>
}

export default App;