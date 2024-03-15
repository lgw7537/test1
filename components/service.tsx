import React from 'react';
import styles from './service.module.css'


const Service = () => {
    return (
        <div>
            <div className={styles.topText}>DDOS 공격 감지 및 예방 시스템 DS</div>
            <div className={styles.serviceintro}>
                <h2>서비스 소개</h2>
                <p>
                    {' '}
                    저희 DDOS 공격 감지 및 예방 시스템은
                    <br />
                    <p />
                    DDOS공격에 대한 방어 프로그램을 제공합니다.
                </p>

                다양한 규모의 비즈니스 및 네트워크 인프라에 적용이 가능하며
                <br />
                <br />
                사용자 경험에 중점을 두어 고객에게 안정적이고

                <p>빠른 서비스를  제공 합니다.</p>

                <br />
                <p>DDOS 공격 감지 프로그램을 사용하여 귀하의 네트워크를
                    <br /> 안전하게 보호하고</p>

                <p>최상의 서비스를 느껴보세요 !</p>
            </div>
        </div>
    )
};

export default Service;
