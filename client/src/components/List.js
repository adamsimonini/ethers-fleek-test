import React from 'react'
import ListItem from './ListItem'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        marginTop: '70px',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})
export default function List({listArray}) {
    const classes = useStyles()
    // let array = [1,2,3,4]
    return(
        <div className='list-section' className={classes.root}>
            <ul>
                {listArray.map(item => (
                    <ListItem />
                ))}
            </ul>
        </div>
    )
}