import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('title')} – ASTRA DAO</title>
        <meta name="description" content={t('project_description')} />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#111927] to-[#171e2f] px-4">
        {/* HERO */}
        <section className="w-full flex flex-col items-center pt-24 pb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold text-cyan-400 drop-shadow-md mb-6 text-center">
            {t('hero_heading')}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 opacity-90 max-w-3xl text-center mb-8">
            {t('hero_subheading')}
          </p>
        </section>
        {/* DESCRIPTION */}
        <section className="w-full max-w-4xl bg-[#1e293b] rounded-2xl shadow-2xl px-10 py-12 mb-12 border border-cyan-700/30">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 text-center">{t('project_description_title')}</h2>
          <p className="text-xl text-gray-100 opacity-95 text-center mb-6">
            {t('project_description')}
          </p>
          <h3 className="text-xl font-semibold text-cyan-200 mt-6 mb-2 text-center">{t('project_values_title')}</h3>
          <p className="text-lg text-cyan-100 text-center">{t('project_values')}</p>
        </section>
        {/* CALL TO ACTION */}
        <section className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-center gap-8 pb-16">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-cyan-400 mb-2">{t('join_title')}</h4>
            <p className="text-lg text-gray-100 mb-4">{t('join_desc')}</p>
            <div className="flex gap-4 justify-center">
              <Link href="/docs" className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl px-6 py-3 text-lg font-bold shadow-md transition-all">
                {t('cta_docs')}
              </Link>
              <Link href="/contact" className="bg-gray-800 hover:bg-gray-700 text-cyan-200 border border-cyan-500 rounded-xl px-6 py-3 text-lg font-bold shadow transition-all">
                {t('cta_contact')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps(context: { locale: string }) {
  const locale = context.locale || 'en'
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
