import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardLinkProps {
  href: string;
  src: any;
  alt: string;
  children: React.ReactNode;
}

const CardLink = ({ href, src, alt, children }: CardLinkProps) => {
  return (
    <Link
      href={href}
      className="border border-primary rounded-md overflow-hidden relative"
    >
      <Image
        src={src}
        alt={alt}
        className="opacity-50 hover:scale-110 transition-transform"
        priority
      />
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
        {children}
      </p>
    </Link>
  );
};

export default CardLink;
