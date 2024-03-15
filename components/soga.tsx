import React from 'react';
import styles from './soga.module.css';
import Image from 'next/image';

const Soga = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src='/hifive.png'
                    alt='hifive img'
                    width={500}
                    height={330}
                    priority
                />
                <div className={styles.feature}>주요 기능</div>
            </div>
            <div className={styles.description}>DDOS공격 패턴을 식별하고, 새로운 공격 유형에도 효과적으로 대응</div>
        </div>

    );
};

export default Soga;
