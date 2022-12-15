import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/083bdd98191f72128eebdbcca718c29f~c5_100x100.jpeg?x-expires=1671282000&x-signature=BsxAkTTtqXNmzdn8GmJ6j%2FigKAo%3D"
                alt="Linh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le Van Linh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Levanlinh</span>
            </div>
        </div>
    );
}

export default AccountItem;
