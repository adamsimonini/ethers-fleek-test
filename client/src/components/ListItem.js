import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles =  makeStyles({
    root:{
        width: '60%',
        minWidth: '325px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '15px',
        listStyle: 'none',
        height: '100px',
        backgroundColor: 'rgba(228, 233, 237, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '2%',
        paddingRight: '2%'
    },
    title: {
        color:'black',
        // marginLeft: '8%'
    },
    author: {
        color: '#4C4C4C',
        opacity: 0.9,
        // marginRight: '2%'
    }

})
export default function ListItem({item}){

    const classes = useStyles()

    const {title, author} = item

    return(
        <li className={classes.root}>
            <p className={classes.title}>{title}</p>
            <p className={classes.author}>{author}</p>
        </li>
    )
}