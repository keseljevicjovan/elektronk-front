import { FontAwesomeIcon } from '@aduh95/preact-fontawesome';
import { faFilePdf, faGraduationCap, faBalanceScale, faDownload, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export function Documents() {
  return (
    <div id="documents" class="page">
      <section class="pt-32 pb-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-5xl font-bold text-gray-800 mb-6">Dokumenti</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Svi važni dokumenti, pravilnici i zakoni dostupni na jednom mjestu.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faGraduationCap} class="text-primary w-7 h-7"/>
              </div>
              <h3 class="text-xl font-bold text-center mb-4">Konkurs za upis u I razred</h3>
              <p class="text-gray-600 text-center mb-6">
                Sve informacije o konkursu za upis novih učenika u prvi razred naše škole.
              </p>
              <div class="space-y-3">
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                  <FontAwesomeIcon icon={faFilePdf} class="w-4.5 h-4.5 mr-3 text-danger"/>
                  <span>Konkurs 2025/2026</span>
                </a>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                  <FontAwesomeIcon icon={faFilePdf} class="w-4.5 h-4.5 mr-3 text-danger"/>
                  <span>Uslovi upisa</span>
                </a>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                  <FontAwesomeIcon icon={faFilePdf} class="w-4.5 h-4.5 mr-3 text-danger"/>
                  <span>Potrebna dokumenta</span>
                </a>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-8">
              <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faBalanceScale} class="text-secondary w-7 h-7"/>
              </div>
              <h3 class="text-xl font-bold text-center mb-4">Zakoni, pravilnici i dokumenta</h3>
              <p class="text-gray-600 text-center mb-6">
                Svi važni zakoni, pravilnici i dokumenta koji regulišu rad naše škole.
              </p>
              <div class="space-y-3">
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                  <FontAwesomeIcon icon={faFilePdf} class="w-4.5 h-4.5 mr-3 text-danger"/>
                  <span>Zakon o srednjem obrazovanju</span>
                </a>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                  <FontAwesomeIcon icon={faFilePdf} class="w-4.5 h-4.5 mr-3 text-danger"/>
                  <span>Pravilnik o radu škole</span>
                </a>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                  <FontAwesomeIcon icon={faFilePdf} class="w-4.5 h-4.5 mr-3 text-danger"/>
                  <span>Statut škole</span>
                </a>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                  <FontAwesomeIcon icon={faFilePdf} class="w-4.5 h-4.5 mr-3 text-danger"/>
                  <span>Kućni red</span>
                </a>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-8">
              <div class="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faShieldAlt} class="text-success w-7 h-7"/>
              </div>
              <h3 class="text-xl font-bold text-center mb-4">Plan integriteta</h3>
              <p class="text-gray-600 text-center mb-6">
                Dokumenti vezani za plan integriteta i transparentnost rada škole.
              </p>
              <div class="space-y-3">
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                  <FontAwesomeIcon icon={faFilePdf} class="w-4.5 h-4.5 mr-3 text-danger"/>
                  <span>Plan integriteta 2025</span>
                </a>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                  <FontAwesomeIcon icon={faFilePdf} class="w-4.5 h-4.5 mr-3 text-danger"/>
                  <span>Izvještaj o realizaciji</span>
                </a>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                  <FontAwesomeIcon icon={faFilePdf} class="w-4.5 h-4.5 mr-3 text-danger"/>
                  <span>Kodeks ponašanja</span>
                </a>
              </div>
            </div>
          </div>

          <div class="mt-16">
            <h2 class="text-3xl font-bold text-center mb-12">Ostali dokumenti</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white rounded-xl shadow-lg p-8">
                <h3 class="text-xl font-bold mb-6">Nastavni planovi i programi</h3>
                <div class="space-y-3">
                  <a href="#" class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                    <span>Elektronika - nastavni plan</span>
                    <FontAwesomeIcon icon={faDownload} class="text-secondary w-4 h-4"/>
                  </a>
                  <a href="#" class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                    <span>Elektrotehnika - nastavni plan</span>
                    <FontAwesomeIcon icon={faDownload} class="text-secondary w-4 h-4"/>
                  </a>
                  <a href="#" class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                    <span>Računarstvo - nastavni plan</span>
                    <FontAwesomeIcon icon={faDownload} class="text-secondary w-4 h-4"/>
                  </a>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-lg p-8">
                <h3 class="text-xl font-bold mb-6">Formulari i obrasci</h3>
                <div class="space-y-3">
                  <a href="#" class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                    <span>Prijava za upis</span>
                    <FontAwesomeIcon icon={faDownload} class="text-secondary w-4 h-4"/>
                  </a>
                  <a href="#" class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                    <span>Zahtjev za izdavanje uvjerenja</span>
                    <FontAwesomeIcon icon={faDownload} class="text-secondary w-4 h-4"/>
                  </a>
                  <a href="#" class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors" data-link>
                    <span>Molba za stipendiju</span>
                    <FontAwesomeIcon icon={faDownload} class="text-secondary w-4 h-4"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
