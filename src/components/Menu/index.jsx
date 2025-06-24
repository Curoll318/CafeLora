import './style.css'

const menuItems = [
    {
        id: 0,
        name: "Espresso",
        image: "/cups/espresso.png",
        layers: [
            {label: "espresso", color:'#613916'},
        ],
    },
    {
        id: 1,
        name: "Doppio",
        image: "/cups/doppio.png",
        layers: [
            {label: "espresso", color: '#613916'},
        ],
    },
    {
        id: 2,
        name: "Lungo",
        image: "/cups/lungo.png",
        layers: [
            {label: "voda", color: "#b0dee1"},
            { label: "espresso", color: "#613916" },
        ],
    },
];


export const Menu = () => {
    return (
       <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {menuItems.map((item) => (
            <div className="drink" key={item.id}>
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="drink__info">
                  <h3>{item.name}</h3>
                  {item.layers.map((layer, index) => (
                    <div className="layer" key={index}>
                      <div
                        className="layer__color"
                        style={{ backgroundColor: layer.color }}
                      />
                      <div className="layer__label">{layer.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <form className="drink__controls">
                <input type="hidden" className="order-id" value={item.id} />
                <button className="order-btn">Objednat</button>
              </form>
            </div>
          ))}
        </div>

        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};





