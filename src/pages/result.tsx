import "../App.css";
import { APICategories, APIResult, APISkus } from "../types/result";

function ResultSection(results: APIResult) {
  return (
    <div className="section">
      {results.categories ? (
        <div>
          {results.categories.map((category) => {
            return CategoryCompoenent(category);
          })}
        </div>
      ) : (
        <div>There are no results for your input.</div>
      )}
    </div>
  );
}

function CategoryCompoenent(category: APICategories) {
  return (
    <div className="section">
      <p className="is-size-3 has-text-left md-5 has-text-weight-semibold is-family-sans-serif">
        {category.name}
      </p>
      <div
        className="columns is-mobile is-multiline"
        style={{ flexWrap: "nowrap", overflowX: "auto" }}
      >
        {category.skus.map((sku) => {
          return SKUComponent(sku);
        })}
      </div>
    </div>
  );
}

function SKUComponent(sku: APISkus) {
  return (
    <div className="column is-one-fifth ">
      <div
        className="card"
        id={"" + sku.id}
        style={{ borderRadius: "20px", marginLeft: "1rem" }}
      >
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={sku.image_url} alt="img" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left"></div>
            <div className="media-content">
              <p className="title is-4">{sku.name}</p>
            </div>
          </div>

          <div className="content">
            <div className="columns">
              <div className="column">{StarsRating(sku.rating)}</div>
              <div className="column">({sku.reviews_count})</div>
            </div>
            <div className="is-size-5 has-text-left md-5 has-text-weight-semibold is-family-sans-serif">
              {sku.price} €
            </div>
            <a href={sku.url} target="_blank" rel="noreferrer">
              <button className="button is-info">Buy it</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarsRating(value: number) {
  if (value >= 1 && value < 2) {
    return (
      <span className="stars">
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
      </span>
    );
  } else if (value >= 2 && value < 3) {
    return (
      <span className="stars">
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
      </span>
    );
  } else if (value >= 3 && value < 4) {
    return (
      <span className="stars">
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
      </span>
    );
  } else if (value >= 4 && value < 5) {
    return (
      <span className="stars">
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
      </span>
    );
  } else if (value >= 5) {
    return (
      <span className="stars">
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star is-size-2">*</i>
        <i className="fas fa-star is-size-2">*</i>
      </span>
    );
  } else {
    return (
      <span className="stars">
        <i className="fas fa-star-half-alt is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
        <i className="fas fa-star-half-alt is-size-2">*</i>
      </span>
    );
  }
}

export default ResultSection;
