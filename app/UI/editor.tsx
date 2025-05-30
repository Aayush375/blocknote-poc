import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import {
  BasicTextStyleButton,
  BlockTypeSelect,
  ColorStyleButton,
  CreateLinkButton,
  FileCaptionButton,
  FileReplaceButton,
  FormattingToolbar,
  NestBlockButton,
  TextAlignButton,
  UnnestBlockButton,
  useCreateBlockNote,
  FormattingToolbarController,
} from "@blocknote/react";
import "./style.css";

export default function App() {
  const editor = useCreateBlockNote();

  return (
   
      <BlockNoteView editor={editor} formattingToolbar={false} >
      {/* Custom Formatting Toolbar */}
      <FormattingToolbar>
        <BlockTypeSelect />
        <BasicTextStyleButton basicTextStyle="bold" />
        <BasicTextStyleButton basicTextStyle="italic" />
        <BasicTextStyleButton basicTextStyle="underline" />
        <BasicTextStyleButton basicTextStyle="strike" />
        <BasicTextStyleButton basicTextStyle="code" />
        <TextAlignButton textAlignment="left" />
        <TextAlignButton textAlignment="center" />
        <TextAlignButton textAlignment="right" />
        <ColorStyleButton />
        <NestBlockButton />
        <UnnestBlockButton />
        <CreateLinkButton />
        <FileCaptionButton />
        <FileReplaceButton />
      </FormattingToolbar>

    
      </BlockNoteView>

 
      
    
  );
}