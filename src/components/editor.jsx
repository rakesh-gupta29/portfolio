import { useEffect ,useState } from "react";
import ReactEditor,{Quill} from "react-quill"
import postscribe from "postscribe"
import "./styles/editor.css"
import 'react-quill/dist/quill.snow.css';

const Editor =({ data="this is a value " }) =>{
    const moduleOptions = {
        toolbar:false
    }

     let BlockEmbed = Quill.import('blots/block/embed');
    let Inline = Quill.import('blots/inline');
    class CustomBlot extends BlockEmbed {
        static create(value) {
            let node = super.create();
            node.className = "code-wrapper"
            node.contentEditable = false;
            node.dataset.link = value;
            const nodeLoader = document.createElement ("div")
            nodeLoader.hidden = true ;
            document.body.appendChild( nodeLoader)
            postscribe(nodeLoader,value,{
                done:function(){
                    node.innerHTML = nodeLoader.innerHTML;
                   nodeLoader.parentElement.removeChild( nodeLoader)
                }
            });
            return node;
        }
        static formats(node) {
            return   node.dataset.link;
        }
        static value(node) {
            return  node.dataset.link;
        }
    }
    class LinkBlot extends Inline {
        static create(value) {
          let node = super.create();
          node.setAttribute('href', value);
          node.onmouseover = function(){
              node.style.cursor ="pointer"
          }
          node.setAttribute('target', '_blank');
          return node;
        }
      
        static formats(node) {
          return node.getAttribute('href');
        }
      }
      LinkBlot.blotName = 'link';
      LinkBlot.tagName = 'a';
      
      Quill.register('formats/link',LinkBlot);

    CustomBlot.blotName = "code-custom"
    CustomBlot.tagName = "div"
    Quill.register('formats/code-block', CustomBlot);
        
    const editorFormats = [
        'size',
        'bold', 'italic', 'underline', 'strike',
        'blockquote',
        'list', 'bullet', 
        'script','color','background','align','code-custom','link','image'
    ]


  
    return(
        <>
        <ReactEditor 
            theme="snow"
            readOnly
            className="editor-content-wrapper px-sm py-lg  "
            modules={moduleOptions}
            formats={editorFormats}
            value={data}
            spellCheck ={false }
        />

        </>
    )

}


export default Editor