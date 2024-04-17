import React from 'react';
import styles from './youtube.module.css';
import Link from 'next/link';

interface YoutubeVideoProps {
    videoId: string;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ videoId }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (

        <div className="video-responsive">
            사용방법
            <iframe
                width="840"
                height="480"
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            ></iframe>
            <div className={styles.event}>
                <Link href='/Moreinfo'>사용방법 더보기</Link>
                <Link href='/login'>로그인폼 가기</Link>
            </div>
        </div>
    );
};

export default YoutubeVideo;
