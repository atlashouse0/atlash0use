import { FaInstagram } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'


import * as Icons from 'react-icons'

type PropsButon = {
    class: string,
    link: string,
    size: number,
    icon: string
}

export function TryButton(props: PropsButon){
    const MenuIcon = (Icons as any)[props.icon];
    var WriteButton = '';

    function HandlleSwitchButton(param: string){
        switch(props.class) {
            case 'instagram-btn':
                WriteButton = 'Instagram';
                return(
                    <FaInstagram fontSize={props.size} className='icon-button' />
                    )
                break;
            
            case 'whatsapp-btn':
                WriteButton = 'Whatsapp'
                return(
                    <BsWhatsapp fontSize={props.size} className='icon-button' />
                )
                break;
        
           

            case 'linkedin-btn':
                WriteButton = 'Linkedin'
                return(
                    <AiOutlineLinkedin fontSize={props.size} className='icon-button' />
                )
            break;

            

            default:
                break;
        }
    }

    return(
        <a href={props.link} target="_blank" className={props.class}>
            {/* {HandlleSwitchButton(props.class)} */}
            <MenuIcon size={props.size} className='icon-button icon-button'/>
            {/* {WriteButton} */}
            {props.icon}
        </a>
    )
}