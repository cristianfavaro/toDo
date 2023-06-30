


const Editable = ({onInput, children}) => {
    return <div 
      contentEditable="true"
      suppressContentEditableWarning={true}
      onInput={(e) => onInput(e.currentTarget.textContent)}
    >
      {children}
    </div>
};

export default Editable