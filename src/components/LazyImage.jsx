import React from 'react'

export default function LazyImage({ src, fallback, alt, className }) {
  const [error, setError] = React.useState(false)
  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={className}
    />
  )
}
