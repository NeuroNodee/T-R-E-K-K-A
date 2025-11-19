'use client';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string; // ✅ added this line
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const PageTransition = ({
  children,
  href,
  className, // ✅ destructured here
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const body = document.querySelector('body');
    body?.classList.add('page-transition');
    await sleep(400);
    router.push(href);
    body?.classList.remove('page-transition');
  };

  return (
    <Link
      onClick={handleTransition}
      href={href}
      className={className} // ✅ passed here
      {...props}
    >
      {children}
    </Link>
  );
};

export default PageTransition;
