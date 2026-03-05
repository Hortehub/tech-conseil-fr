import './globals.css'

export const metadata = {
  title: 'Tech Conseil FR — Guides & Comparatifs High-Tech',
  description: 'Comparatifs, guides d\'achat et avis experts sur les meilleurs produits tech : PC portables, smartphones, audio, maison connectée.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
