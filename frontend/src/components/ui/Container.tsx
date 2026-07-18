interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[80rem] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
