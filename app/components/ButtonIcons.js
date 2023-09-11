export function BottomRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="11"
      fill="none"
      viewBox="0 0 42 11"
      className="absolute bottom-0 right-0"
    >
      <path
        fill="#fff"
        d="M42 11H42.955V22H42z"
        transform="rotate(180 42 11)"
      ></path>
      <path
        fill="#fff"
        d="M42 11H84V12H42z"
        transform="rotate(180 42 11)"
      ></path>
    </svg>
  );
}

export function TopRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="11"
      fill="none"
      viewBox="0 0 42 11"
      className="absolute top-0 right-0"
    >
      <path
        fill="#fff"
        d="M0 0H0.955V11H0z"
        transform="matrix(-1 0 0 1 42 0)"
      ></path>
      <path
        fill="#fff"
        d="M0 0H42V1H0z"
        transform="matrix(-1 0 0 1 42 0)"
      ></path>
    </svg>
  );
}

export function BottomLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="11"
      fill="none"
      viewBox="0 0 42 11"
      className="absolute bottom-0 left-0"
    >
      <path
        fill="#fff"
        d="M0 0H0.955V11H0z"
        transform="matrix(1 0 0 -1 0 11)"
      ></path>
      <path
        fill="#fff"
        d="M0 0H42V1H0z"
        transform="matrix(1 0 0 -1 0 11)"
      ></path>
    </svg>
  );
}

export function TopLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="11"
      fill="none"
          viewBox="0 0 42 11"
          className="absolute top-0 left-0"
    >
      <path fill="#fff" d="M0 0H0.955V11H0z"></path>
      <path fill="#fff" d="M0 0H42V1H0z"></path>
    </svg>
  );
}
