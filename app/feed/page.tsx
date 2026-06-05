"use client";

import { useState } from "react";

import FeedHeader from "@/components/feed/FeedHeader";
import FeedTabs from "@/components/feed/FeedTabs";
import FeedCard from "@/components/feed/FeedCard";
import BottomNav from "@/components/feed/BottomNav";

import { posts } from "@/data/dummyPosts";

export default function FeedPage() {
  const [activeTab, setActiveTab] =
    useState("learn");

  const filteredPosts = posts.filter(
    (post) => post.type === activeTab
  );

  return (
    <main className="min-h-screen bg-[#F8F7F4] pb-24">
      <div className="max-w-md mx-auto">

        <FeedHeader />

        <FeedTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="flex flex-col gap-4 px-4">
  {filteredPosts.map((post) => (
    <FeedCard
      key={post.id}
      author={post.author}
      time={post.time}
      badge={post.badge}
      title={post.title}
      content={post.content}
      reactions={post.reactions}
      type={post.type}
    />
  ))}
</div>

      </div>

      <BottomNav />
    </main>
  );
}