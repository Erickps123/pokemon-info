
function NavButton(props: any){

    function buttonClick()
    { 
        props.onClick()
    }

    
    return( 
    <button className="navbtn" id={props.type} onClick={buttonClick} type="button"><img src={props.img} alt="" /></button>
    );
}

export default NavButton