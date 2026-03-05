import { articles, getArticleBySlug } from '../../../data/articles'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: article.titre + ' | TechConseil FR',
    description: article.description,
  }
}

function Stars({ note }) {
  const full = Math.floor(note)
  const half = note % 1 >= 0.5
  return (
    <span className="stars">
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(5 - full - (half ? 1 : 0))}
    </span>
  )
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const TAG = 'techconseils-21'

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* HEADER */}
      <header style={{
        borderBottom: '1px solid var(--border)',
        background: 'rgba(10,10,15,0.95)',
        backdropFilter: 'blur(20px)',
        position: 'sticky', top: 0, zIndex: 100
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg, var(--accent), #0080ff)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>⚡</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, color: 'var(--text)' }}>
              Tech<span style={{ color: 'var(--accent)' }}>Conseil</span>
            </div>
          </Link>
          <Link href="/" style={{ fontSize: 13, color: 'var(--text2)' }}>← Retour aux guides</Link>
        </div>
      </header>

      {/* ARTICLE HEADER */}
      <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg2)', padding: '48px 0 40px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span className="badge badge-accent">{article.categorie}</span>
            <span className="badge badge-orange">Mis à jour : {article.date}</span>
            <span style={{ fontSize: 12, color: 'var(--text3)', padding: '3px 0' }}>⏱ {article.tempsLecture} de lecture</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 16 }}>
            {article.titre}
          </h1>
          <p style={{ fontSize: 17, color: 'var(--text2)', lineHeight: 1.65, marginBottom: 24 }}>
            {article.description}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), #0080ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🤖</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Rédaction TechConseil IA</div>
              <div style={{ fontSize: 12, color: 'var(--text3)' }}>Analyse automatisée & vérifiée</div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container" style={{ maxWidth: 860, padding: '48px 24px' }}>

        {/* TABLEAU COMPARATIF */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', marginBottom: 48 }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 20 }}>📊</span>
            <h2 style={{ fontSize: 18, fontWeight: 700 }}>Comparatif rapide — Top {Math.min(article.produits.length, 3)}</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'rgba(0,229,255,0.05)' }}>
                  {['Produit', 'Prix', 'Note', 'Points forts', 'Lien'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--text3)', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', borderBottom: '1px solid var(--border)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {article.produits.slice(0, 3).map((p, i) => (
                  <tr key={p.asin} style={{ borderBottom: '1px solid var(--border)', background: i === 0 ? 'rgba(0,229,255,0.03)' : 'transparent' }}>
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text)' }}>
                        {i === 0 && <span style={{ color: 'var(--gold)', marginRight: 6 }}>★</span>}
                        {p.nom}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--accent)', marginTop: 3 }}>{p.badge}</div>
                    </td>
                    <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--accent2)', whiteSpace: 'nowrap' }}>{p.prix}</td>
                    <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                      <Stars note={p.note} /><br />
                      <span style={{ fontSize: 11, color: 'var(--text3)' }}>{p.avis.toLocaleString()} avis</span>
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--text2)', fontSize: 13 }}>{p.pointsForts[0]}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <a
                        href={`https://www.amazon.fr/dp/${p.asin}/?tag=${TAG}`}
                        target="_blank"
                        rel="nofollow sponsored noopener"
                        className="btn-amazon"
                        style={{ fontSize: 12, padding: '8px 14px', whiteSpace: 'nowrap' }}
                      >
                        Amazon →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PRODUITS DÉTAILLÉS */}
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>
          Notre sélection détaillée
        </h2>
        <p style={{ color: 'var(--text2)', marginBottom: 36, fontSize: 15 }}>
          {article.produits.length} produits analysés et comparés pour vous.
        </p>

        {article.produits.map((p, i) => (
          <div key={p.asin} style={{
            background: 'var(--card)',
            border: i === 0 ? '1px solid rgba(0,229,255,0.3)' : '1px solid var(--border)',
            borderRadius: 16,
            padding: '28px',
            marginBottom: 20,
            position: 'relative'
          }}>
            {i === 0 && (
              <div style={{
                position: 'absolute', top: -12, left: 24,
                background: 'linear-gradient(135deg, var(--accent), #0080ff)',
                color: '#000', fontSize: 11, fontWeight: 800,
                padding: '4px 12px', borderRadius: 20, letterSpacing: '0.05em'
              }}>
                ★ CHOIX N°1
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--text3)' }}>#{p.rang}</span>
                  <h3 style={{ fontSize: 20, fontWeight: 700 }}>{p.nom}</h3>
                </div>
                <p style={{ color: 'var(--text2)', fontSize: 14 }}>{p.accroche}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--accent2)', fontFamily: 'Syne, sans-serif' }}>{p.prix}</div>
                <div style={{ fontSize: 13 }}><Stars note={p.note} /> <span style={{ color: 'var(--text3)', fontSize: 12 }}>({p.avis.toLocaleString()} avis)</span></div>
                <span className="badge badge-gold" style={{ marginTop: 6 }}>{p.badge}</span>
              </div>
            </div>

            <p style={{ color: 'var(--text2)', lineHeight: 1.7, marginBottom: 20, fontSize: 15 }}>{p.description}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
              <div style={{ background: 'rgba(0,255,157,0.05)', border: '1px solid rgba(0,255,157,0.15)', borderRadius: 10, padding: '16px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>✅ Points forts</div>
                {p.pointsForts.map(pt => (
                  <div key={pt} style={{ fontSize: 13, color: 'var(--text2)', padding: '3px 0', display: 'flex', gap: 6 }}>
                    <span style={{ color: 'var(--green)' }}>+</span>{pt}
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(255,107,53,0.05)', border: '1px solid rgba(255,107,53,0.15)', borderRadius: 10, padding: '16px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent2)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>❌ Points faibles</div>
                {p.pointsFaibles.map(pt => (
                  <div key={pt} style={{ fontSize: 13, color: 'var(--text2)', padding: '3px 0', display: 'flex', gap: 6 }}>
                    <span style={{ color: 'var(--accent2)' }}>−</span>{pt}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://www.amazon.fr/dp/${p.asin}/?tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="btn-amazon"
            >
              👉 Voir le prix sur Amazon.fr
            </a>
          </div>
        ))}

        {/* GUIDE D'ACHAT */}
        <div style={{ marginTop: 56, marginBottom: 48 }}>
          <div className="badge badge-accent" style={{ marginBottom: 16 }}>Guide d'achat</div>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.02em' }}>
            Comment choisir ? Les critères essentiels
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {article.criteres.map((c, i) => (
              <div key={c.titre} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '20px 24px', display: 'flex', gap: 16 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'linear-gradient(135deg, var(--accent), #0080ff)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: '#000',
                  flexShrink: 0
                }}>{i + 1}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>{c.titre}</div>
                  <div style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.65 }}>{c.texte}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <div className="badge badge-orange" style={{ marginBottom: 16 }}>FAQ</div>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24, letterSpacing: '-0.02em' }}>
            Questions fréquentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {article.faq.map((f) => (
              <details key={f.question} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
                <summary style={{ padding: '18px 24px', cursor: 'pointer', fontWeight: 600, fontSize: 15, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {f.question}
                  <span style={{ color: 'var(--accent)', fontSize: 18 }}>+</span>
                </summary>
                <div style={{ padding: '0 24px 18px', fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>
                  {f.reponse}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CONCLUSION */}
        <div style={{ background: 'linear-gradient(135deg, rgba(0,229,255,0.06), rgba(0,128,255,0.06))', border: '1px solid rgba(0,229,255,0.2)', borderRadius: 16, padding: '32px', marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Notre verdict</h2>
          <p style={{ color: 'var(--text2)', lineHeight: 1.7, marginBottom: 20 }}>
            Après analyse approfondie, <strong style={{ color: 'var(--text)' }}>{article.produits[0].nom}</strong> est notre meilleure recommandation dans cette catégorie. {article.produits[0].accroche.toLowerCase()} — un excellent choix pour la majorité des utilisateurs.
          </p>
          <a
            href={`https://www.amazon.fr/dp/${article.produits[0].asin}/?tag=${TAG}`}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="btn-amazon"
          >
            🏆 Voir le n°1 sur Amazon →
          </a>
        </div>

        {/* MENTION LEGALE */}
        <p className="mention-legale">
          En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises. Les prix affichés sont indicatifs et peuvent varier. Dernière mise à jour : {article.date}.
        </p>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg2)', padding: '32px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: 'var(--text3)' }}>
            © 2025 TechConseil FR · <em>En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.</em>
          </p>
        </div>
      </footer>
    </div>
  )
}
