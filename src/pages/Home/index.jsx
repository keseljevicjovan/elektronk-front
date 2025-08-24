import { h } from 'preact';
import { useEffect, useState, useRef } from 'preact/hooks';
import { FontAwesomeIcon } from '@aduh95/preact-fontawesome';
import { 
  faSchool, faMicroscope, faTrophy, faChevronLeft, faChevronRight, faChevronDown, 
  faGraduationCap, faArrowRight, faCheck, faMicrochip, faBolt, faLaptopCode, faInfoCircle, faNewspaper, faHandshake 
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [faSchool, faMicroscope, faTrophy];
  const timerRef = useRef(null);
  const [slideDirection, setSlideDirection] = useState('right');

  function animateCounters() {
    const counters = document.querySelectorAll('.stats-counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'), 10);
      const increment = target / 100;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current);
        }
      }, 20);
    });
  }

  useEffect(() => {
    animateCounters();
  }, []);

  const changeSlide = (direction) => {
    setSlideDirection(direction > 0 ? 'right' : 'left');
    setCurrentSlide(prev => {
      let next = prev + direction;
      if (next >= slides.length) next = 0;
      if (next < 0) next = slides.length - 1;
      return next;
    });
    resetTimer();
  };

  const goToSlide = (n) => {
    setCurrentSlide(n);
    resetTimer();
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
  };

  const resetTimer = () => {
    startTimer();
  };

  return (
    <div id="home" className="page active">
      <section className="hero-pattern min-h-screen flex items-center justify-center text-white relative">
        <div className="floating-particles"></div>
        <div className="w-full px-6 relative z-10">
          <div className="hero-slider relative overflow-hidden rounded-2xl w-full max-w-[95vw] mx-auto">
            {slides.map((icon, idx) => (
              <div   className={`slide ${idx === currentSlide ? `active ${slideDirection === 'right' ? 'slide-right' : 'slide-left'}` : ''}`} key={idx}>
                <div className="flex items-center justify-center min-h-[500px] p-8">
                  <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <FontAwesomeIcon icon={icon} className="text-8xl text-white/80" />
                  </div>
                </div>
              </div>
            ))}

            <button className="slider-nav prev" onClick={() => changeSlide(-1)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="slider-nav next" onClick={() => changeSlide(1)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className="slider-dots">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FontAwesomeIcon icon={faChevronDown} className="text-2xl text-white opacity-70" />
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="counter-animation">
              <div className="stats-counter" data-count="600">0</div>
              <div className="stats-label">Učenika</div>
            </div>
            <div className="counter-animation">
              <div className="stats-counter" data-count="40">0</div>
              <div className="stats-label">Nastavnika</div>
            </div>
            <div className="counter-animation">
              <div className="stats-counter" data-count="12">0</div>
              <div className="stats-label">Smjerova</div>
            </div>
            <div className="counter-animation">
              <div className="stats-counter" data-count="89">0</div>
              <div className="stats-label">Godina tradicije</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Naši Smjerovi</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Elektronika', icon: faMicrochip, color: 'secondary', features: ['Analogna i digitalna elektronika', 'Mikroprocesorski sistemi', 'Programiranje mikrokontrolera'] },
              { title: 'Elektrotehnika', icon: faBolt, color: 'accent', features: ['Električna kola i mašine', 'Energetski sistemi', 'Automatika i regulacija'] },
              { title: 'Računarstvo', icon: faLaptopCode, color: 'success', features: ['Programski jezici (C++, Java, Python)', 'Web tehnologije', 'Baze podataka i mreže'] }
            ].map((smjer, idx) => (
              <div key={idx} className={`hover-lift p-8 rounded-xl shadow-lg text-center border-t-4 border-${smjer.color}`}>
                <div className={`w-20 h-20 bg-${smjer.color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <FontAwesomeIcon icon={smjer.icon} className={`text-3xl text-${smjer.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{smjer.title}</h3>
                <ul className="text-left text-sm text-gray-600 mb-6 space-y-2">
                  {smjer.features.map((feat, i) => (
                    <li key={i} className="flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="text-success mr-2" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="/smjerovi" className="btn btn-primary w-full" data-link>
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  Saznaj Više
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Najnovije Vijesti</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Naši učenici pobjednici', icon: faTrophy, date: '15. Decembar 2024', desc: 'Tim naše škole osvojio je prvo mjesto na republičkom takmičenju iz elektrotehnike...' },
              { title: 'Novi laboratorij', icon: faMicroscope, date: '10. Decembar 2024', desc: 'Otvoren je novi laboratorij opremljen najsavremenijom opremom za proučavanje...' },
              { title: 'Partnerstvo sa lokalnim preduzećima', icon: faHandshake, date: '5. Decembar 2024', desc: 'Potpisani ugovori o saradnji sa vodećim kompanijama za praksu učenika...' }
            ].map((news, idx) => (
              <article key={idx} className="news-card rounded-xl shadow-lg overflow-hidden">
                <div className={`h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center`}>
                  <FontAwesomeIcon icon={news.icon} className="text-4xl text-white" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-secondary mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.desc}</p>
                  <button className="text-secondary font-semibold hover:text-primary transition-colors">
                    Pročitaj više <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
