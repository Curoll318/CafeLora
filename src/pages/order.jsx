import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Order } from '../components/Order';


  const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image');
  const data = await response.json();
  const items = data.data.map((item) => ({
    ...item,
    image: `http://localhost:4000${item.image}`,
  }));

  document.querySelector('#root').innerHTML = render(
    <div className="page">
      <Header showMenu={false} />
      <main className="order">
        <div className="container order__content">
          <h1>Vaše objednávka</h1>
          <Order items={items} />
        </div>
      </main>
      <Footer />
    </div>
  );


