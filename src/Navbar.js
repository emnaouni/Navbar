import React from'react';
import Dropdown from'./Dropdown'
import './App.css';



function Mynavbar(props)
{
return (<li><a className={props.item.active?'active':undefined} href={props.item.link}>{props.item.title}
{props.item.subMenu&&<ul className="list-subMenu">{props.item.subMenu.map(el=><Dropdown miniMenu={el}/>)}</ul>}
</a></li>
);
 }

export default Mynavbar;
