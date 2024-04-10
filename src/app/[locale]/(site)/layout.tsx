import { Sidebar } from "@/components/app";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main className="relative w-full mt-10 md:mt-0 md:ml-72">{children}</main>
    </>
  );
}
