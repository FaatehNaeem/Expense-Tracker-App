import props from 'prop-types'

const TitlepropTypes = {
    fontsize: props.string,
    text: props.string,
    textAlign: props.string,
    marginLeft: props.string
}


const TitleDefaultProps = {
    fontsize: "50px",
    text: "EXPENSE TRACKER",
    textAlign: "center",
    marginLeft: "0px"
}

export { TitlepropTypes, TitleDefaultProps }
