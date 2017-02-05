import React, {
    Component
} from 'react';

import Icon from 'antd/lib/icon';

export default class EmptyPage extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="empty-page container">
                <div className="empty-wrapper">
                    <Icon type="meh-o" className="icon" />
                    <span className="tip">功能正在完善中 ...</span>
                </div>
            </div>
        );

    }
}


