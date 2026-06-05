type FeedTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function FeedTabs({
  activeTab,
  setActiveTab,
}: FeedTabsProps) {
  return (
    <div className="flex justify-center gap-3 py-4">

      <button
        onClick={() => setActiveTab("learn")}
        className={`px-4 py-2 rounded-full ${
          activeTab === "learn"
            ? "bg-blue-100"
            : "bg-white"
        }`}
      >
        Learn
      </button>

      <button
        onClick={() => setActiveTab("build")}
        className={`px-4 py-2 rounded-full ${
          activeTab === "build"
            ? "bg-green-100"
            : "bg-white"
        }`}
      >
        Build
      </button>

      <button
        onClick={() => setActiveTab("laugh")}
        className={`px-4 py-2 rounded-full ${
          activeTab === "laugh"
            ? "bg-purple-100"
            : "bg-white"
        }`}
      >
        Laugh
      </button>

    </div>
  );
}