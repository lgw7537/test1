import React from 'react';
import styles from './soga3.module.css';
import Image from 'next/image';

const Soga3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src='/pic2.png'
                    alt='hifive img'
                    width={500}
                    height={330}
                    priority
                />

            </div>
            <div className={styles.description}>공격 시도와 시스템 반응에 대한 상세한 로그를 제공</div>
        </div>

    );
};

export default Soga3;
