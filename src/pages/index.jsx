import { render } from '@czechitas/render';
import '../global.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';


  const startApp = async () => {
  const response = await fetch('http://localhost:4000/api/drinks');
  const data = await response.json();
  const drinks = data.data
  console.log(drinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <div className="order-link">
       <a href="/order.html" className="btn btn--primary">Zobrazit objednávku</a>
      </div>
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const forms = document.querySelectorAll('.drink__controls');

  forms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const drinkId = form.dataset.id;
      const wasOrdered = form.dataset.ordered === 'true';

      const body = [
        {
          op: 'replace',
          path: '/ordered',
          value: !wasOrdered,
        },
      ];

      const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      console.log('API odpověď:', result);

      window.location.reload(); 
    });
  });

const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.rollout-nav');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.add('nav-closed');
  }
});
};

startApp();