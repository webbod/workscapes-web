import "../styles/grid.scss";
import Archetype from "../models/archetype";
import Axes from "../models/axes";


type GridProps = {
  axes: Axes;
  id: string;
  archetypes: Archetype[];
  onSquareClick: (gridId: string, squareId: number, archetype: string) => void;
};

function Grid({ axes, id, archetypes, onSquareClick }: GridProps) {
    return (
      <div className="grid-container">

        {archetypes.map((currentArchetype, index) => (
          <div
            key={index}
            className="grid-square"
            onClick={() => onSquareClick(id, index + 1, currentArchetype.title)}
          >
            <img src={`/images/archetypes/${currentArchetype.title.toLowerCase()}.webp`}/>
            The {currentArchetype.title}<br/>{currentArchetype.quote}
          </div>
        ))}

      </div>
    );
  }

export default Grid;