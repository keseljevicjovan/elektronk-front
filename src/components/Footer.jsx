import { FontAwesomeIcon } from '@aduh95/preact-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img src="/logo.avif" alt="Logo" width="48" height="48" class="w-12 h-12 object-contain"/>
              </div>
              <div>
                <h3 class="text-xl font-bold">Elektro Škola Nikšić</h3>
                <p class="text-gray-300">Srednja stručna škola</p>
              </div>
            </div>
            <p class="text-gray-300 mb-6">
              Elektrotehnička škola u Crnoj Gori koja priprema stručnjake za budućnost kroz kvalitetno obrazovanje i praktičan rad.
            </p>
            <div class="flex space-x-4">
              <a
                href="https://www.facebook.com/srednjastrucnaskolaniksic"
                class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} class="text-white w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/ju_srednja_strucna_skolank"
                class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} class="text-white w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-bold mb-4">Brzi linkovi</h4>
            <ul class="space-y-2">
              <li><a href="/o-nama" class="text-gray-300 hover:text-white transition-colors">O nama</a></li>
              <li><a href="/smjerovi" class="text-gray-300 hover:text-white transition-colors">Smjerovi</a></li>
              <li><a href="/dokumenta" class="text-gray-300 hover:text-white transition-colors">Dokumenti</a></li>
              <li><a href="/galerija" class="text-gray-300 hover:text-white transition-colors">Galerija</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4">Kontakt</h4>
            <div class="space-y-3">
              <div class="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} class="mr-3 text-blue-500 w-4 h-4" />
                <span class="text-gray-300">Ulica Vuka Karadžića 15<br/>81400 Nikšić</span>
              </div>
              <div class="flex items-center">
                <FontAwesomeIcon icon={faPhone} class="mr-3 text-blue-500 w-4 h-4" />
                <span class="text-gray-300">+382 40 123 456</span>
              </div>
              <div class="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} class="mr-3 text-blue-500 w-4 h-4" />
                <span class="text-gray-300">info@elektroskolank.me</span>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © 2025 Srednja stručna škola Nikšić - Elektrotehnička škola. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
