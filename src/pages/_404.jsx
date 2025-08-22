import { h } from 'preact';

export function NotFound() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 class="text-9xl font-extrabold text-gray-300 mb-4">404</h1>
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Stranica nije pronađena</h2>
      <p class="text-gray-600 mb-6 max-w-md">
        Izgleda da stranica koju tražite ne postoji ili je možda premještena.
        Vratite se na početnu stranicu i pokušajte ponovo.
      </p>
      <a
        href="/"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
      >
        Povratak na početnu
      </a>
    </div>
  );
}
