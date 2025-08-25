import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@aduh95/preact-fontawesome';
import './style.css';

export function Gallery() {
  const [openModalId, setOpenModalId] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  const openModal = (id) => {
    setOpenModalId(id);
    setFade(true);
  };

  const closeModal = () => {
    setFade(false);
    setTimeout(() => setOpenModalId(null), 300);
  };

  useEffect(() => {
    fetch('http://localhost:8000/api/images')
      .then((res) => res.json())
      .then((data) => {
        setImages(data.data || data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching images:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div class="text-center py-16">Učitavanje slika...</div>;
  }

  return (
    <div class="gallery">
      <section class="pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-5xl font-bold text-gray-800 mb-6">Galerija</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Pogledajte fotografije naših prostorija, događaja i aktivnosti učenika.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div
                key={image.id}
                class="gallery-item bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(image.id)}
              >
                <img src={`http://localhost:8000${image.url}`} alt={image.title} class="h-64 w-full object-cover" />
                <div class="p-4">
                  <h3 class="font-bold mb-2">{image.title}</h3>
                  <p class="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {images.map(
        (image) =>
          openModalId === image.id && (
            <div
              key={image.id}
              class={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
              }}
            >
              <div class="bg-white rounded-xl max-w-4xl w-full p-6 relative transform transition-transform duration-300 scale-100">
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-2xl font-bold">{image.title}</h3>
                  <button onClick={closeModal} class="text-2xl text-gray-500 hover:text-gray-700">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <img
                  src={`http://localhost:8000${image.url}`}
                  alt={image.title}
                  class="w-full h-auto max-h-[80vh] object-contain rounded-lg mb-4"
                />
                <p class="text-gray-600">{image.description}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
}
