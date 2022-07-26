import React from "react"
import Purchase from "../../../components/Purchase/Table"
import styles from "./Main.module.scss"

const MainPage = () => {



  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.contentHeader}>
          <button className={styles.headerButton}>
        Добавить покупку
          </button>
          <div className={styles.filterButton}>
            какой-то фильтер
          </div>
        </div>
        <div className={styles.tableWrapper}>
          
          <div className={styles.tableContent}>
            <Purchase/>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  )
}

export default MainPage
