import React from 'react'
import ListItem from './ListItem'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
    root: {
        marginTop: '70px',
        // width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})
export default function List({listData}) {
    const classes = useStyles()
    // let array = [1,2,3,4]
    return(
        <div className={classes.root}>
            <ul>
                {listData.map(item => (
                    <ListItem key={item} item={item}/>
                ))}
            </ul>
        </div>
    )
}

List.propTypes = {
    listData: PropTypes.array
}

List.defaultProps = {
    listData: []
}