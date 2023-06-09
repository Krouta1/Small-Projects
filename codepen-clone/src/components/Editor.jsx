import React, {useState}from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/css/css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

const Editor = (props) => {
  const {displayName,language,value,onChange} = props

  const [open, setOpen] = useState(true)

  function handleChange(editor,data,value) {
    onChange(value)
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className='editor-title'>
        {displayName}
        <button onClick={()=>setOpen(prevOpen => !prevOpen)}>{ open ? 'Smaller':'Bigger'}</button>
      </div>
       <ControlledEditor
       onBeforeChange={handleChange}
       value={value}
       className='codemirror-wrapper'
       options={{
        lineWrapping:true,
        mode: language,
        lineNumbers:true,
        theme: 'material'
       }}
       />
    </div>
  )
}

export default Editor