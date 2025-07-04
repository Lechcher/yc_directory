import React, { Suspense } from "react";
import Image from "next/image";
import UserStartups from "@/components/UserStartups";
import { StartupCardSkeleton } from "@/components/StartupCard";

// Defines the structure for a User object
export type UserTypes = {
  _id: string;
  id: number | null;
  name: string | null;
  username: string | null;
  email: string | null;
  image: string | null;
  bio: string | null;
};

// Defines the structure for a Session object, typically from NextAuth.js
export type SessionTypes = {
  id: string | null;
  expires: Date;
  user: {
    id: string | null;
    name: string;
    email: string | null;
    image: string | null;
  };
};

// Defines the props for the ProfileSelection component
interface ProfileSelectionProps {
  id: string;
  user: UserTypes;
  session?: SessionTypes;
}

// Enables experimental Partial Prerendering (PPR) for Next.js
export const experimental_ppr = true;

// ProfileSelection component displays a user's profile and their associated startups.
const ProfileSelection = ({ id, user, session }: ProfileSelectionProps) => {
  return (
    <section className="profile_container">
      {/* User Profile Card */}
      <div className="profile_card">
        <div className="profile_title">
          <h3 className="text-24-black uppercase text-center line-clamp-1">
            {user.name}
          </h3>
        </div>

        {/* User Profile Image */}
        <Image
          src={user.image || ""}
          alt={user.name || ""}
          width={220}
          height={220}
          className="profile_image"
        />

        {/* User Username */}
        <p className="text-30-extrabold mt-7 text-center">@{user.username}</p>

        {/* User Bio */}
        <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
      </div>
      {/* Startups Section */}
      <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
        {/* Title for Startups Section, dynamically changes based on session */}
        <p className="text-30-bold">
          {session?.id === id ? "Your" : "All"} Startups
        </p>
        {/* Grid for displaying startup cards */}
        <ul className="card_grid-sm">
          {/* Suspense for loading UserStartups component with a skeleton fallback */}
          <Suspense fallback={<StartupCardSkeleton />}>
            <UserStartups id={id} />
          </Suspense>
        </ul>
      </div>
    </section>
  );
};

export default ProfileSelection;
