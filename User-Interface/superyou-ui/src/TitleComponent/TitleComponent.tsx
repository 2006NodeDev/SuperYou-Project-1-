import React, { FunctionComponent } from 'react'


interface ITitleComponentProps{
    title:string
}
export const TitleComponent:FunctionComponent<ITitleComponentProps> = (props:any) =>{
    return(
    <h1>{props.title}</h1>
    );
}
 