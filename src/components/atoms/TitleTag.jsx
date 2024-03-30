export default function TitleTag(props) {
  return (
    <h2 className="-ml-4 mt-8 w-fit rounded-r-2xl bg-accent-dark px-8 py-2 font-display text-4xl text-neutral-base">
      {props.children}
    </h2>
  );
}
