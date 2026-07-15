import { Button } from '@/components/ui/Button';

export function ContactForm() {
  return (
    <form className="space-y-6" aria-describedby="contact-form-status">
      <div id="contact-form-status" className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-900 text-sm">
        Le formulaire en ligne est temporairement indisponible. Les coordonnées officielles seront publiées après validation.
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
          <input type="text" disabled
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input type="email" disabled
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
        <input type="tel" disabled
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sujet *</label>
        <input type="text" disabled
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea rows={6} disabled
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
      </div>
      <Button type="button" disabled aria-disabled="true" className="w-full">
        Envoi temporairement indisponible
      </Button>
    </form>
  );
}
