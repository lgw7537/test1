import React from 'react';
import styles from './soga2.module.css';
import Image from 'next/image';

const Soga2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src='/pic.png'
                    alt='hifive img'
                    width={500}
                    height={330}
                    priority
                />

            </div>
            <div className={styles.description}>공격이 감지되면 자동으로 트패릭을 필터링하며 차단</div>
        </div>

    );
};

export default Soga2;
