import '../styles/Card.css'

type Props = {
  title: string;
  desc:string;
  className:string;
};

function Card({ title , desc , className}: Props) {
  return (
    <div className={className}>
      <div className="icon">
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default Card;