export default function DraftsIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 7C13 7.55228 12.5523 8 12 8H8C7.44771 8 7 7.55228 7 7C7 6.44772 7.44771 6 8 6H12C12.5523 6 13 6.44772 13 7Z"
        fill="inherit"
      />
      <path
        d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8C7.44771 9 7 9.44772 7 10C7 10.5523 7.44771 11 8 11H12Z"
        fill="inherit"
      />
      <path
        d="M10 14C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H8C7.44771 12 7 12.4477 7 13C7 13.5523 7.44771 14 8 14H10Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 15C3 16.6569 4.34315 18 6 18H14C15.6569 18 17 16.6569 17 15V5C17 3.34315 15.6569 2 14 2H6C4.34315 2 3 3.34315 3 5V15ZM6 16C5.44772 16 5 15.5523 5 15V5C5 4.44771 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5V15C15 15.5523 14.5523 16 14 16H6Z"
        fill="inherit"
      />
    </svg>
  );
}
