/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      formats: ["image/avif", "image/webp"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "storage.googleapis.com",
          port: "",
          pathname: "/du-prd/books/images/**",
        },
      ],
    },
  };