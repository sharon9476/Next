import classes from './Card.module.css'

function Card(props) {
    return (
        <div className={classes.all}>
            <h3>Hello World!</h3>
            {props.children}
        </div>
    )
}

export default Card