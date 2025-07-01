import { Layer } from '../Layer'; 
import './style.css'

export const Drink = ({ id, name, image, layers, ordered }) => {
  return (
   <div className={`drink ${ordered ? 'drink--selected' : ''}`}>
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer, index) => (
            <Layer key={index} color={layer.color} label={layer.label} />
          ))}
        </div>
      </div>

     <form
        className="drink__controls"
        data-id={id}
        data-ordered={ordered}
      >
        <button
          className={`order-btn ${ordered ? 'order-btn--ordered' : ''}`}
        >
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  );
};