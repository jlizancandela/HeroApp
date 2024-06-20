import { Navigate, useNavigate, useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { getHero } from "../helper/gethero";

type Params = {
  id: string;
};

export const HeroPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const { id } = useParams<Params>();

  const hero = id ? getHero(id) : null;
  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/" replace />;
  }

  const onBack = () => {
    navigate(-1);
  };

  return (
    <article className="d-flex flex-row">
      <div className="p-3" data-aos="fade-right" data-aos-duration="2000">
        {hero?.id && (
          <img src={`/heroes/${hero?.id}.jpg`} alt={hero?.superhero} />
        )}
      </div>
      <div className="d-flex flex-column p-3">
        <h1>{hero?.superhero}</h1>
        <hr />
        <p>{hero?.alter_ego}</p>
        <p>{hero?.characters !== hero?.alter_ego && hero?.characters}</p>
        <p>{hero?.first_appearance}</p>
        <p>{hero?.publisher}</p>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </article>
  );
};
