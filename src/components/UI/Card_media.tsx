import "../styles/Card_media.css";

type Props = {
  image: string;
  title: string;
  desc: string;
};

const Card_media = ({ image, title, desc }: Props) => {
  return (
    <div className="card_media">
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Card_media;