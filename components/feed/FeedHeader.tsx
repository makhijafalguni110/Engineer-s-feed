import Avatar from "./Avatar";

export default function FeedHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-5">
      <div>
        <h1 className="text-2xl font-semibold">
          Compile.
        </h1>

        <p className="text-sm text-gray-500">
          Curiosity. Code. Culture.
        </p>
      </div>

      <Avatar name="Guni" />
    </header>
  );
}