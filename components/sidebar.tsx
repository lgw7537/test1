"use client"

import React, { useState } from 'react';
import styles from './sidebar.module.css';
import Link from 'next/link';

const sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <button onClick={toggleSidebar} className={styles.menuButton}>메뉴</button>
            <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
                <button onClick={toggleSidebar} className={styles.closeButton}>X</button>
                {/* 링크 대신 div로 예시를 보여드립니다. 실제 프로젝트에서는 <Link> 또는 <a> 태그를 사용하세요. */}
                <Link href="/Traffic" className={styles.sidebarLink}>트래픽</Link>
                <Link href="/log" className={styles.sidebarLink}>로그</Link>
                <Link href="/myinfo" className={styles.sidebarLink}>내정보</Link>

            </div></div>

    );

};

export default sidebar;

