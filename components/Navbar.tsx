import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export default function Navbar() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale, locales } = router

  return (
    <header className="w-full bg-[#13192a] border-b border-cyan-700/30 shadow-astra-glow z-50">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-cyan-400 font-extrabold text-2xl md:text-3xl tracking-tight drop-shadow-[0_2px_12px_rgba(14,165,233,0.35)] hover:opacity-90 transition font-heading"
          >
            ASTRA DAO
          </Link>
        </div>
        {/* Menu */}
        <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
          <Link href="/docs"><span className="nav-btn">{t('menu_docs')}</span></Link>
          <a href="https://sepolia.etherscan.io/address/0x9fcd205ba5b3f81442ae268550f3af012725fac7" target="_blank" rel="noopener" className="nav-btn">{t('menu_testnet')}</a>
          {/* Kéros (alpha) en construction */}
          <span
            className="nav-btn opacity-50 cursor-not-allowed"
            title="En construction"
            aria-disabled="true"
          >
            {t('menu_keros')}
          </span>
          <a href="mailto:contact@astra-dao.org" className="nav-btn">{t('menu_contact')}</a>
          <a href="https://t.me/astradaogroup" target="_blank" rel="noopener" className="nav-btn">{t('menu_telegram')}</a>
          <a href="https://discord.gg/[TON_SERVEUR]" target="_blank" rel="noopener" className="nav-btn">{t('menu_discord')}</a>
          <a href="https://x.com/astra_future" target="_blank" rel="noopener" className="nav-btn">{t('menu_x')}</a>
          {/* Lang switcher */}
          {locales && locales.length > 1 && (
            <select
              value={locale}
              onChange={e => router.push(router.pathname, router.asPath, { locale: e.target.value })}
              className="ml-3 bg-cyan-900/60 text-cyan-200 font-bold px-2 py-1 rounded-lg border border-cyan-700/40 focus:ring focus:ring-cyan-500 outline-none"
              style={{ minWidth: 54 }}
            >
              {locales.map(lng => (
                <option key={lng} value={lng}>{lng.toUpperCase()}</option>
              ))}
            </select>
          )}
        </div>
      </nav>
      <style jsx global>{`
        .nav-btn {
          display: inline-block;
          padding: 0.6rem 1.3rem;
          border-radius: 0.7rem;
          font-weight: 600;
          font-size: 1.07rem;
          color: #bae6fd;
          background: linear-gradient(90deg, #0e2638dd 60%, #23305e90 100%);
          box-shadow: 0 2px 20px #0891b21a;
          margin: 0 2px;
          transition: all 0.16s;
          border: 1.5px solid #0ea5e944;
          text-shadow: 0 1px 8px #164e6377;
          outline: none;
        }
        .nav-btn:hover {
          background: linear-gradient(90deg, #164e63f2 70%, #0ea5e9f5 100%);
          color: #fff;
          box-shadow: 0 2px 18px #0ea5e955;
          border-color: #0ea5e9cc;
          transform: translateY(-2px) scale(1.04);
        }
        .nav-btn[aria-disabled="true"], .nav-btn.opacity-50 {
          pointer-events: none;
        }
      `}</style>
    </header>
  )
}
