import React from 'react'
import { SButton, SButtonLink} from "./singlebtn.module";

export const SingleButton = (props) => {
    return (
        <>
            <SButton>
                <SButtonLink to={props.bl}>{props.bt}</SButtonLink>
            </SButton> 
        </>
    )
}
