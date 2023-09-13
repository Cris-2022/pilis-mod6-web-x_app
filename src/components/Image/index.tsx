interface Props {
  className?: string;
  src?: string | null;
  altSrc: string;
  alt: string;
}

export default function Image({ className, src, altSrc, alt }: Props) {
  return (
    <img
      className={className}
      src={src ?? altSrc}
      alt={alt}
      onError={e => {
        const target = e.target as HTMLImageElement;
        target.src = altSrc;
      }}
    />
  );
}
