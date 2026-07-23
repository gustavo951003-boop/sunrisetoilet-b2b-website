import {draftMode} from "next/headers";
import {VisualEditing} from "next-sanity/visual-editing";

export default async function BlogLayout({children}: {children: React.ReactNode}) {
  const isPreview = (await draftMode()).isEnabled;

  return (
    <>
      {children}
      {isPreview ? <VisualEditing zIndex={1000} /> : null}
    </>
  );
}
