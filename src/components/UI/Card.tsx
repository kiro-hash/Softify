import '../styles/Card.css'

type Props = {
  title: string;
  desc:string;
};

function Card({ title , desc}: Props) {
  return (
    <div className="card">
      <div className="icon">
        <svg></svg>
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default Card;