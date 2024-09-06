import props from 'prop-types'

const SubtitlepropTypes = {
    fontsize: props.string,
    text: props.string,
    textAlign: props.string,
    marginLeft: props.string
}


const SubtitleDefaultProps = {
    fontsize: "50px",
    text: "EXPENSE TRACKER",
    textAlign: "center",
    marginLeft: "0px"
}

export { SubtitlepropTypes, SubtitleDefaultProps }
