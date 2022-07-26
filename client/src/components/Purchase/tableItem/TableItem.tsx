import React from 'react';
import styles from "./TableItem.module.scss"
import product from "../../../static/product.png"

function TableItem() {
    return (
        <>
        <tr className={styles.itemWrapper}>
          <th className={styles.tbName}>
            <img className={styles.image} height="40" src={product}></img>
            Продукты
          </th>
          <th className={styles.tbShop}>Магнит</th>
          <th className={styles.tbSum}>980.23 р.</th>
          <th className={styles.tbType}>покупка</th>
          <th className={styles.tbDate}>23 июня 2022</th>
        </tr>
        </>
    );
}

export default TableItem