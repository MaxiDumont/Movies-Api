/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
}


module.exports = {
  env: { 
    NEXT_PUBLIC_API_KEY:"65442aaeb9545a4b3c15a12cc419644b",
    NEXT_PUBLIC_API_URL:"https://api.themoviedb.org/3",

    NEXT_PUBLIC_FIREBASE_API_KEY:"AIzaSyAlpBMXan6JMffkcge-rJfzFpY0_47ry3I",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:"maximovies-dec47.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID:"maximovies-dec47",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:"maximovies-dec47.appspot.com",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:"751235915729",
    NEXT_PUBLIC_FIREBASE_APP_ID:"1:751235915729:web:76165176d73cadda4ccaf0",
  },
  ...nextConfig,
}
