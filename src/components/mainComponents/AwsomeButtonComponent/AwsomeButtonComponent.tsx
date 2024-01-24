import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './AwsomeButtonComponent.scss'

type Props = {
    btnName: string
}

const AwsomeButtonComponent = ({ btnName }: Props) => {
    return (
        <AwesomeButton type="primary" className="awsome-btn">
            {btnName}
        </AwesomeButton>
    )
}

export default AwsomeButtonComponent
