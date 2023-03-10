export default function CheckmarkIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4 5.5998C12 5.1998 11.4 5.1998 11 5.5998L7 9.5998L5 7.5998C4.6 7.1998 4 7.1998 3.6 7.5998C3.2 7.9998 3.2 8.5998 3.6 8.9998L6.3 11.6998C6.5 11.8998 6.7 11.9998 7 11.9998C7.3 11.9998 7.5 11.8998 7.7 11.6998L12.4 6.9998C12.8 6.5998 12.8 5.9998 12.4 5.5998Z"
        fill="inherit"
      />
    </svg>
  );
}
