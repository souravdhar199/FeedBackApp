export default function Button({children, version, type, isDisables}) {
  return (
    <button type={type} disabled={isDisables} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}


Button.defaultProps={
  version: "primary",
  type:'button',
  isDisables: true,
}