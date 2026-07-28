import "../styles/Card_media.css";

type Props = {
  image: string;
  title: string;
  desc: string;
  className:string;
};

const Card_media = ({ image, title, desc ,className}: Props) => {
  return (
    <div className={`media-card ${className || ""}`}>
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Card_media;