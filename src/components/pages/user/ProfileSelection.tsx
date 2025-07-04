import React, { Suspense } from "react";
import Image from "next/image";
import UserStartups from "@/components/UserStartups";
import { StartupCardSkeleton } from "@/components/StartupCard";

export type UserTypes = {
  _id: string;
  id: number | null;
  name: string | null;
  username: string | null;
  email: string | null;
  image: string | null;
  bio: string | null;
};

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

interface ProfileSelectionProps {
  id: string;
  user: UserTypes;
  session?: SessionTypes;
}

export const experimental_ppr = true;

const ProfileSelection = ({ id, user, session }: ProfileSelectionProps) => {
  return (
    <section className="profile_container">
      <div className="profile_card">
        <div className="profile_title">
          <h3 className="text-24-black uppercase text-center line-clamp-1">
            {user.name}
          </h3>
        </div>

        <Image
          src={user.image || ""}
          alt={user.name || ""}
          width={220}
          height={220}
          className="profile_image"
        />

        <p className="text-30-extrabold mt-7 text-center">@{user.username}</p>

        <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
      </div>
      <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
        <p className="text-30-bold">
          {session?.id === id ? "Your" : "All"} Startups
        </p>
        <ul className="card_grid-sm">
          <Suspense fallback={<StartupCardSkeleton />}>
            <UserStartups id={id} />
          </Suspense>
        </ul>
      </div>
    </section>
  );
};

export default ProfileSelection;
