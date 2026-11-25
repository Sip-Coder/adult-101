import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getViewer } from "@/lib/viewer";

export async function AppShell({ children }: { children: React.ReactNode }) {
  const viewer = await getViewer();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader viewer={viewer} />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
