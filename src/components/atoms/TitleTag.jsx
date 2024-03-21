export default function TitleTag(props) {
  return (
    <h2 className="bg-accent-dark w-fit py-2 px-8 mt-8 -ml-4 rounded-r-2xl text-neutral-base font-display text-4xl">
    {props.children}
  </h2>
  )
}