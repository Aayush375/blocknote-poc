"use client";
import dynamic from "next/dynamic";
 
export default function App() {
  // Creates a new editor instance.
  
  const BlockNoteEditor = dynamic(() => import('./UI/editor'), {
    ssr: false,
  });
  
  // Renders the editor instance using a React component.
  return <div>
    <BlockNoteEditor />
    </div>
  
}
 