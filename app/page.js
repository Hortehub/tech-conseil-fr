'use client'
import { articles } from '../data/articles'
import Link from 'next/link'

export default function HomePage() {
  const categories = ['PC & Laptops', 'Smartphones', 'Audio & Casques', 'Maison connectée']

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* HEADER */}
      <header style={{
        borderBottom: '1px solid var(--border)',
        background: 'rgba(10,10,15,0.95)',
        backdropFilter: 'blur(20px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, var(--accent), #0080ff)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18
            }}>⚡</div>
            <div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: 'var(--text)', letterSpacing: '-0.02em' }}>
                Tech<span style={{ color: 'var(--accent)' }}>Conseil</span>
              </div>
              <div style={{ fontSize: 10, color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>France</div>
            </div>
          </Link>
          <nav style={{ display: 'flex', gap: 8 }}>
            {categories.map(cat => (
              <Link key={cat} href={`/categorie/${cat.toLowerCase().replace(/[& ]/g, '-')}`}
                style={{ fontSize: 13, color: 'var(--text2)', padding: '6px 12px', borderRadius: 6, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.background = 'rgba(0,229,255,0.06)' }}
                onMouseLeave={e => { e.target.style.color = 'var(--text2)'; e.target.style.background = 'transparent' }}
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 0
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(0,229,255,0.08) 0%, transparent 70%)',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="badge badge-accent" style={{ marginBottom: 20 }}>
            ✦ Guides tech 100% indépendants
          </div>
          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: 20,
            background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Les meilleurs produits<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent), #0080ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>tech</span> — sélectionnés pour vous
          </h1>
          <p style={{ fontSize: 18, color: 'var(--text2)', maxWidth: 540, margin: '0 auto 36px', lineHeight: 1.6 }}>
            Comparatifs impartiaux, guides d'achat experts et avis détaillés sur les produits high-tech. Trouvez le bon choix au bon prix.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/articles/meilleur-pc-portable-2025" className="btn-amazon">
              🔥 Top PC Portables 2025
            </Link>
            <Link href="#articles" className="btn-outline">
              Voir tous les guides →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 48, padding: '20px 24px', flexWrap: 'wrap' }}>
          {[
            { val: '50+', label: 'Produits testés' },
            { val: '3', label: 'Articles / semaine' },
            { val: '100%', label: 'Avis impartiaux' },
            { val: 'Amazon.fr', label: 'Livraison Prime' },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--accent)' }}>{val}</div>
              <div style={{ fontSize: 12, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ARTICLES */}
      <section id="articles" style={{ padding: '72px 0' }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <div className="badge badge-orange" style={{ marginBottom: 12 }}>Derniers guides</div>
            <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em' }}>
              Comparatifs & Guides d'achat
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
            {articles.map((article, i) => (
              <Link key={article.slug} href={`/articles/${article.slug}`}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  overflow: 'hidden',
                  display: 'block',
                  transition: 'all 0.3s',
                  animation: `fadeUp 0.5s ease ${i * 0.1}s both`
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,229,255,0.3)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Card header */}
                <div style={{
                  padding: '32px 28px 24px',
                  background: 'linear-gradient(135deg, rgba(0,229,255,0.04), rgba(0,128,255,0.04))',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', gap: 16
                }}>
                  <div style={{ fontSize: 44 }}>{article.image}</div>
                  <div>
                    <div className="badge badge-accent" style={{ marginBottom: 8 }}>{article.categorie}</div>
                    <div style={{ fontSize: 12, color: 'var(--text3)' }}>{article.date} · {article.tempsLecture} de lecture</div>
                  </div>
                </div>

                <div style={{ padding: '24px 28px' }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, lineHeight: 1.35, color: 'var(--text)' }}>
                    {article.titre}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 20 }}>
                    {article.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>
                      {article.produits.length} produits analysés
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--text3)' }}>
                      Lire le guide →
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Coming soon card */}
            <div style={{
              background: 'var(--card)',
              border: '1px dashed var(--border)',
              borderRadius: 16,
              padding: '40px 28px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              textAlign: 'center', gap: 12
            }}>
              <div style={{ fontSize: 36 }}>⏳</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text2)' }}>
                Nouveau guide bientôt
              </div>
              <div style={{ fontSize: 13, color: 'var(--text3)' }}>
                3 articles publiés chaque semaine
              </div>
              <div className="badge badge-orange" style={{ marginTop: 4 }}>Automatisé par IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg2)', padding: '40px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, marginBottom: 4 }}>
              Tech<span style={{ color: 'var(--accent)' }}>Conseil</span> FR
            </div>
            <p style={{ fontSize: 12, color: 'var(--text3)', maxWidth: 380 }}>
              <em>En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.</em>
            </p>
          </div>
          <div style={{ fontSize: 12, color: 'var(--text3)' }}>
            © 2025 TechConseil FR · Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  )
}
