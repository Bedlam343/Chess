import "components/Tile/Tile.css";

interface Props {
  number: number;
  image?: string;
}

const Tile = ({ number, image }: Props) => {
  // even number tiles are white
  if (number % 2 === 0) {
    return (
      <div className="tile white-tile">
        <img src={image} />
      </div>
    );
  } else {
    return (
      <div className="tile black-tile">
        <img src={image} />
      </div>
    );
  }
};

export default Tile;
