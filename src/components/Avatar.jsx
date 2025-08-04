import React from "react"
import { IoPersonSharp } from "react-icons/io5"

export default function Avatar(props) {
    console.log(props)

    let colors = ["navy", "pink", "red", "blue", "green"]
    const generateRandom = () => {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    const [avatarColor, setAvatarColor] = React.useState(() => generateRandom())
    const [anonymousColor, setAnonymousColor] = React.useState(() => generateRandom())
    

    
    return (
        <>
        {props.src && <div className={props.className}><img src={props.src} alt={props.alt} {...props}/></div>}
        {props.children && <div className={`avatar avatar-letters ${avatarColor}`}>{props.children}</div>}
        {!props.src && !props.children && <div className={`avatar avatar-icon ${anonymousColor}`}><IoPersonSharp /></div>}
        </>
    )
}