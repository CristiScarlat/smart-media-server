import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';


export default function FaIcon({iconName='', iconSize='1x', iconColor, style, onClick}) {
    return <FontAwesomeIcon 
    icon={icons[iconName] || null}
    size={iconSize}
    color={iconColor || null}
    style={style}
    onClick={onClick && onClick}/>
}