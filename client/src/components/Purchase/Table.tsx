import React from "react"
import styles from "./Table.module.scss"
import magnit from "../../static/magnit.png"
import product from "../../static/product.png"
import TableItem from "./tableItem/TableItem"

const Table = () => {
  return (
    <table className={styles.wrapper}>
      <thead className={styles.tableHead}>
        <tr className={styles.thHeader}>
          <th className={styles.thName}>Категория</th>
          <th className={styles.thShop}>Магазин</th>
          <th className={styles.thSum}>Сумма</th>
          <th className={styles.thType}>Тип</th>
          <th className={styles.thDate}>Дата/Время</th>
        </tr>
      </thead>
      <tbody>
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      </tbody>
    </table>
  )
}

export default Table
