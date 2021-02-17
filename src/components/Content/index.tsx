import { Fragment } from 'react';
import { Chat, Information } from 'components';

export interface ContentProps {
    
}
 
const Content: React.FC<ContentProps> = () => {
    return (
        <Fragment>
            <Chat />
            <Information />
        </Fragment>
    );
}
 
export default Content;