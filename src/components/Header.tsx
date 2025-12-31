import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={styles.scrollingText}>
                    <span>cancer care, advanced diagnostics, and a dedicated Ayurved and Nature Cure hospital — all under one roof. Affordable, compassionate, and world-class.</span>
                </div>
                <button className={styles.downloadBtn}>
                    <span>⇩</span> Download Report
                </button>
            </div>

            {/* Main Header */}
            <header className={styles.mainHeader}>
                <div className={styles.guruLeft}>
                    <Image
                        src="/images/guru.png"
                        alt="Guru Left"
                        width={200}
                        height={200}
                        className={styles.guruImage}
                        priority
                    />
                </div>

                <div className={styles.centerContent}>
                    <Image
                        src="/images/symbol.png"
                        alt="Symbol"
                        width={100}
                        height={100}
                        className={styles.symbolImage}
                    />
                    <h1 className={styles.hindiQuote}>
                        नासै रोग हरे सब पीरा, जपत निरंतर हनुमत बीरा II
                    </h1>
                </div>

                <div className={styles.guruRight}>
                    <Image
                        src="/images/man_blue_red.png"
                        alt="Guru Right"
                        width={200}
                        height={200}
                        className={styles.guruImage}
                        priority
                    />
                </div>
            </header>
        </div>
    );
};

export default Header;
