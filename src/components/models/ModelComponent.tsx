import React from "react";
import styles from './ModelComponent.module.css';

const Model = () => {

    return (
        <div className={styles.model_content}>
            <div className={styles.model_content__item}>
                <div className={styles.overlay}>
                    <div className={styles.content__header}>
                        <h1> <a>Model 1</a></h1>
                        <p><a>Shaped By performance</a></p>
                    </div>
                </div>
            </div>
            <div className={styles.model_content__item}>
                <div className={styles.overlay}>
                    <div className={styles.content__header}>
                        <h1> <a>Model 2</a></h1>
                        <p><a>Shaped By performance</a></p>
                    </div>
                </div>
            </div>
            <div className={styles.model_content__item}>
                <div className={styles.overlay}>
                    <div className={styles.content__header}>
                        <h1> <a>Model 3</a></h1>
                        <p><a>Shaped By performance</a></p>
                    </div>
                </div>
            </div>
            <div className={styles.model_content__item}>
                <div className={styles.overlay}>
                    <div className={styles.content__header}>
                        <h1> <a>Model 4</a></h1>
                        <p><a>Shaped By performance</a></p>
                    </div>
                </div>
            </div>
            <div className={styles.model_content__item}>
                <div className={styles.overlay}>
                    <div className={styles.content__header}>
                        <h1> <a>Model 5</a></h1>
                        <p><a>Shaped By performance</a></p>
                    </div>
                </div>
            </div>
            <div className={styles.model_content__item}>
                <div className={styles.overlay}>
                    <div className={styles.content__header}>
                        <h1> <a>Model 6</a></h1>
                        <p><a>Shaped By performance</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model;