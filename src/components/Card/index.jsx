import styles from "./card.module.css"

export default function Card() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImgContainer}>
                <img src="https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwdc076a8c/images/customer-service/canyon-service-course-01.jpg?sw=1920" alt="" className={styles.cardImg}/>
            </div>
            

            <div className={styles.cardContent}>
                <h3>WELCOME TO CANYON FACTORY SERVICE</h3>
                <p>Nestled in the heart of Belgium, Canyon’s flagship Factory Service brings you servicing, repairs and bike advice direct from the experts.</p>
                <p>Wingepark 16, 3110 Rotselaar - Belgium</p>
            </div>
        </div>
    )
}