import { SiteFooter } from "@/components/site-footer";
import { StaticHeader } from "@/components/static-header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <StaticHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
