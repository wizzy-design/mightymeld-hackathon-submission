export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-8 w-8 bg-blue-300 text-center"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="">
          <Content
            style={{
              verticalAlign: "top",
            }}
            className="bg-indigo-500 p-2 text-white rounded-md w-16 h-12"
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="w-16 h-12 text-indigo-300">
          <Content
            style={{
              verticalAlign: "top",
            }}
            className="w-16 h-12 p-2 rounded-lg"
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return (
    <div
      onClick={flip}
      className="flex justify-center w-16 h-12 p-2 bg-indigo-300 rounded-md"
    ></div>
  );
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
