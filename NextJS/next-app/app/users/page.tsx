import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}
const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
  return (
    <div>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
