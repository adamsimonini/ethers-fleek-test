import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles =  makeStyles({
    root:{
        width: '60%',
        minWidth: '325px',
        marginLeft: 'auto',
        marginRight: 'auto',
        listStyle: 'none',
        height: '100px',
        backgroundColor: 'rgba(228, 233, 237, 0.6)',
    },
    title: {
        color:'black',
    }

})
export default function ListItem({item}){

    const classes = useStyles()

    return(
        <li className={classes.root}>
            <p className={classes.title}>list item {item}</p>
        </li>
    )
}