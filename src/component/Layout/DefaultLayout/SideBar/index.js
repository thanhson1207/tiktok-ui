import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside>
        <div className={cx('wrapper')}>
            <h2>SideBar</h2>
        </div>
    </aside>
}

export default Sidebar;
