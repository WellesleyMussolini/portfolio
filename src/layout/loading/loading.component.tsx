import React from 'react';
import styles from './loading.module.scss';

const Loading = () => {
    const [showLoader, setShowLoader] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return <div className={`${styles.loading} ${!showLoader && styles.hide}`}></div>
};

export default Loading;
