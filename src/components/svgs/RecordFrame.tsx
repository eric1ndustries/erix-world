type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function RecordFrame({ className, children }: Props) {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/assets/record-sleeve-frame.svg"
        alt="Record Frame"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {children}
    </div>
  );
}