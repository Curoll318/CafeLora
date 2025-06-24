import './style.css';
import { Drink } from '../Drink';

export const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          <Drink
            id={0}
            name="Romano"
            ordered={false}
            image="http://localhost:4000/assets/cups/romano.png"
            layers={[
                { color: '#feeeca', label: 'mléčná pěna' },
                { color: '#fed7b0', label: 'mléko' },
                { color: '#613916', label: 'espresso' },
            ]}
          />
        </div>
      </div>
    </section>
  );
};


