import React, {
    Component
} from 'react';

import Spin from 'antd/lib/spin';

import styles from '../styles/less/common.less';

export default class EmptyComponent extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className={styles.dataEmpty}>
                <div className={styles.dataIcon}>
                    <Spin size="large" />
                </div>
                <div>
                    {this.props.title||'没有数据...'}
                </div>
            </div>
        );
    }
}