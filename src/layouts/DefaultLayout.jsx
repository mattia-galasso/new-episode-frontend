import { Outlet } from "react-router";

export default function DefaultLayout() {

  return (
    <>
    {/* HEADER */}
    <header className="fixed-top">

    </header>

    {/* MAIN CONTENT */}
    <main>
      <Outlet />
    </main>
    </>
  );
}