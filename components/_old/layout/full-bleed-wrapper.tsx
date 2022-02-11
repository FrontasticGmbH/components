export default function FullBleedWrapper({ children, className = '' }) {
  return (
    <div
      className={className}
      style={{
        width: '100vw',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </div>
  );
}
