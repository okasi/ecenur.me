export default function Arrow(props) {
  return (
    <div
      className={`absolute top-1/2 flex size-10 cursor-pointer items-center justify-center rounded-full border bg-white md:size-12 ${
        props.left ? "left-4" : "left-auto right-4"
      }`}
    >
      <svg
        onClick={props.onClick}
        className={`size-6 md:size-7 ${props.disabled ? "opacity-25" : ""} ${
          props.left ? "-ml-1" : "-mr-1"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </div>
  );
}
