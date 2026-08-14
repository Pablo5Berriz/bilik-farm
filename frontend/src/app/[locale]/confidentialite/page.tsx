import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Confidentialité — Bilik Farm',
  description: "Comment le formulaire de contact de Bilik Farm traite les données saisies par les visiteurs.",
};

export default async function ConfidentialitePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <section className="relative overflow-hidden bg-primary py-16 text-white sm:py-20 lg:py-24">
        <div aria-hidden="true" className="cameroon-pattern absolute inset-y-0 right-0 w-16 opacity-25 sm:w-28" />
        <Container className="relative">
          <nav aria-label="Fil d’Ariane" className="mb-10 flex items-center gap-3 text-sm text-white/55">
            <Link href={`/${locale}`} className="rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-white">Confidentialité</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Formulaire de contact</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">Ce que devient un message envoyé à Bilik Farm.</h1>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="rounded-editorial border border-gold/40 bg-gold/10 p-6 text-sm leading-6 text-primary">
              Cette page décrit uniquement le fonctionnement technique réel du formulaire de contact. Elle ne constitue pas un avis juridique et n’a pas été validée par un conseil juridique.
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold text-primary">Données collectées</h2>
              <p className="mt-4 leading-7 text-primary/70">Le formulaire de la page contact collecte les champs que vous y saisissez vous-même :</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-primary/70">
                <li>nom ;</li>
                <li>adresse email ;</li>
                <li>téléphone (champ facultatif, à remplir uniquement si vous le souhaitez) ;</li>
                <li>sujet ;</li>
                <li>message.</li>
              </ul>
              <p className="mt-4 leading-7 text-primary/70">Aucune autre donnée n’est collectée par ce formulaire (pas de cookie déposé par notre code, pas de suivi publicitaire, pas d’identifiant technique enregistré).</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold text-primary">Pourquoi ces données sont demandées</h2>
              <p className="mt-4 leading-7 text-primary/70">Ces informations servent uniquement à répondre à votre message : le nom et l’email pour vous identifier et vous recontacter, le sujet et le message pour comprendre votre demande, le téléphone uniquement si vous préférez être rappelé.</p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold text-primary">Un service tiers achemine le message</h2>
              <p className="mt-4 leading-7 text-primary/70">Le formulaire ne dispose pas de serveur propre à Bilik Farm : le site est un site statique. Techniquement, les informations saisies sont transmises à <strong>FormSubmit</strong> (formsubmit.co), un service tiers indépendant de Bilik Farm, qui se charge de relayer le contenu du formulaire par email vers l’adresse <a href="mailto:Bilik-farm@gmail.com" className="text-terracotta underline underline-offset-2 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Bilik-farm@gmail.com</a>.</p>
              <p className="mt-4 leading-7 text-primary/70">Bilik Farm ne conserve pas de base de données de vos messages : une fois reçu par email, le message est traité comme n’importe quel email reçu par Bilik Farm.</p>
              <p className="mt-4 rounded-editorial border border-gold/40 bg-gold/10 p-5 text-sm leading-6 text-primary">
                À VALIDER AVANT PUBLICATION : la durée exacte de conservation des données par FormSubmit, la localisation précise de ses serveurs, ses certifications éventuelles, et les garanties contractuelles applicables ne sont pas vérifiées par Bilik Farm à ce jour. Se référer à la politique de confidentialité publiée par FormSubmit (formsubmit.co) pour ces informations, ou nous écrire pour toute question avant de soumettre des données sensibles.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold text-primary">Vos questions sur ces données</h2>
              <p className="mt-4 leading-7 text-primary/70">Pour toute question sur les données saisies via ce formulaire, ou pour en demander la suppression auprès de Bilik Farm, écrivez à <a href="mailto:Bilik-farm@gmail.com" className="text-terracotta underline underline-offset-2 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">Bilik-farm@gmail.com</a>.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
