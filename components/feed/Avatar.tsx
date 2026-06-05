type AvatarProps = {
  name: string;
};

export default function Avatar({
  name,
}: AvatarProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center font-medium text-gray-700">
      {initial}
    </div>
  );
}