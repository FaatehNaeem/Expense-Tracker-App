import { TitlepropTypes, TitleDefaultProps } from "../props/title-props"
import { SubtitlepropTypes, SubtitleDefaultProps } from "../props/subtitle-props"
import { SpacerProptypes, SpacerDefaultProps } from "../props/spacer-props"



function Title({ fontsize, text, textAlign, marginLeft }) {
    return (
        <h1 style={{textAlign:textAlign,fontSize:fontsize,marginLeft:marginLeft}} id="title">{text}</h1>
    )
}

function Spacer({ marginTop }) {
    return(
    <div style={{marginTop:marginTop}}>
        </div>
    )
}

function SubTitle() {
    return (
        <div className="subtitle-spacer">
            <h1 className='text-center' id="subtitle">Get your expenses tracked !</h1>
        </div>
    )
}

Title.propTypes = TitlepropTypes
Title.defaultProps = TitleDefaultProps

SubTitle.propTypes = SubtitlepropTypes
SubTitle.defaultProps = SubtitleDefaultProps

Spacer.propTypes = SpacerProptypes
Spacer.defaultProps = SpacerDefaultProps

export { Title, SubTitle, Spacer }
