import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';


class Google extends Plugin {
    init() {
      const editor = this.editor;
  
      editor.ui.componentFactory.add("google", () => {
        // The button will be an instance of ButtonView.
        const button = new ButtonView();
  
        button.set({
          label: "Google",
          withText: true,
        });
  
        //Execute a callback function when the button is clicked
        button.on("execute", () => {
          const selection = editor.model.document.selection;
          const range = selection.getFirstRange();
  
          for (const item of range.getItems()) {
            window.open(`https://www.google.com/search?q=${item.data}`, "_blank");
          }
        });
  
        return button;
      });
    }
  }

export default Google;