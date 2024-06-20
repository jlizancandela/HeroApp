import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { UseSearch } from "../hooks/useSearch";
import { HeroCard } from "../components/hero";

export const SearchPage = () => {
  const { hero, q } = UseSearch();

  const { values, onChange } = useInput({ search: q || "" });

  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`?q=${values.search}`);
    navigate(`?q=${values.search}`);
  };

  const showAlertInfo = q === null;
  const showAlertDanger = hero?.length === 0 && q !== "";

  return (
    <div className="row">
      <div className="col-3">
        <form onSubmit={onSubmit} aria-label="form">
          <input
            type="text"
            name="search"
            placeholder="Search your hero"
            className="form-control"
            value={values.search}
            onChange={onChange}
          />
          <button className="btn btn-outline-primary mt-2">Search</button>
        </form>
      </div>
      <div className="col-7">
        <div
          className="alert alert-info"
          style={{ display: showAlertInfo ? "block" : "none" }}
          aria-label="alert-info"
        >
          Search a hero
        </div>

        <div
          className="alert alert-danger"
          style={{ display: showAlertDanger ? "block" : "none" }}
          aria-label="alert-danger"
        >
          No hero was found with that name
        </div>
        <div>
          <h5>Results</h5>
          <hr />
          <div className="d-flex flex-row flex-wrap gap-3">
            {hero?.map((hero) => <HeroCard hero={hero} key={hero.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};
