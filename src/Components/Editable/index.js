
//item reaproveitável para tornar div editável tanto no sidebar quanto na lista
const Editable = ({onInput, children, className}) => {
    return <div 
      contentEditable="true"
      className={className}
      suppressContentEditableWarning={true}
      onInput={(e) => onInput(e.currentTarget.textContent)}
    >
      {children}
    </div>
};

export default Editable