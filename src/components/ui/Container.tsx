import { cn } from "@utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function Container({ children, className = "" }: ContainerProps) {
  const containerClasses = cn("px-4 py-8 md:px-8", className);
  return <div className={containerClasses}>{children}</div>;
}

export default Container;
