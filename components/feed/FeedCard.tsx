import Avatar from "./Avatar";
import {
  FiHeart,
  FiSmile,
  FiShare2,
} from "react-icons/fi";

type FeedCardProps = {
  author: string;
  time: string;
  badge: string;
  title: string;
  content: string;
  reactions: number;
  type: string;
};

export default function FeedCard({
  author,
  time,
  badge,
  title,
  content,
  reactions,
  type,
}: FeedCardProps) {
  const cardColor =
    type === "learn"
      ? "bg-blue-50"
      : type === "build"
      ? "bg-green-50"
      : "bg-purple-50";

  return (
    <div
      className={`rounded-3xl p-5 border border-gray-200 shadow-sm ${cardColor}`}
    >
      <div className="flex items-center gap-3 mb-5">
        <Avatar name={author} />

        <div>
          <p className="font-medium text-sm">
            {author}
          </p>

          <p className="text-xs text-gray-500">
            {time}
          </p>
        </div>
      </div>

      <p className="text-sm font-medium mb-4">
        {badge}
      </p>

      <h2 className="text-xl font-semibold mb-3">
        {title}
      </h2>

      <p className="text-gray-700 leading-relaxed">
        {content}
      </p>

      <div className="flex items-center gap-5 mt-6 text-sm text-gray-700">
        <div className="flex items-center gap-1">
          <FiHeart />
          {reactions}
        </div>

        <div className="flex items-center gap-1">
          <FiSmile />
          68
        </div>

        <button className="ml-auto">
          <FiShare2 />
        </button>
      </div>
    </div>
  );
}