// app/head.tsx
export default function Head() {
  return (
    <>
      {/* Preconnects for faster third-party loads */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      <link rel="preconnect" href="https://elfsightcdn.com" />
      <link rel="dns-prefetch" href="https://elfsightcdn.com" />

      {/* Google calendar iframe */}
      <link rel="preconnect" href="https://calendar.google.com" />
      <link rel="dns-prefetch" href="https://calendar.google.com" />
    </>
  );
}