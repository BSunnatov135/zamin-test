/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

// let baseUrl = 'https://development.com'

// if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
//   baseUrl = 'https://production.com'
// }

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['test.cdn.rasta.app']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  env: {
    // BASE_URL: baseUrl,
    AIR_TABLE_USER_CREATE_URL:
      'https://api.airtable.com/v0/appJFWDgqFRK7GTxP/Application',

    AIR_TABLE_GET_AGENDA_URL:
      'https://api.airtable.com/v0/appJFWDgqFRK7GTxP/Agenda?maxRecords=1000&view=Grid%20view',
    AIR_TABLE_API_KEY: 'keyanPtTzPHXaWDKR'
  }
})

module.exports = nextConfig
