/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next"
const nextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tds-images.thedailystar.net',
      },
    ],
}
}

export default withPlaiceholder(nextConfig)
