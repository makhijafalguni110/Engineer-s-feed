import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

      {/* Builder Symbol */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-2xl font-light text-gray-600">
            {"</>"}
          </span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-center text-2xl font-medium text-gray-900 mb-2">
        Welcome
      </h2>

      <p className="text-center text-sm text-gray-500 mb-8">
        Sign in to continue
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-3">

        <button
          className="
            w-full
            border border-gray-300
            rounded-xl
            py-3
            flex items-center justify-center gap-3
            text-sm font-medium
            hover:bg-gray-50
            transition-all duration-200
          "
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <button
          className="
            w-full
            border border-gray-300
            rounded-xl
            py-3
            flex items-center justify-center gap-3
            text-sm font-medium
            hover:bg-gray-50
            transition-all duration-200
          "
        >
          <FaGithub size={18} />
          Continue with GitHub
        </button>

      </div>
    </div>
  );
}