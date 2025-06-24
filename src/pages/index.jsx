import { render } from '@czechitas/render';
import '../global.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
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