import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const siteUrl = (process.env.VITE_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '')).replace(/\/$/, '')
const dist = resolve('dist')
await mkdir(dist, { recursive: true })
if (siteUrl) {
  const canonical = `${siteUrl}/`
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${canonical}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url></urlset>\n`
  await writeFile(resolve(dist, 'sitemap.xml'), sitemap)
  const htmlPath = resolve(dist, 'index.html')
  let html = await readFile(htmlPath, 'utf8')
  if (!html.includes('rel=\"canonical\"')) html = html.replace('</head>', `    <link rel=\"canonical\" href=\"${canonical}\" />\n    <meta property=\"og:url\" content=\"${canonical}\" />\n  </head>`)
  await writeFile(htmlPath, html)
  await writeFile(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /auth\nDisallow: /account\nSitemap: ${siteUrl}/sitemap.xml\n`)
  console.log(`SEO: sitemap.xml et robots.txt générés pour ${siteUrl}`)
} else {
  console.warn('SEO: VITE_SITE_URL non défini. Le sitemap sera généré au prochain build avec VITE_SITE_URL ou les variables Vercel.')
}
