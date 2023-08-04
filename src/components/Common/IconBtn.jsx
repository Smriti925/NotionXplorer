export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`flex items-center ${
        outline
          ? ""
          : "rounded-full border border-green-5 px-6 py-2 text-green-5"
      } ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-green-5"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}
