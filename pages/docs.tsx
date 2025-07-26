import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FaFilePdf } from 'react-icons/fa'

type DocProps = {
  files: string[]
}

export default function DocsPage({ files }: DocProps) {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('menu_docs')} – ASTRA DAO</title>
        <meta name="description" content="All project documentation, whitepapers, and legal PDF files for ASTRA DAO." />
      </Head>
      <main className="min-h-screen px-4 py-20 flex flex-col items-center bg-gradient-to-br from-[#111927] to-[#171e2f]">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-cyan-400 mb-8 text-center drop-shadow">
          {t('menu_docs')}
        </h1>
        <div className="max-w-2xl w-full flex flex-col gap-5">
          {files.length === 0 && (
            <div className="text-center text-cyan-300 text-lg opacity-80">
              {t('no_docs') || "No documents available yet."}
            </div>
          )}
          {files.map((file) => (
            <a
              href={`/pdfs/${encodeURIComponent(file)}`}
              target="_blank"
              rel="noopener"
              key={file}
              className="flex items-center bg-[#1e263d] border border-cyan-800/40 rounded-2xl shadow-lg px-6 py-6 mb-2 hover:bg-cyan-950/60 transition group"
              style={{ minHeight: 88 }}
            >
              <FaFilePdf className="text-cyan-400 text-4xl mr-6 flex-shrink-0 drop-shadow" />
              <span className="text-2xl font-bold text-cyan-100 truncate flex-1 group-hover:underline">
                {humanizePdfName(file)}
              </span>
              <span className="ml-6 text-cyan-300 font-semibold text-lg group-hover:text-white transition">
                PDF
              </span>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}

function humanizePdfName(filename: string) {
  return filename
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\.pdf$/i, '')
    .replace(/\s+/g, ' ')
    .replace(/\b(\w)/g, c => c.toUpperCase())
    .trim()
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const pdfDir = path.join(process.cwd(), 'public/pdfs')
  let files: string[] = []

  try {
    files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'))
  } catch {
    files = []
  }

  return {
    props: {
      files,
      ...(await serverSideTranslations(locale ?? 'en', ['common']))
    }
  }
}
