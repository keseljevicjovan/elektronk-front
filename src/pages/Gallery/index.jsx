import { h } from 'preact';
import { useState } from 'preact/hooks';
import { FontAwesomeIcon } from '@aduh95/preact-fontawesome';
import { faSchool, faChalkboard, faUtensils, faMicroscope, faLaptopCode, faSolarPanel, faTrophy, faGraduationCap, faCalendarDay, faUsers, faProjectDiagram, faHandshake, faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.css'

export function Gallery() {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);

  const galleryItems = [
    { id: 'modal1', category: 'facilities', title: 'Glavna zgrada škole', desc: 'Moderna zgrada sa 30 učionica', icon: faSchool, gradient: 'from-primary to-secondary' },
    { id: 'modal2', category: 'facilities', title: 'Učionica za teoriju', desc: 'Opremljena najsavremenijom tehnologijom', icon: faChalkboard, gradient: 'from-accent to-warning' },
    { id: 'modal7', category: 'events', title: 'Takmičenje 2024', desc: 'Pobjednici republičkog takmičenja', icon: faTrophy, gradient: 'from-primary to-accent' },
    { id: 'modal9', category: 'events', title: 'Dan otvorenih vrata', desc: 'Posjetitelji upoznaju našu školu', icon: faCalendarDay, gradient: 'from-accent to-primary' },
    { id: 'modal10', category: 'students', title: 'Učenici na praksi', desc: 'Praktičan rad u laboratoriju', icon: faUsers, gradient: 'from-success to-warning' },
    { id: 'modal11', category: 'students', title: 'Projektni rad', desc: 'Učenici rade na svojim projektima', icon: faProjectDiagram, gradient: 'from-primary to-warning' },
  ];

  return (
    <div class="gallery">
      <section class="pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-5xl font-bold text-gray-800 mb-6">Galerija</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Pogledajte fotografije naših prostorija, laboratorija, događaja i aktivnosti učenika.
            </p>
          </div>

          <div class="flex flex-wrap justify-center gap-4 mb-12">
            {['Sve', 'Prostorije', 'Događaji', 'Učenici'].map((cat) => (
              <button
                class={`gallery-filter px-6 py-2 rounded-full font-semibold ${
                  cat === 'Sve' ? 'active bg-secondary text-white' : 'bg-white text-gray-600 hover:bg-secondary hover:text-white transition-colors'
                }`}
                data-filter={cat.toLowerCase()}
              >
                {cat}
              </button>
            ))}
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map(item => (
              <div
                key={item.id}
                class={`gallery-item ${item.category} bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer`}
                onClick={() => openModal(item.id)}
              >
                <div class={`h-64 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <FontAwesomeIcon icon={item.icon} class="text-6xl text-white w-16" />
                </div>
                <div class="p-4">
                  <h3 class="font-bold mb-2">{item.title}</h3>
                  <p class="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {galleryItems.map(item =>
        openModalId === item.id && (
          <div key={item.id} class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div class="bg-white rounded-xl max-w-2xl w-full p-6 relative">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-2xl font-bold">{item.title}</h3>
                <button onClick={closeModal} class="text-2xl text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <div class={`h-96 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mb-4`}>
                <FontAwesomeIcon icon={item.icon} class="text-8xl text-white w-32" />
              </div>
              <p class="text-gray-600">{item.desc}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
