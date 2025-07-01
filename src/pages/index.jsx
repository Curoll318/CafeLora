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
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

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