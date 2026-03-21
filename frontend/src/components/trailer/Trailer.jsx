import { useParams } from 'react-router-dom';
import './Trailer.css';

const Trailer = () => {
  const { ytTrailerId: key } = useParams();

  return (
    <div className="react-player-container">
      {key && (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Trailer;