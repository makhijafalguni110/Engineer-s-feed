import {
  FiHome,
  FiSearch,
  FiPlus,
  FiBell,
  FiUser,
} from "react-icons/fi";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="max-w-md mx-auto flex justify-around py-4 text-xl">

        <button>
          <FiHome />
        </button>

        <button>
          <FiSearch />
        </button>

        <button className="bg-green-100 rounded-full p-2">
          <FiPlus />
        </button>

        <button>
          <FiBell />
        </button>

        <button>
          <FiUser />
        </button>

      </div>
    </nav>
  );
}