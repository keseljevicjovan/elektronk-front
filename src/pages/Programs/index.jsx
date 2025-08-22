import { FontAwesomeIcon } from '@aduh95/preact-fontawesome';
import { faCheck, faInfoCircle, faBolt, faCode, faPhone } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export function Programs() {
  return (
    <div id="programs" class="page">
      <section class="pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-5xl font-bold text-gray-800 mb-6">Naši smjerovi</h1>
          </div>

          <div class="grid lg:grid-cols-2 gap-8 mb-16">
            <div class="program-card">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faBolt} class="w-6 h-6 text-2xl text-accent"/>
                </div>
                <div>
                  <h3 class="text-2xl font-bold">Elektrotehnika</h3>
                  <p class="text-gray-600">4-godišnji program</p>
                </div>
              </div>
              <p class="text-gray-600 mb-6">
                Sveobuhvatan program koji pokriva sve aspekte elektrotehnike od osnovnih električnih kola do složenih energetskih sistema i automatike.
              </p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center">
                  <FontAwesomeIcon icon={faCheck} class="w-4 h-4 text-success mr-2"/>
                  <span>Električna kola i mašine</span>
                </div>
                <div class="flex items-center">
                  <FontAwesomeIcon icon={faCheck} class="w-4 h-4 text-success mr-2"/>
                  <span>Energetski sistemi</span>
                </div>
                <div class="flex items-center">
                  <FontAwesomeIcon icon={faCheck} class="w-4 h-4 text-success mr-2"/>
                  <span>Automatika i regulacija</span>
                </div>
                <div class="flex items-center">
                  <FontAwesomeIcon icon={faCheck} class="w-4 h-4 text-success mr-2"/>
                  <span>Industrijska praksa</span>
                </div>
              </div>
              <button class="btn btn-primary w-full">
                <FontAwesomeIcon icon={faInfoCircle} class="w-4 h-4 text-white mr-2"/>
                Saznaj Više
              </button>
            </div>

            <div class="program-card">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faCode} class="w-6 h-6 text-2xl text-primary"/>
                </div>
                <div>
                  <h3 class="text-2xl font-bold">Razvoj veb i mobilnih aplikacija</h3>
                  <p class="text-gray-600">4-godišnji program</p>
                </div>
              </div>
              <p class="text-gray-600 mb-6">
                Moderni program fokusiran na programiranje, web razvoj, baze podataka i mrežne tehnologije. Priprema učenike za IT industriju.
              </p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center">
                  <FontAwesomeIcon icon={faCheck} class="w-4 h-4 text-success mr-2"/>
                  <span>Programski jezici</span>
                </div>
                <div class="flex items-center">
                  <FontAwesomeIcon icon={faCheck} class="w-4 h-4 text-success mr-2"/>
                  <span>Web tehnologije</span>
                </div>
                <div class="flex items-center">
                  <FontAwesomeIcon icon={faCheck} class="w-4 h-4 text-success mr-2"/>
                  <span>Baze podataka</span>
                </div>
                <div class="flex items-center">
                  <FontAwesomeIcon icon={faCheck} class="w-4 h-4 text-success mr-2"/>
                  <span>Mrežne tehnologije</span>
                </div>
              </div>
              <button class="btn btn-primary w-full">
                <FontAwesomeIcon icon={faInfoCircle} class="w-4 h-4 text-white mr-2"/>
                Saznaj Više
              </button>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h2 class="text-3xl font-bold text-center mb-8">Upis u školu</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-bold mb-4">Uslovi za upis</h3>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <FontAwesomeIcon icon={faCheck} class="w-4 h-4 text-success mr-2"/>
                    <span>Završena osnovna škola</span>
                  </li>
                  <li class="flex items-center">
                    <FontAwesomeIcon icon={faCheck} class="w-4 h-4 text-success mr-2"/>
                    <span>Dokumenta iz 7. 8. i 9. razreda osnovne škole</span>
                  </li>
                  <li class="flex items-center">
                    <FontAwesomeIcon icon={faCheck} class="w-4 h-4 text-success mr-2"/>
                    <span>Prijavnica za upis</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-4">Važni Datumi</h3>
                <div class="space-y-3">
                  <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Početak prijava</span>
                    <span class="font-bold text-secondary">1. Maj</span>
                  </div>
                  <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Kraj prijava</span>
                    <span class="font-bold text-secondary">15. Jun</span>
                  </div>
                  <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Objava rezultata</span>
                    <span class="font-bold text-secondary">1. Jul</span>
                  </div>
                  <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Početak nastave</span>
                    <span class="font-bold text-secondary">1. Septembar</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-8">
              <a href="kontakt" class="btn btn-primary btn-lg" data-link>
                <FontAwesomeIcon icon={faPhone} class="w-4 h-4 mr-2"/>
                Kontaktiraj nas
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
