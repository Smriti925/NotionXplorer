export default function Tab({ tabData, field, setField }) {
  return (
    <div className="my-10 w-fit rounded-full border border-green-5 font-bold">
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`${
            field === tab.type
              ? "rounded-full bg-green-5 text-black"
              : "rounded-full "
          } px-8 py-3`}
        >
          {tab?.tabName}
        </button>
      ))}
    </div>
  )
}
